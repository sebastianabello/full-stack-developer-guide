//Objeto math

console.log(Math);
console.dir(Math);

//PI
console.log(Math.PI);

//📌Metodo para Retorna el valor absoluto de un numero
//No toma encuenta si es positivo o negativo
//📢abs
console.log(Math.abs(-78));
console.log(Math.abs(78));

//📌Metodo para redondear, existen 3 formas

//📢ceil --> retorna el numero posterior entero
console.log(Math.ceil(7.8));

//📢floor--> retorna el numero inferior entero
console.log(Math.floor(7.8));

//📢round--> retorna el numero entero inferior o posterior segun en el decimal que numero sea.
// #.decimal>#.4 retorna el posterior
// #.decimal<=#.4 retorna el inferior

console.log(Math.round(7.5)); //8
console.log(Math.round(7.4)); //7

//📌Metodo para la raiz de un numero

//📢sqrt
console.log(Math.sqrt(81)); //9

//📌Metodo para la potencia^# de un numero

//📢pow --> (base, potencia)
console.log(Math.pow(2, 5)); //32

//📌Metodo para saber si un numero es positivo, negativo o 0

//📢sign
//negativo: -1
//Positivo: 1
//Cero: 0
console.log(Math.sign(-78)); //-1
console.log(Math.sign(78)); //1
console.log(Math.sign(0)); //0

//📌Metodo para generar un valor aleatorio entre 0 y 1 (decimales)

//📢random
console.log(Math.random());
//tambien se puede generar valore mas grandes
console.log(Math.random() * 100); //genera del 0 al 100 con decimales
//si queremos quitar la parte decimal
console.log(Math.round(Math.random() * 1000)); //genera numero aleatorio entre 0 y 1000 sin decimales
