//Manejo de errores
//Es una estructura que permite evaluar fragmetos de codigo y cuando haya un error (Lanzamiento de error) se captura en la parte del catch, es una manera de gestionar errores.

//📌try-catch
try {
  console.log("En el try se agrega el codigo a evaluar");
  noExiste;
  //como no existe la anterior variable no se sigue ejecutando el try por el error y salta al catch para notificar
  console.log("Segundo mensaje del try");
} catch (error) {
  console.log("catc, captura cualquier error surgido o lanzado en el try");
} finally {
  //no es muy usado finally ya que se ejecuta siempre
  console.log(
    "El bloque finaly se ejecuta siempre al final de un un bloque try-catch"
  );
}

//📢Ejemplo:

//thorw sirve para lanzar un error personalizado
try {
  let numero = "y"; //Probar cambiando con un numero
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
