const fs = require("fs");
console.log("Inicio del programa");

fs.readFile("texto.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

console.log("Fin del programa");