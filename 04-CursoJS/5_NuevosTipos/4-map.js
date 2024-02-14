//📌Map
//📢es una estructura de datos que almacena pares clave-valor y permite asignar valores a claves y recuperar esos valores posteriormente. A diferencia de los objetos regulares de JavaScript, los Map pueden utilizar cualquier tipo de dato, incluidos objetos, como claves.

//Formas

//📌Pares clave-valor
//📢Los Map almacenan pares clave-valor, lo que significa que puedes asignar un valor a una clave y luego recuperar ese valor utilizando esa misma clave.
const miMap = new Map();

miMap.set("nombre", "Juan");
miMap.set("edad", 19);

console.log(miMap.get("nombre")); // 'Juan'
console.log(miMap.get("edad")); // 19

//📌Claves únicas
//📢Cada clave en un Map es única, lo que significa que no puede haber claves duplicadas. Si intentas asignar un valor a una clave que ya existe, simplemente se actualizará el valor asociado con esa clave.
const miMap1 = new Map();

miMap1.set("nombre", "Juan");
miMap1.set("nombre", "Ana"); // Actualiza el valor de la clave 'nombre'

console.log(miMap1.get("nombre")); // 'Ana'

//📌Iteración sencilla:
//📢Los Map son iterables y permiten recorrer fácilmente sus elementos mediante bucles for...of, lo que facilita la iteración a través de los pares clave-valor.

const miMap2 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);

for (const [clave, valor] of miMap2) {
  console.log(`${clave}: ${valor}`);
}
// Resultado:
// nombre: Juan
// edad: 30

//📌Tamaño dinámico
//📢 A diferencia de los objetos regulares, no es necesario definir un tamaño fijo para un Map. Puedes agregar y eliminar pares clave-valor según sea necesario.

const miMap3 = new Map();

miMap3.set("nombre", "Juan");
console.log(miMap3.size); // 1

miMap3.delete("nombre");
console.log(miMap3.size); // 0

//📌Propiedades
// .size: Devuelve el número de elementos que contiene el Map.
let myMap = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
console.log(myMap.size); // 2

//📢Métodos
// .clear(): Elimina todos los elementos del Map.
let myMap1 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
myMap1.clear();
console.log(myMap1); // Map {}

// .delete(): Elimina un elemento del Map.
let myMap2 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
myMap2.delete("nombre");
console.log(myMap2); // Map { "edad" => 30 }

// .entries(): Devuelve un nuevo objeto iterador que contiene los pares clave/valor para cada elemento del Map, en el mismo orden que los elementos del Map.
let myMap3 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
let iterador = myMap3.entries();
console.log(iterador.next().value); // ["nombre", "Juan"]
console.log(iterador.next().value); // ["edad", 30]

// .forEach(): Ejecuta una función por cada elemento del Map.
let myMap4 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
myMap4.forEach((valor, clave, mapOriginal) => {
  console.log(valor, clave, mapOriginal);
});

// .get(): Devuelve el valor asociado con la clave especificada en el Map. Si la clave no existe, devuelve undefined.
let myMap5 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
console.log(myMap5.get("nombre")); // "Juan"
console.log(myMap5.get("apellido")); // undefined

// .groupBy(): Agrupa los elementos del Map en subconjuntos basados en una función de agrupación.


// .has(): Devuelve un booleano que indica si un elemento con la clave especificada existe en el Map o no.
let myMap6 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
console.log(myMap6.has("nombre")); // true

// .keys(): Devuelve un nuevo objeto iterador que contiene las claves para cada elemento del Map, en el mismo orden que los elementos del Map.
let myMap7 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);
let iterador1 = myMap7.keys();
console.log(iterador1.next().value); // "nombre"
console.log(iterador1.next().value); // "edad"

// .set(): Asigna un valor a una clave en el Map. Si la clave ya existe, actualiza su valor.
let myMap8 = new Map();
myMap8.set("nombre", "Juan");
console.log(myMap8.get("nombre")); // "Juan"

