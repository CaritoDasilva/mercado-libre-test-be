# Cencosud API Test

# Links

| Plataforma | Links |
| ------ | ------ |
| GitHub | https://github.com/CaritoDasilva/mercado-libre-test-be |
| Heroku Deploy | https://mercado-libre-be.herokuapp.com/ |
| Portafolio | https://www.caritodasilva.work/ |


# API Documentation:
  - /api/products/:query => Trae productos según la coincidencia del buscador, tomando como parámetro el query de tipo string.

 - /api/products/description/:id => Trae un producto en específico, tomando como parámetro el id del producto,  de tipo string.

## Implementación

> Se construyó una api que permite traer todos los productos disponibles según un string entregado por el usuario, filtrando sólo 4 resultados, haciendo un request a la api de Mercado Libre.
> También se hace un request a dos api de Mercado Libre que muestran los detalles de un producto en particular. 
> Se implementó la solución consultando el endpoint que traía la información, agregando una lógica aidcional para entregar el objeto solicitado en cada uno de los caso, que muestra solo algunos datos de los entregados por la Api para evitar que el front hiciera iteraciones innecesarias o nuevas llamadas al backend.
> Por último mencionar que se realizó el front end con React/NextJS, desde donde se consume este servicio.
>Se utilizo una arquitectura MVC para la estructura del proyecto.


### Instalación

Instalación de dependencias
```sh
$ npm install
```

Para correr el proyecto

```sh
$ node server.js || npm run start
```
