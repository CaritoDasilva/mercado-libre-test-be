const axios = require('axios');

module.exports.getProducts = (req, res) => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.params.query}`)
        .then(data => {
            if (data) {
                const filters = data.data.filters[0]
                const { values } = filters
                const categories = values[0].path_from_root.map(val => val.name)
                const _items = (data.data.results).slice(0, 4)
                const items = _items.map(item => {
                    let _decimals = item.price.toString().split('.')
                    const data =
                    {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: item.price,
                            decimals: !parseInt(_decimals[1]) ? 0 : parseInt(_decimals[1])
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping,
                        city: item.address.city_name
                    }
                    return data
                })
                const products = {
                    author: {
                        name: 'Carolina',
                        lastname: 'Da Silva'
                    },
                    items,
                    categories
                }
                return res.json({ products: products })


            }
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getProductDescription = (req, res) => {
    const url = `https://api.mercadolibre.com/items/${req.params.id}`
    const urlDescription = `https://api.mercadolibre.com/items/${req.params.id}/description`
    Promise.all([
        axios.get(url),
        axios.get(urlDescription)
    ])
        .then((responses) => { // Responde a todas las promesas
            if (responses) {
                itemDetail = responses[0].data
                itemDescription = responses[1].data
                let _decimals = itemDetail.price.toString().split('.')
                console.log("🚀 ~ file: products.controllers.js ~ line 53 ~ .then ~ responses", itemDetail)

                const descriptionProduct = {
                    author: {
                        name: 'Carolina',
                        lastname: 'Da Silva'
                    },
                    item: {
                        id: itemDetail.id,
                        title: itemDetail.title,
                        price: {
                            currency: itemDetail.currency_id,
                            amount: itemDetail.price,
                            decimals: !parseInt(_decimals[1]) ? 0 : parseInt(_decimals[1]),
                        },
                        category_id: itemDetail.category_id,
                        picture: itemDetail.pictures[1].url,
                        condition: itemDetail.condition,
                        free_shipping: itemDetail.shipping.free_shipping,
                        sold_quantity: itemDetail.sold_quantity,
                        description: itemDescription.plain_text,
                    }
                }
                return res.json({ product: descriptionProduct })
            }
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
