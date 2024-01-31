//📌Maps
//📢es una estructura de datos que almacena pares clave-valor y permite asignar valores a claves y recuperar esos valores posteriormente. A diferencia de los objetos regulares de JavaScript, los Map pueden utilizar cualquier tipo de dato, incluidos objetos, como claves.

//Formas

//📌Pares clave-valor
//📢Los Map almacenan pares clave-valor, lo que significa que puedes asignar un valor a una clave y luego recuperar ese valor utilizando esa misma clave.
const miMap = new Map();

miMap.set("nombre", "Juan");
miMap.set("edad", 19);

console.log(miMap.get("nombre")); // 'Juan'
console.log(miMap.get("edad")); // 30

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
