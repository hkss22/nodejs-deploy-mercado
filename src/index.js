import express from "express";
import cors from "cors";
import controllerUsuarios from "./controllers/controller.usuarios.js";
import controllerMercados from "./controllers/controller.mercado.js";
import controllerProdutos from "./controllers/controller.produtos.js";
import controllerPedidos from "./controllers/controller.pedidos.js";
import BasicAuth from "./config/basic-auth.js";

const app = express();

// Middleware JSON
app.use(express.json());

// Middleware CORS
app.use(cors());

// Basic Auth
app.use(BasicAuth);

// Controllers
app.use(controllerUsuarios);
app.use(controllerMercados);
app.use(controllerProdutos);
app.use(controllerPedidos);


app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor no ar.');
});