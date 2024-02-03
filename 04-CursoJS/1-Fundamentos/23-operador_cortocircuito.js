//Operador Cortocircuito

//📌Cortocircuito OR --> cuando el valor de la izquierda en la expresion siempre pueda validad a true, es el valor que se cargara por defecto.

function saludar(nombre) {
  //si el valor de la izquierda no se ejecuta pasa el de la derecha por defecto si no se define es (Undefine)
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("sebas"); //Hola sebas
saludar(); //Hola Desconocido
console.log(false || "Valor d la derecha");

//📌Cortocircuito AND --> cuando el valor de la izquierda en la expresion siempre pueda validad a false, es el valor que se cargara por defecto.

console.log(false && "Valor d la derecha");
