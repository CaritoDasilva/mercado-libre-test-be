const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json(), express.urlencoded({ extended: true }));

const productRoutes = require("./server/routes/products.routes");
productRoutes(app);

app.listen(port, () => console.log(`Hi pretty girl! Im listening you in the port: ${port}`))
