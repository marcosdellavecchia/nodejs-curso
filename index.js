//Importa modulo Express
const express = require("express");

//Importa modulo Colors
const colors = require("colors");

//Crea servidor
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hola Mundo con Express y Node</h1>");
  res.end();
});

//Escucha en el puerto 3000 e imprime un mensaje en rojo
server.listen(3000, () => {
  console.log("Server on port 3000".red);
});
