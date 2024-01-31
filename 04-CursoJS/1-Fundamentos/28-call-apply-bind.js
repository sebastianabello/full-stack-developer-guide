//call:

//📢El método call se utiliza para invocar una función y establecer explícitamente el valor de this, además de pasar argumentos a la función.
//📢call toma el objeto que se convertirá en this como su primer argumento, y los argumentos de la función se pasan a continuación como argumentos individuales.

const persona = {
  nombre: "Ana",
  saludar: function (saludo) {
    console.log(`${saludo}, soy ${this.nombre}`);
  },
};

persona.saludar.call(persona, "Hola"); // "Hola, soy Ana"

//📌apply:

//📢El método apply es similar a call, pero en lugar de pasar argumentos como argumentos individuales, se espera un array de argumentos.
//📢apply toma el objeto que se convertirá en this como su primer argumento, y un array de argumentos como su segundo argumento.

const persona1 = {
  nombre: "Carlos",
  saludar: function (saludo, apellido) {
    console.log(`${saludo}, soy ${this.nombre} ${apellido}`);
  },
};

persona1.saludar.apply(persona1, ["Hola", "Gómez"]); // "Hola, soy Carlos Gómez"

//📌bind:

//📢El método bind se utiliza para crear una nueva función que tiene un valor específico de this, sin ejecutar la función en ese momento.
//📢bind toma un objeto como su primer argumento y devuelve una nueva función con el valor de this configurado en ese objeto.

const persona2 = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

const funcionSaludo = persona2.saludar.bind(persona);
funcionSaludo(); // "Hola, soy Juan"
