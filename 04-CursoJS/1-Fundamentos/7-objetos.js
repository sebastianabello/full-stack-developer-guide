//Objetos

const c = {}; //objeto vacio
console.log(c); //{}
const juan = {
  nombre: "sebas",
  apellido: "Abello",
  edad: 19,
  pasatiempo: ["Correr", "Estudiar", "Leer", "Programar"],
  soltero: false,
  contacto: {
    email: "Juanse.abello@gmail.com",
    instagram: "Juanse.abe123",
    celular: "3192323",
  },
  saludar: function () {
    console.log(`Hola`);
  },
  decirMiNombre: function () {
    //la palabra this hace referenfcia al contexto de bloque en el que se le aplique mas adelante se explicara de mejor forma
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  },
};
console.log(juan);

//📢 Dentro de un objeto a las variables se le van a llamar atributos/propiedad y a a las funciones metodos.

//Para acceder a atributo/propiedad:
//forma rara pero mas adelante se explicara
console.log(juan["nombre"]); //sebas

//✔forma mas comun
console.log(juan.apellido); //Abello
console.log(juan.pasatiempo[1]); //Estudiar
console.log(juan.contacto.email); // Juanse.abello@gmail.com

//Para acceder a los metodos dentro de un objeto:
juan.saludar(); //Hola
juan.decirMiNombre(); //Hola mi nombre es sebas Abello y tengo 19 años

//🟡 Metodos

//.assign() pega todas las propiedaddes de un objeto a otro, recibe dos parametros el primero es el objeto al que se le van a pegar las propiedades y el segundo es el objeto del que se van a copiar las propiedades, modifica el objeto original
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true

//.create() crea un nuevo objeto con el prototipo y las propiedades que se le pasen como parametro, no modifica el objeto original
const person = {
  humano: false,
  printIntroduction: function () {
    console.log(`Mi nombre es ${this.name}. soy humano? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Juan";
me.isHuman = true;
me.printIntroduction(); //Mi nombre es Juan. soy humano? true

//.entries() retorna un array con los pares clave-valor de un objeto
console.log(Object.entries(juan)); // [ [ 'nombre', 'sebas' ], [ 'apellido', 'Abello' ], [ 'edad', 19 ], [ 'pasatiempo', [ 'Correr', 'Estudiar', 'Leer', 'Programar' ] ], [ 'soltero', false ]

//.freeze() congela un objeto, es decir no se le pueden agregar, eliminar o modificar propiedades, no modifica el objeto original
const obj = {
  prop: 2,
};
Object.freeze(obj);
obj.prop = 33; // no se le puede cambiar el valor
console.log(obj); // { prop: 2 }

//.fromEntries() crea un objeto a partir de un array de pares clave-valor
const arr = [
  ["name", "Juan"],
  ["age", 19],
];
console.log(Object.fromEntries(arr)); // { name: 'Juan', age: 19 }

//.getOwnPropertyDescriptor() retorna un objeto que contiene la configuracion de una propiedad de un objeto
//configuracion: value, writable, enumerable, configurable
//value: valor de la propiedad
//writable: si se puede modificar o no
//enumerable: si se puede iterar o no
//configurable: si se puede eliminar o no
console.log(Object.getOwnPropertyDescriptor(juan, "nombre")); // { value: 'sebas', writable: true, enumerable: true, configurable: true }

//.getOwnPropertyDescriptors() retorna un objeto que contiene la configuracion de todas las propiedades de un objeto
console.log(Object.getOwnPropertyDescriptors(juan));

//.getOwnPropertyNames() retorna un array con los nombres de las propiedades y metodos de un objeto
console.log(Object.getOwnPropertyNames(juan)); // [ 'nombre', 'apellido', 'edad', 'pasatiempo', 'soltero', 'contacto', 'saludar', 'decirMiNombre' ]

//.getPrototypeOf() retorna el prototipo de un objeto
console.log(Object.getPrototypeOf(me)); // { humano: false, printIntroduction: [Function: printIntroduction] }

//.hasOwn() verifica si un objeto tiene una propiedad
console.log(Object.hasOwn(juan, "nombre")); // true
console.log(Object.hasOwn(juan, "color")); // false

//.hasOwnProperty() verifica si un objeto tiene una propiedad
console.log(juan.hasOwnProperty("nombre")); // true
console.log(juan.hasOwnProperty("color")); // false

//.is() compara si dos valores son iguales
console.log(Object.is(2, 2)); // true
console.log(Object.is(2, "2")); // false
console.log(Object.is(null, null)); // true

//.isExtensible() verifica si un objeto se le pueden agregar propiedades, por defecto todos los objetos son extensibles pero se le puede cambiar con Object.preventExtensions()
console.log(Object.isExtensible(juan)); // true

//.isFrozen() verifica si un objeto esta congelado, es decir no se le pueden agregar, eliminar o modificar propiedades
console.log(Object.isFrozen(juan)); // false

//.isSealed() verifica si un objeto esta sellado, es decir no se le pueden agregar ni eliminar propiedades pero si se le pueden modificar, se puede cambiar con Object.seal() para que este sellado
console.log(Object.isSealed(juan)); // false

//.keys() retorna un array con los nombres de las propiedades de un objeto
console.log(Object.keys(juan)); // [ 'nombre', 'apellido', 'edad', 'pasatiempo', 'soltero', 'contacto', 'saludar', 'decirMiNombre' ]

//.preventExtensions() previene que se le puedan agregar propiedades a un objeto
Object.preventExtensions(juan); //no se le pueden agregar propiedades

//.seal() sella un objeto, es decir no se le pueden agregar ni eliminar propiedades pero si se le pueden modificar
Object.seal(juan); //no se le pueden agregar ni eliminar propiedades

//.toString() retorna un string que representa al objeto
console.log(juan.toString()); // [object Object]

//.values() retorna un array con los valores de las propiedades de un objeto
console.log(Object.values(juan)); // [ 'sebas', 'Abello', 19, [ 'Correr', 'Estudiar', 'Leer', 'Programar' ], false, { email: '
