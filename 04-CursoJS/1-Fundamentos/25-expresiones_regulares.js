//Expresiones regulares
//Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.

let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium cumque culpa excepturi harum temporibus dignissimos quae hic, commodi voluptates ducimuslorem recusandae deserunt maxime dolore fugit magnam pariatur similique quis.";

//El primer parametro es el patron es decir lo que se va a buscar
// El segundo parametro son las banderas es decir si va a ser sensible a mayusculas y minusculas o no
/*
las banderas son: 
i = insensible a mayusculas y minusculas
g = buscar globalmente
*/
let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/gi;

//test() --> Devuelve true o false si encuentra o no la cadena
//exec() --> Devuelve la cadena encontrada o null
console.log(expReg.test(cadena)); //true
console.log(expReg.exec(cadena)); //["Lorem", index: 0, input: "Lorem ipsum dolor sit amet consectetur adipisicing ...", groups: undefined]

console.log(expReg2.test(cadena)); //true
console.log(expReg2.exec(cadena)); //["Lorem", index: 0, input: "Lorem ipsum dolor sit amet consectetur adipisicing ...", groups: undefined]

//Tener encuenta que .test deja el puntero en la ultima coincidencia encontrada, por lo tanto si se ejecurta dos veces seguidas, la segunda vez devolvera false, ya que el puntero esta al final de la cadena, para solucionar esto se puede usar .lastIndex = 0 o usar match() que no tiene este problema
