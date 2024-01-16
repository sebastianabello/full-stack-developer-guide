//Set

//📢Es una estructura de datos que representa una colección de valores únicos, lo que significa que no puede contener elementos duplicados.
//📢pueden ser de cualquier tipo de datos primitivo o incluso objetos. Los Set son útiles cuando necesitas almacenar una lista de elementos sin duplicados y no te importa el orden en el que se almacenan

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

//📌valores unicos
//📢Métodos útiles: Los Set proporcionan métodos para agregar elementos (add), eliminar elementos (delete), verificar si un elemento existe (has), y obtener el tamaño del Set (size).

const miSet3 = new Set();

miSet3.add("manzana");
miSet3.add("plátano");
miSet3.add("manzana");

console.log(miSet3.size); // 2 (elementos únicos)
console.log(miSet3.has("manzana")); // true
miSet3.delete("plátano");
miSet3.clear();
console.log(miSet3);

//tener en cuenta que los set no son arreglos aunque si son iterables.
//📌Convertir un Set en un Array
//📢Puedes convertir un Set en un Array utilizando el operador de propagación (spread operator) o el método Array.from de esta forma:
const miSet4 = new Set([1, 2, 3]);
const miArray = [...miSet4];
console.log(miArray); // [1, 2, 3]
//o asi:
const miSet5 = new Set([1, 2, 3]);
const miArray2 = Array.from(miSet5);
