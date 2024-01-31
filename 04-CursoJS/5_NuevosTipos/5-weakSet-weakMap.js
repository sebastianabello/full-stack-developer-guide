//📌Estas diferencias hacen que WeakSet y WeakMap sean útiles en ciertos casos en los que no quieres que los elementos que contienen impidan la eliminación de objetos de la memoria (garbage collection).

//📌WeakSet
//📢Elementos débiles: En un WeakSet, solo se pueden agregar objetos (y no valores primitivos) como elementos. Los elementos en un WeakSet se almacenan como referencias débiles, lo que significa que no impiden que los objetos sean eliminados por el recolector de basura si no tienen otras referencias en el programa.
//📢No es iterable: A diferencia de Set, WeakSet no es iterable, por lo que no puedes recorrer sus elementos.
//📢Métodos básicos: WeakSet proporciona métodos básicos como add(), delete(), y has() para agregar, eliminar y verificar la existencia de elementos.

const weakSet = new WeakSet();
const objeto1 = { nombre: "Juan" };
const objeto2 = { nombre: "Ana" };

weakSet.add(objeto1);
weakSet.add(objeto2);

console.log(weakSet.has(objeto1)); // true
weakSet.delete(objeto1);
console.log(weakSet.has(objeto1)); // false

//📌WeakMap
//📢Pares clave-valor con claves débiles: En un WeakMap, las claves son almacenadas como referencias débiles, lo que significa que si no hay otras referencias al objeto clave, este puede ser recolectado por el recolector de basura.
//📢No es iterable: Al igual que con WeakSet, WeakMap no es iterable, por lo que no puedes recorrer sus elementos.
//📢Métodos básicos: WeakMap proporciona métodos similares a los de Map, como set(), get(), delete(), y has().

const weakMap1 = new WeakMap();
const objeto3 = {};
const objeto4 = {};

weakMap1.set(objeto3, "Información relacionada con objeto1");
weakMap1.set(objeto4, "Información relacionada con objeto2");

console.log(weakMap1.get(objeto3)); // 'Información relacionada con objeto1'
weakMap1.delete(objeto3);
console.log(weakMap1.has(objeto3)); // false
