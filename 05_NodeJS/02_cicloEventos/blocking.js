const fe = require("fs");

console.log("Inicio del promaga");
const data = fe.readFileSync("texto.txt","utf-8");
console.log(data);
console.log("Fin del programa");