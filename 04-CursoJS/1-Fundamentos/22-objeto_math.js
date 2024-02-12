//Objeto math

console.log(Math);
console.dir(Math);

//🟡 Propiedades

//Math.E : Constante de Euler
console.log(Math.E); //2.718281828459045

//Math.LN10 : Logaritmo natural de 10
console.log(Math.LN10); //2.302585092994046

//Math.LN2 : Logaritmo natural de 2
console.log(Math.LN2); //0.6931471805599453

//Math.LOG10E : Logaritmo base 10 de E
console.log(Math.LOG10E); //0.4342944819032518

//Math.LOG2E : Logaritmo base 2 de E
console.log(Math.LOG2E); //1.4426950408889634

//Math.PI : Valor de PI
console.log(Math.PI); //3.141592653589793

//Math.SQRT1_2 : Raiz cuadrada de 1/2
console.log(Math.SQRT1_2); //0.7071067811865476

//Math.SQRT2 : Raiz cuadrada de 2
console.log(Math.SQRT2); //1.4142135623730951

//🟡 Metodos

// .abs() : Retorna el valor absoluto de un numero es decir el valor sin signo
console.log(Math.abs(-78)); //78
console.log(Math.abs(78)); //78

// .cbrt() : Retorna la raiz cubica de un numero
console.log(Math.cbrt(27)); //3

// .ceil() : Redondea un numero hacia arriba al entero mas cercano
console.log(Math.ceil(7.8)); //8

// .clz32() : Retorna el numero de ceros iniciales en la representacion binaria de un numero
console.log(Math.clz32(1)); //31
console.log(Math.clz32(1000)); //22

// .floor() : Redondea un numero hacia abajo al entero mas cercano
console.log(Math.floor(7.8)); //7

// .fround() : Retorna la representacion flotante de precision simple mas cercana de un numero
console.log(Math.fround(7.8)); //7.800000190734863

// .hypot() : Retorna la raiz cuadrada de la suma de los cuadrados de sus argumentos
console.log(Math.hypot(3, 4)); //5

// .max() : Retorna el mayor de cero o mas numeros
console.log(Math.max(1, 3, 2)); //3
const array2 = [1, 3, 2];
console.log(Math.max(...array2)); //3

// .min() : Retorna el menor de cero o mas numeros
console.log(Math.min(1, 3, 2)); //1
const array3 = [1, 3, 2];
console.log(Math.min(...array3)); //1

// .pow() : Retorna la base elevada al exponente, recibe 2 argumentos (base, exponente)
console.log(Math.pow(2, 5)); //32

// .random() : Retorna un numero pseudo-aleatorio entre 0 y 1, el 1 no se incluye
console.log(Math.random()); //0.123456789012345
console.log(Math.round(Math.random() * 1000)); //genera numero aleatorio entre 0 y 1000 sin decimales, el 1000 no se incluye

// .round() : Redondea un numero al entero mas cercano, si el decimal es mayor o igual a 0.5 redondea hacia arriba, si es menor redondea hacia abajo
console.log(Math.round(7.5)); //8
console.log(Math.round(7.4)); //7

// .sign() : Retorna el signo de un numero, positivo, negativo o 0, si es negativo retorna -1, si es positivo retorna 1, si es 0 retorna 0
console.log(Math.sign(-78)); //-1
console.log(Math.sign(78)); //1
console.log(Math.sign(0)); //0

// .sqrt() : Retorna la raiz cuadrada de un numero
console.log(Math.sqrt(81)); //9

// .trunc() : Retorna la parte entera de un numero eliminando los decimales
console.log(Math.trunc(13.37)); //13
