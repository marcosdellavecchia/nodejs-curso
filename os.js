//Importa modulo OS de Node
const os = require("os");

//En que plataforma estoy ejecutando node
console.log("Mi sistema operativo es", os.platform());

//En que release estoy de mi SO
console.log("El release de mi SO es", os.release());

//Memoria disponible en bytes
console.log("La memoria disponible es ", os.freemem(), "bytes.");

//Memoria total en bytes
console.log("La memoria total es", os.totalmem(), "bytes.");
