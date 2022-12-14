const express = require("express");
const cors = require("cors");
const { routerProductos } = require("./route/routerProductos");
const { routerCarrito } = require("./route/routerCarrito");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const listener = app.listen(process.env.PORT || 8080, function () {
    console.log(`Your app is listening to port: ${listener.address().port}`);
});
listener.on("error", (error) => console.log(`error en el servidor: ${error}`));

var userLogged = false;

//root de la app
app.get("/", (req, res) => {
    res.status(200).json({ msg: "proyecto final zoppini" });
});
// app.get("*", (req, res) => {
//     res.status(404).json({ error: "ruta inexistente" });
// });
app.post("/login", (req, res) => {
    module.exports.logged = true;
    res.status(200).json({ msg: "user logged in" });
});

//router para los productos
app.use("/productos", routerProductos);
//router para el carrito
app.use("/carrito", routerCarrito);

module.exports.logged = userLogged;
