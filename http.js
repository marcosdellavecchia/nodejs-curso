//Importa modulo Http para poder crear un servidor
const http = require("http");

//Importa modulo Colors
const colors = require("colors");

const handleServer = function (req, res) {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write("Hola mundo desde Node.js");
  res.end();
};

//Crea un servidor utilizando el puerto 3000
const server = http.createServer(handleServer);

server.listen(3000, function () {
  console.log("Server on port 3000".green);
});
