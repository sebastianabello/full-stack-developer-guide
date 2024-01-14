//Expresiones regulares
//Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.

let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium cumque culpa excepturi harum temporibus dignissimos quae hic, commodi voluptates ducimuslorem recusandae deserunt maxime dolore fugit magnam pariatur similique quis.";

// El segundo parametro son las banderas
let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/gi;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
