//📌"Iterables" y "Iterators" son fundamentales en JavaScript y en muchos otros lenguajes de programación. Estos conceptos se utilizan para recorrer y acceder a elementos en una secuencia de datos, como un array, una cadena de texto, un objeto Map o Set, o cualquier otra estructura que contenga múltiples elementos.

//📌Iterable:
//📢Un "iterable" es un objeto que tiene un método especial llamado Symbol.iterator. Este método define cómo se recorrerán los elementos del objeto.
//📢Un objeto iterable puede ser recorrido (iterado) mediante bucles como for...of, for...in (en el caso de objetos), o mediante el uso de iteradores personalizados.
//📢Ejemplos comunes de iterables en JavaScript incluyen arrays, cadenas de texto, objetos Map, objetos Set, etc.

const miArray = [1, 2, 3];

//📌Iterator:

//📢Un "iterator" es un objeto que se encarga de realizar el seguimiento del estado actual de una iteración en un iterable.
//📢Un iterator tiene un método llamado next(), que se llama para obtener el siguiente elemento en la secuencia. Cada llamada a next() devuelve un objeto con dos propiedades: value (el valor actual) y done (un valor booleano que indica si la iteración ha terminado).
//📢Ejemplo de un iterator (iterador de un array):

const iterador = miArray[Symbol.iterator]();
const primerElemento = iterador.next(); // { value: 1, done: false }
const segundoElemento = iterador.next(); // { value: 2, done: false }
const tercerElemento = iterador.next(); // { value: 3, done: false }
const cuartoElemento = iterador.next(); // { value: undefined, done: true }

//para recorrer todos:

let next = miArray.next();
while (!next.done()) {
  console.log(next.value);
  next = iterador.next();
}
