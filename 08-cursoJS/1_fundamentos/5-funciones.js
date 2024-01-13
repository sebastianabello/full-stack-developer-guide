//Funciones
//Es un bloque de codigo auto contenido, se define una vez y se puede ejecutar en cualquier parte del codigo
//se pueden retorar de muchas formas
//Las funciones en JavaScript son objetos, un tipo especial de objetos

//📌FUNCION DECLARADA:
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}
//Funcion que devuelve valor
function funcionQueDevuelveValor() {
  console.log("Cuatro");
  console.log("Cinco");
  console.log("Seis");
  return "La funcion retorna un String, puede retornar lo que se quiera segun lo que se defina";
  //todo lo definido despues de un return se ignora
  return "20"; //aqui no se ejecuta (Es ignorado por el anterior return)
}
//Funcion con parametros
function saludar(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}
let valorDeFuncion = funcionQueDevuelveValor();

//📢Invocacion de funcion:
estoEsUnaFuncion(); // se puede llamar las veces que se quiera
funcionQueDevuelveValor(); //aqui cuando se llama no se muesta porque es necesario que se guarde en una variable
console.log(valorDeFuncion);

saludar(); //Si no se le pasan parametros es (Undifined)
saludar("sebas", 20);

//📌FUNCIONES EXPRESADAS
//forma erronea:
fuincionDeclarada(); //Se Ejecuta antes de que la funcion fuera escrita
function fuincionDeclarada() {
  console.log(
    "Esto es una funcion declarada puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada"
  );
}
fuincionDeclarada();

//forma correcta: hacerlo de una forma expresada
//parecida a funcion anonima

// funcionExpresada(); //no a sido declarada por eso da ERROR por lo cual es mejor guiarnos en los patrones de desarrollo
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada es decir una funcion que se le ha asignado como valor una variable, si invocamos esta funcion antes de su definicion Js nos dira..."
  );
};
funcionExpresada();

//las dos son validad, pero por buenas practicas se una funciones Expresadas, ademas no ahorramos errores de compilacion.
