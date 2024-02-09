//Number

let a = 2;
let b = new Number(4); //ya no se usa asi, pero es una forma
console.log(a, b);

// Propiedades

// Number.MAX_VALUE; Mayor valor que puede tener un numero, tiene un valor de 1.79e+308
let numero1 = 1.79e307;
let numero2 = 1.79e310;

function verificarValorMaximo(num) {
  if (num <= Number.MAX_VALUE) {
    console.log("El número no es infinito");
  } else {
    console.log("El número es infinito");
  }
}

verificarValorMaximo(numero1); // El número no es infinito
verificarValorMaximo(numero2); // El número es infinito

// Number.MIN_VALUE; //Menor valor que puede tener un numero, tiene un valor de 5e-32

// Number.NaN; //Valor que representa un error de calculo, es un valor especial que no es igual a nada

function clean(x) {
  if (x === Number.NaN) {
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}
console.log(clean(Number.NaN)); //0

//🟡 Metodos
let numero = 5;

// .isFinite(): Determina si el valor pasado es un numero finito
console.log(Number.isFinite(numero)); //true

// .isInteger(): Determina si el valor pasado es un numero entero
console.log(Number.isInteger(numero)); //true

// .isNaN(): Determina si el valor pasado es un NaN
console.log(Number.isNaN(numero)); //false

// .isSafeInteger(): Determina si el valor pasado es un numero seguro, con numero seguro quiere decir que el numero no es infinito
console.log(Number.isSafeInteger(numero)); //true

// .parseFloat(): Convierte un string a un numero decimal
let num1 = "3.14";
console.log(Number.parseFloat(num1)); //3.14 (number)

// .parseInt(): Convierte un string a un numero entero
let num2 = "3.14";
console.log(Number.parseInt(num2)); //3 (number)

// .toExponential(): Retorna una cadena de caracteres que representa el objeto Number en notación exponencial
let num3 = 123456;
console.log(num3.toExponential()); //1.23456e+5 (string)
// si se le pasa un , este sera la cantidad de decimales que se mostraran
console.log(num3.toExponential(2)); //1.23e+5 (string)

// .toFixed(): Retorna una cadena de caracteres que representa el objeto Number en notación de punto fijo
let num4 = 123.456;
console.log(num4.toFixed()); //123 (string)
// si se le pasa un numero , este sera la cantidad de decimales que se mostraran
console.log(num4.toFixed(2)); //123.46 (string)

// .toPrecision(): Retorna una cadena de caracteres que representa el objeto Number con una precisión especifica
let num5 = 123.456;
console.log(num5.toPrecision()); //123.456 (string)

// .toString(): Devuelve una cadena que representa al objeto Number especificado
let num6 = 123.456;
console.log(num6.toString()); //123.456 (string)
