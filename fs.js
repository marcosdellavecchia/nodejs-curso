//Importa modulo File System de Node
const fs = require("fs");

//Crear un archivo (de manera asincrona)
fs.writeFile("./texto.txt", "Contenido del archivo de texto", function (err) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Archivo creado");
  }
});

//Metodo para leer el archivo creado
fs.readFile("./texto.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
