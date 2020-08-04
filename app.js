const express = require("express");
const chalk = require("chalk");

const app = express();

// Define la carpeta public como el origen de recursos estáticos
app.use(express.static("public"));
//app.use(express.)

// Si hay un get al origen, se regresa la página home.html
app.get("/", (req, res) => {
    //res.send("<h1>Titulo del Home</h1>");
    res.sendfile(`${__dirname}/views/home.html`)
})

// Si hay un get a login, se regrea login..
app.get("/login", (req, res) => {
    res.sendfile(`${__dirname}/views/login.html`);
})

// Si hay un get a cualquier url, se regresa un mensaje
app.use("*", (req, res) => {
    res.send("<h2>Not found!!</h2>");
})

// Arranca el server en el puerto 3000
app.listen(3000, () => {
    console.log(chalk.green("Server running..."));
});