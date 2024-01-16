//📌Propiedades dinamicas
//📢se refieren a la capacidad de agregar, modificar o eliminar propiedades en un objeto en tiempo de ejecución. Esto significa que no estás limitado a definir todas las propiedades de un objeto en su declaración inicial; puedes manipular el objeto a medida que tu programa se ejecuta.

//📌Agregar propiedades dinámicas:
//📢Puedes agregar una nueva propiedad a un objeto simplemente asignando un valor a una nueva clave en el objeto:

const miObjeto = {};
miObjeto.nuevaPropiedad = "Valor nuevo";

//📌Modificar propiedades existentes:
//📢Puedes cambiar el valor de una propiedad existente asignándole un nuevo valor:

const persona = { nombre: "Juan", edad: 30 };
persona.edad = 31;

//📌Eliminar propiedades:
//📢Puedes eliminar una propiedad de un objeto utilizando el operador delete:

const coche = { marca: "Toyota", modelo: "Camry" };
delete coche.modelo;

//📌Propiedades calculadas:
//📢Puedes utilizar corchetes para acceder a propiedades calculadas o definir propiedades con nombres basados en variables:

const objeto = {};
const nombrePropiedad = "claveDinamica";
objeto[nombrePropiedad] = "Valor dinámico";

//📌Iteración sobre propiedades:
//📢Puedes iterar sobre las propiedades de un objeto utilizando bucles for...in o el método Object.keys() para obtener una lista de nombres de propiedades.

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Nueva York",
};

for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

//Ejemplo:
let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`]: "Valor Aleatorio",
};
console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);
