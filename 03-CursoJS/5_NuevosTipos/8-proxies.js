//📌permiten controlar y personalizar el comportamiento fundamental de otros objetos, llamados "objetos objetivo" o "target objects." Los Proxies actúan como intermediarios entre el código que interactúa con el objeto y el objeto en sí. Esto proporciona la capacidad de interceptar y modificar operaciones básicas en un objeto, como la lectura, escritura, eliminación de propiedades y otras acciones.

//📌Creación de un Proxy:
//📢Para crear un Proxy, necesitas dos argumentos: el objeto que quieres "proteger" y un objeto "manejador" (handler) que define cómo se deben manejar las operaciones en el objeto. El handler es un objeto que contiene "trampas" (traps) que son funciones que se llaman cuando se realiza una operación en el objeto Proxy.

const target = {
  valor: 42,
};

const handler = {
  get: function (target, propiedad) {
    console.log(`Obteniendo la propiedad "${propiedad}"`);
    return target[propiedad];
  },
};

const proxy = new Proxy(target, handler);

/*
📌Trampas comunes:
📌Los trampas (métodos) más comunes que puedes definir en el objeto manejador son:

📢get: Se ejecuta cuando se accede a una propiedad.
📢set: Se ejecuta cuando se asigna un valor a una propiedad.
📢deleteProperty: Se ejecuta cuando se intenta eliminar una propiedad.
📢has: Se ejecuta al utilizar el operador in para verificar si una propiedad existe en el objeto.
📢apply: Se ejecuta cuando se llama al objeto Proxy como una función.
📢construct: Se ejecuta cuando se utiliza el objeto Proxy con el operador new para crear una instancia.
*/

//📌Interceptación de operaciones:
//📢Cuando se realizan operaciones en el objeto Proxy, el Proxy intercepta esas operaciones y las redirige al objeto manejador, donde puedes personalizar su comportamiento antes de aplicarlas al objeto original.

proxy.valor; // Se ejecuta la trampa 'get' y muestra el mensaje
proxy.valor = 50; // Se ejecuta la trampa 'set'
delete proxy.valor; // Se ejecuta la trampa 'deleteProperty'

//📌Uso de Proxies:
//📢Los Proxies se utilizan para implementar lógica personalizada, validación, seguimiento de acceso a propiedades, seguridad, control de flujo y muchas otras funcionalidades. Pueden ser útiles en situaciones donde necesitas un mayor control sobre la manipulación de objetos.

//Ejemplo:

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona.`
      );
    }

    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}"" sólo acepta letras y espacios en blanco`
      );
    }
    obj[prop] = valor;
  },
};

const jon = new Proxy(persona, manejador);
jon.nombre = "Jon";
jon.apellido = "MirCha";
jon.edad = 35;
jon.twitter = "@jonmircha";
console.log(jon);

console.log(persona);
