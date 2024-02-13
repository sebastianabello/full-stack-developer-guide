//Set

//📢Es una estructura de datos que representa una colección de valores únicos, lo que significa que no puede contener elementos duplicados.
//📢pueden ser de cualquier tipo de datos primitivo o incluso objetos. Los Set son útiles cuando necesitas almacenar una lista de elementos sin duplicados y no te importa el orden en el que se almacenan
//tener en cuenta que los set no son arreglos aunque si son iterables.
//📌valores unicos
//📢no permite elementos duplicados. Si intentas agregar el mismo valor más de una vez, solo se almacenará una copia.
const miSet = new Set();

miSet.add(1);
miSet.add(2);
miSet.add(1); // Esto no agregará un segundo 1

console.log(miSet); // Set { 1, 2 }

///📌Iterable
//📢Puedes recorrer los elementos de un Set utilizando un bucle for...of, lo que facilita la iteración a través de sus elementos.

const miSet1 = new Set([1, 2, 3]);

for (const valor of miSet1) {
  console.log(valor);
}
// Resultado:
// 1
// 2
// 3

//📌Propiedades

// .size: Devuelve el número de elementos que contiene el Set.
let mySet11 = new Set([1, 2, 3]);
console.log(mySet11.size); // 3


//📢Métodos

// .add(): Agrega un nuevo elemento al Set. Devuelve el Set.
let mySet3 = new Set();
mySet3.add(1);
mySet3.add(5).add(7).add(9); 
console.log(mySet3); // Set { 1, 5, 7, 9 }

// .clear(): Elimina todos los elementos del Set.
let mySet4 = new Set([1, 2, 3]);
mySet4.clear();
console.log(mySet4); // Set {}

// .delete(): Elimina un elemento del Set. 
let mySet5 = new Set([1, 2, 3]);
mySet5.delete(2);
console.log(mySet5); // Set { 1, 3 }

// .entries(): Devuelve un nuevo objeto iterador que contiene los pares clave/valor para cada elemento del Set, en el mismo orden que los elementos del Set, la clave y el valor son iguales en un Set.
let mySet6 = new Set([1, 2, 3]);
let iterador = mySet6.entries();
console.log(iterador.next().value); // [1, 1]
console.log(iterador.next().value); // [2, 2]
console.log(iterador.next().value); // [3, 3]

// .forEach(): Ejecuta una función por cada elemento del Set.
let mySet7 = new Set([1, 2, 3]);
mySet7.forEach((valor, clave, setOriginal) => {
  console.log(valor, clave, setOriginal);
});

// .has(): Devuelve un booleano que indica si un elemento con la clave especificada existe en el Set o no.
let mySet8 = new Set([1, 2, 3]);
console.log(mySet8.has(2)); // true
console.log(mySet8.has(4)); // false

// .keys(): Devuelve un nuevo objeto iterador que contiene las claves para cada elemento del Set, en el mismo orden que los elementos del Set.
let mySet9 = new Set([1, 2, 3]);
let iterador2 = mySet9.keys();
console.log(iterador2.next().value); // 1
console.log(iterador2.next().value); // 2
console.log(iterador2.next().value); // 3

// .values(): Devuelve un nuevo objeto iterador que contiene los valores para cada elemento del Set, en el mismo orden que los elementos del Set.
let mySet10 = new Set([1, 2, 3]);
let iterador3 = mySet10.values();
console.log(iterador3.next().value); // 1
console.log(iterador3.next().value); // 2
console.log(iterador3.next().value); // 3












const miSet3 = new Set();

miSet3.add("manzana");
miSet3.add("plátano");
miSet3.add("manzana");

console.log(miSet3.size); // 2 (elementos únicos)
console.log(miSet3.has("manzana")); // true
miSet3.delete("plátano");
// miSet3.clear(); // Elimina todos los elementos
console.log(miSet3);


//📌Convertir un Set en un Array
//📢Puedes convertir un Set en un Array utilizando el operador de propagación (spread operator) o el método Array.from de esta forma:
const miSet4 = new Set([1, 2, 3]);
const miArray = [...miSet4];
console.log(miArray); // [1, 2, 3]
//o asi:
const miSet5 = new Set([1, 2, 3]);
const miArray2 = Array.from(miSet5);
