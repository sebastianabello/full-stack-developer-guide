//ARREGLOS (array)

//En un array siempre empieza el index desde 0

//Arreglo vacio
const a = [];
console.log(a);

//Arreglo con datos
const b = [1, true, "Hola", ["A", "B", "C"]];
console.log(b);

// propiedades
//length: Devuelve el número de elementos en el array.

console.log(a.length); //0
console.log(b.length); //4

//Para acceder a los elementos de un arreglo es de este modo:

console.log(b[0]); //Posicion 1 del array es decir (1)
console.log(b[2]);
console.log(b[3][2]); // De igual manera se recorre un array dentro de otro array
const c = [1, "holi", ["A", "B", "C", ["d", "e", "f"]]];
console.log(c[2][3][1]);

//Forma nueva de crear arreglos

const d = Array.of("x", "y", "d", 2, 3, 4);
console.log(d);

//Practicas que ya no usan para crear un arreglo
const f = new Array();
console.log(f);
const g = new Array(1, 2, 3, 4, true);
console.log(g);

//🔴Metodos

//.at(): Devuelve el valor de un elemento en una posición específica de la matriz. un ejemplo util es para no usar array.length - 1 para obtener el ultimo elemento del array ya que con .at() se puede obtener el ultimo elemento de un array colocando -1
const array1 = [5, 12, 8, 130, 44];

