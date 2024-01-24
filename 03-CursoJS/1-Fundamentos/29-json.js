//Que es JSON?
//sus siglas significan JavaScript Object Notation
//JSON es un formato de texto sencillo para el intercambio de datos. JSON es texto y se puede convertir en cualquier objeto de JavaScript.
//JSON existe como una cadena, y se puede convertir en un objeto JavaScript real utilizando la función JSON.parse().
//Ejemplo:
const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
};
//Convertir el objeto persona en una cadena JSON:
const personaJSON = JSON.stringify(persona);
console.log(personaJSON); // {"nombre":"Ana","edad":30,"ciudad":"Madrid"}
//Convertir la cadena JSON en un objeto JavaScript:
const personaObjeto = JSON.parse(personaJSON);
console.log(personaObjeto); // {nombre: "Ana", edad: 30, ciudad: "Madrid"}
//Ejemplo:
const persona1 = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};
//Convertir el objeto persona en una cadena JSON:
//las funciones no se pueden convertir en JSON por lo que no se incluyen en la cadena
const persona1JSON = JSON.stringify(persona1);
console.log(persona1JSON); // {"nombre":"Ana","edad":30,"ciudad":"Madrid"}
//Convertir la cadena JSON en un objeto JavaScript:
const persona1Objeto = JSON.parse(persona1JSON);
console.log(persona1Objeto); // {nombre: "Ana", edad: 30, ciudad: "Madrid"}
