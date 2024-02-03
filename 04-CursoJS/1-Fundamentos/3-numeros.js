//Tipos de datos

let a = 2;
let b = new Number(4); //ya no se usa asi, pero es una forma
console.log(a, b);

//Metodo toFixed
//Rendonde segun el valor de desimales que tengamos, si el decimal es mayor o igual a #.15 se redonde al decimal siguiente en el ejemplo quedaria 7.2,, si es menor el decimal se rendonde a 7.1, depende tambien del cuantos parametros le pasemos
let c = 7.15;
console.log(c.toFixed(3)); //3 decimales despues del punto; 7.150
console.log(c.toFixed(5)); //5 decimales despues del punto; 7.15000
console.log(c.toFixed(1)); //1 decimales despues del punto; 7.2

//Procesamiento en formularios
//Metodo para formaterar una cadena de texto a Numeros
let d = "24.26"; //String
console.log(d); //Imprime un string que a simple vista es un numero
console.log(typeof c, typeof d); //muestra que tipo de dato es

console.log(parseFloat(d));
console.log(a + b); // 6
console.log(a + d); //aqui nos damos cuenta que se opera es con un string es decir se concatenan mas no se suman, tener presente los tipos de datos. 224.26
console.log(c + parseInt(d)); //Enteros 31
console.log(c + parseFloat(d)); //Flotantes 31.41