let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`); // An index of 2 returns 8
index = -2;
console.log(`An index of ${index} returns ${array1.at(index)}`); // An index of -2 returns 130

//.concat(): Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const array4 = array2.concat(array3);

console.log(array4); // ["a", "b", "c", "d", "e", "f"]
console.log(array1); // ["a", "b", "c"]

// .copyWithin(): Copia una secuencia de elementos de la matriz dentro de la misma matriz. El método copyWithin() es capaz de copiar parte de un array a otra parte del mismo array sin cambiar su longitud. modifica el array original
const array5 = ["a", "b", "c", "d", "e"];
console.log(array5.copyWithin(0, 3, 4)); // ["d", "b", "c", "d", "e"] //copia desde la posicion 3 hasta la 4 y lo pega en la posicion 0
console.log(array5);
console.log(array5.copyWithin(1, 3)); // ["d", "d", "e", "d", "e"] //copia desde la posicion 3 hasta el final y lo pega en la posicion 1

//.entries(): Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice en el array.
const array6 = ["a", "b", "c"];
const iterator = array6.entries();
console.log(iterator.next().value); // [0, "a"]
console.log(iterator.next().value); // [1, "b"]

//.every(): Comprueba si todos los elementos en un array pasan la prueba implementada por la función dada.
const isBelowThreshold = (el) => el < 40;
const array7 = [1, 30, 39, 29, 10, 13];
console.log(array7.every(isBelowThreshold)); // true

// .fill() cambia todos los elementos en un arreglo por un valor estático, puede recibir 3 parametros: valor, inicio, fin, dos parametros: valor, inicio o un parametro: valor
const e = Array(4).fill(false);
console.log(e); //[false, false, false, false]

const array8 = [1, 2, 3, 4];
console.log(array8.fill(0, 2, 4)); // [1, 2, 0, 0]
console.log(array8.fill(5, 1)); // [1, 5, 5, 5]
console.log(array8.fill(6)); // [6, 6, 6, 6]

//.filter(): Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result); // ["exuberant", "destruction", "present"]

//.find(): Devuelve el primer elemento de un array que cumpla con la condición dada por una función.
const array9 = [5, 12, 8, 130, 44];
const found = array9.find((element) => element > 10);
console.log(found); // 12

//.findLast(): Devuelve el último elemento de un array que cumpla con la condición dada por una función.
const array10 = [5, 12, 8, 130, 44];
const found2 = array10.findLast((element) => element > 10);
console.log(found2); // 44

//.findIndex():  Devuelve el índice del primer elemento de un array que cumpla con la condición dada por una función.
const array11 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array11.findIndex(isLargeNumber)); // 3

//.findLastIndex(): Devuelve el índice del último elemento de un array que cumpla con la condición dada por una función.
const array12 = [5, 12, 8, 130, 44, 190];
const isLargeNumber2 = (element) => element > 13;
console.log(array12.findLastIndex(isLargeNumber2)); // 5

//.flat(): Crea una nueva matriz con todos los elementos de sub-array concatenados en ella de forma recursiva hasta la profundidad especificada. es decir aplana arrays anidados, no modifica el array original
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // [0, 1, 2, 3, 4]
const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]]
const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2)); // [1, 2, 3, 4, 5, 6]

// .flatMap(): Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array. es decir es como hacer un map y luego un flat
const arr4 = [1, 2, 3, 4];
console.log(arr4.map((x) => [x * 2])); // [[2], [4], [6], [8]]
console.log(arr4.flatMap((x) => [x * 2])); // [2, 4, 6, 8]
// solo un nivel de profundidad es aplanado
console.log(arr4.flatMap((x) => [[x * 2]])); // [[2], [4], [6], [8]]

//.forEach(): Ejecuta la función indicada una vez por cada elemento del array.
//A la funcion se le pasan dos parametros primero el elemento que seria cada tipo de dato del array y el segundo es el index es decir la pocicion en la que se encuentra.
const colores = ["Rojo", "verde", "Azul"];
console.log(colores);
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});
//<li id="0">Rojo</li>
//<li id="1">verde</li>
//<li id="2">Azul</li>
const array13 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
/*
a
b
c
 */

//.from(): Crea una nueva instancia de Array a partir de un objeto iterable.
console.log(Array.from("foo")); // ["f", "o", "o"]

//.includes(): Determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
const array14 = [1, 2, 3];
console.log(array14.includes(2)); // true

//.indexOf(): Devuelve el primer índice en el que se encuentra un elemento en el array, o -1 si el elemento no está presente.
//recibe 2 parametros: elemento, desde donde empezar a buscar
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // 1
console.log(beasts.indexOf("bison", 2)); // 4

//.isArray(): Devuelve true si valor es un array, y false en caso contrario.
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false

//.join(): Une todos los elementos de una matriz (u objeto similar) en una cadena y devuelve esta cadena. si dentro de los paremtesis se especifica algo, con ese valor especificado se unira a una cadena por defecto si no colocamos nada este seran (,)
const array15 = ["Fire", "Air", "Water"];
console.log(array15.join()); // "Fire,Air,Water" (string)
console.log(array15.join("")); // "FireAirWater" (string)
console.log(array15.join("-")); // "Fire-Air-Water" (string)

//.keys(): Devuelve un nuevo objeto Array Iterator que contiene las claves de índice para cada elemento en el array.
const array16 = ["a", "b", "c"];
const iterator2 = array16.keys();
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

//.lastIndexOf(): Devuelve el último índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente. La búsqueda comienza desde el final del array.
//recibe 2 parametros: elemento, desde donde empezar a buscar
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo")); // 3
console.log(animals.lastIndexOf("Dodo", 2)); // 0

//.map(): Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. no modifica el array original

let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(doubles); // [2, 10, 20, 30]

// .pop(): Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
let fruts = ["Manzana", "Banana"];
fruts.pop();
console.log(frutas); // ["Manzana"]

//.push(): Añade uno o más elementos al final de un array, modifica el array original
let colors = ["Rojo", "verde", "Azul"];
colors.push("cafe", "naranja");
console.log(colors); // ["Rojo", "verde", "Azul", "cafe", "naranja"]

//.reduce(): Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor. recibe 4 parametros: acumulador, valorActual, indice, arreglo
const array17 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array17.reduce(reducer)); // 10

//.reduceRight(): Aplica una función a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un único valor. recibe 4 parametros: acumulador, valorActual, indice, arreglo
[0, 1, 2, 3, 4].reduceRight(function (valorPrevio, valorActual, indice, array) {
  return valorPrevio + valorActual;
});
/*
// First call
(valorPrevio = 4), (valorActual = 3), (indice = 3);
// Second call
(valorPrevio = 7), (valorActual = 2), (indice = 2);
// Third call
(valorPrevio = 9), (valorActual = 1), (indice = 1);
// Fourth call
(valorPrevio = 10), (valorActual = 0), (indice = 0);
*/

//.reverse(): Invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const array18 = ["one", "two", "three"];
console.log("array1:", array18); // Expected output: "array1:" Array ["one", "two", "three"]
const reversed = array18.reverse();
console.log("reversed:", reversed); // Expected output: "reversed:" Array ["three", "two", "one"]

//.shift(): Elimina el primer elemento del array y lo devuelve. Este método cambia la longitud del array.
let frutss = ["Manzana", "Banana"];
let frutaEliminada = frutss.shift();
console.log(frutss); // ["Banana"]
//.unshift(): Añadir un elemento al principio de un Array
let nuevaLongitud = frutss.unshift("Fresa"); // Añade "Fresa" al inicio
console.log(frutss); // ["Fresa", "Banana"]

//.slice(): Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
let frutass = ["Banana", "Naranja", "Limon", "Manzana", "Mango"];
let citricos = frutass.slice(1, 3);
console.log(citricos); // ["Naranja", "Limon"]

//.some(): Comprueba si al menos un elemento del array cumple con la condición dada. devuelve true o false
const array19 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array19.some(even)); // true

//.sort(): Ordena los elementos de un array localmente y devuelve el array ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

//.splice() ----> no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
//recibe 3 parametros: posicion, cantidad de elementos a eliminar, elementos a agregar
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria", "Pepino", "Tomate"];
console.log(vegetales); // ["Repollo", "Nabo", "Rábano", "Zanahoria", "Pepino", "Tomate"]

let poss = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(poss, numElementos); // ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales); // ["Repollo", "Zanahoria", "Pepino", "Tomate"] ==> Lo que actualmente tiene "vegetales"

//.toString(): Devuelve una cadena de caracteres representando el array especificado y sus elementos.
const array20 = [1, 2, "a", "1a"];
console.log(array20.toString()); // "1,2,a,1a"

//.values(): Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array.
const array21 = ["a", "b", "c"];
const iterator3 = array21.values();
console.log(iterator3.next()); // { value: "a", done: false }
console.log(iterator3.next()); // { value: "b", done: false }
console.log(iterator3.next()); // { value: "c", done: false }
console.log(iterator3.next()); // { value: undefined, done: true }
