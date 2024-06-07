const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


const { connection } = require("../config.db");

const getProducts = (req, res) => {
  connection.query("SELECT * FROM tb_productos", (error, result) => {
    if (error)
      res.send("Error al obtener productos");
    res.status(200).json(result);
  });
};

app.route('/productos').get(getProducts);

module.exports = app;
