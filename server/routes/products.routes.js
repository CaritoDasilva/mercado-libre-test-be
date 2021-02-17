const ProductController = require("../controllers/products.controllers");

module.exports = app => {
    app.get("/api/products/:query", ProductController.getProducts);
    app.get("/api/products/description/:id", ProductController.getProductDescription);
}
