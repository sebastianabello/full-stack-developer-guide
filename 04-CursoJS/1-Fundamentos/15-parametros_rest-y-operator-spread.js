//📌Parametros rest
//Nos permiten representar un número indefinido de argumentos como un array.
//Los parametros rest tienen que ir siempre al final de los parametros de una funcion.
//Se representan con ...nombreDelParametro

//🔴Ejemplo 1:
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2)); //  3
console.log(sumar(1, 2, 3)); //  6
console.log(sumar(1, 2, 3, 4)); //  10

//🔴Ejemplo 2:
function sumar(...numeros) {
  let resultado = 0;
  for (let numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

console.log(sumar(1, 2, 3, 4, 5)); // 15

//🔴Ejemplo 3: tambien sirve para desestructurar un array

const [primerElemento, ...restoElementos] = [1, 2, 3, 4, 5];

console.log(primerElemento); // 1
console.log(restoElementos); // [2, 3, 4, 5]

//📌Operador Spread

//Su sintaxis es ...
//Su funcion es expandir de cierta forma, los elementos de un array u objeto.

//🔴Spread para arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Concatenar arrays
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

// Clonar array pero solo del primer nivel, si el array tiene objetos anidados, estos no se clonaran y se modificarán en ambos arrays
const clonedArray = [...array1];
console.log(clonedArray); // [1, 2, 3]

//🔴Spread para objetos:
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

// Crear una copia superficial del objeto
const copiaObjeto = { ...objeto1 };
console.log(copiaObjeto); // { a: 1, b: 2 }

// Combinar objetos
const combinacionObjetos = { ...objeto1, ...objeto2 };
console.log(combinacionObjetos); // { a: 1, b: 2, c: 3, d: 4 }
