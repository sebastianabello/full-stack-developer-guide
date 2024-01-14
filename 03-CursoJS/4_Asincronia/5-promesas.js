//📌Promesa
//📢Las promesas son una forma de manejar operaciones asíncronas de manera más legible y controlada que los callbacks anidados. Proporcionan una estructura para gestionar el flujo de control de una operación que puede tomar tiempo en completarse, como una solicitud de red, una lectura de archivo o cualquier tarea que no sea inmediata.

//📌Tres estados posibles:
//📢Pendiente (pending): El estado inicial de una promesa. Significa que la operación aún no se ha completado ni ha fallado.

//📢Cumplida (fulfilled): Significa que la operación se completó con éxito, y la promesa ha sido "resuelta" con un valor resultante.

//📢Rechazada (rejected): Significa que la operación ha fallado, y la promesa ha sido "rechazada" con un motivo (un objeto que describe la razón del fallo).

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error el valor "${value}" ingresado no es un numero`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    //error se captura en el catch y se sale
    return cuadradoPromise("4");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin promise");
  })
  .catch((err) => console.error(err));

//📢usamos then() para manejar el caso de éxito y catch() para manejar el caso de error.
//📢Las promesas son especialmente útiles cuando necesitas realizar múltiples operaciones asíncronas y deseas controlar cómo se manejan sus resultados.
