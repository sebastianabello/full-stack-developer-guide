//Objeto math

console.log(Math);
console.dir(Math);

//PI
console.log(Math.PI);

//📌Metodo para Retorna el valor absoluto de un numero
//No toma encuenta si es positivo o negativo
//📢abs()
console.log(Math.abs(-78));
console.log(Math.abs(78));

//📌Metodo para redondear, existen 3 formas

//📢ceil() --> retorna el numero posterior entero
console.log(Math.ceil(7.8));

//📢floor()--> retorna el numero inferior entero
console.log(Math.floor(7.8));

//📢round()--> retorna el numero entero inferior o posterior segun en el decimal.
// #.decimal>#.4 retorna el posterior
// #.decimal<=#.4 retorna el inferior

console.log(Math.round(7.5)); //8
console.log(Math.round(7.4)); //7

//📌Metodo para la raiz de un numero

//📢sqrt()
console.log(Math.sqrt(81)); //9

//📌Metodo para la potencia^# de un numero

//📢pow() --> (base, potencia)
console.log(Math.pow(2, 5)); //32

//📌Metodo para saber si un numero es positivo, negativo o 0

//📢sign()
//negativo: -1
//Positivo: 1
//Cero: 0
console.log(Math.sign(-78)); //-1
console.log(Math.sign(78)); //1
console.log(Math.sign(0)); //0

//📌Metodo para generar un valor aleatorio entre 0 y 1, (decimales), el 1 no se incluye

//📢random
console.log(Math.random());
//tambien se puede generar valore mas grandes
console.log(Math.random() * 100); //genera del 0 al 100 con decimales
//si queremos quitar la parte decimal
console.log(Math.round(Math.random() * 1000)); //genera numero aleatorio entre 0 y 1000 sin decimales

//📢 max() -----> La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada, o NaN si cualquier parámetro no es un número y no puede ser convertido en uno.
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];
//Para los arreglos se usa el operador de propagación (spread operator) para expandir el arreglo como una lista de argumentos
console.log(Math.max(...array1));
// Expected output: 3

//📢 min() -----> La función Math.min() retorna el menor de cero o más números dados como parámetros de entrada, o NaN si cualquier parámetro no es un número y no puede ser convertido en uno.
let x = 10,
  y = -20;
let z = Math.min(x, y);
console.log(z); // -20

//📢 trunc() -----> La función Math.trunc() retorna la parte entera del número x, removiendo cualquier dígito fraccionario.

Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(Infinity); // Infinity
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
