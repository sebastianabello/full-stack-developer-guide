// Antes de explicar como funciona el modelo de JavaScript es importante endender algunos conceptos:

//📌Procesamiento Single thread y Multi thread.

//📢JavaScript es un lenguaje de programación de un solo hilo (single-threaded). Esto significa que solo puede realizar una tarea a la vez en el hilo principal de ejecución.
//📢Sin embargo, JavaScript puede aprovechar la multitarea mediante la ejecución de operaciones asíncronas en segundo plano a través de eventos, promesas, y llamadas a API web, lo que permite la apariencia de multitarea sin bloquear el hilo principal.

//📌Operaciones de CPU y Operaciones de entrada.

//📢Las operaciones de CPU son tareas que requieren cálculos intensivos de la CPU, como la manipulación de datos, operaciones matemáticas complejas, etc.
//📢Las operaciones de entrada son tareas que involucran la interacción con usuarios o dispositivos de entrada, como leer archivos, hacer solicitudes de red o interactuar con la interfaz de usuario.

//📌Operaciones Concurrentes y Paralelas

//📢Operaciones concurrentes se refieren a la capacidad de un sistema para manejar múltiples tareas de manera simultánea, aunque no necesariamente al mismo tiempo.
//📢Operaciones paralelas son tareas que se ejecutan literalmente al mismo tiempo en múltiples hilos o procesos, aprovechando la capacidad de procesamiento de múltiples núcleos de CPU.

//📌Operaciones Bloqueantes y No bloqueantes.

//📢Operaciones bloqueantes son aquellas que detienen la ejecución del hilo principal hasta que se complete la operación. Esto puede causar una ralentización en la aplicación.
//📢Operaciones no bloqueantes permiten que el hilo principal continúe su ejecución sin detenerse, incluso si la operación no ha terminado. Esto es típico de las operaciones asíncronas en JavaScript.

//📌Operaciones Sincronicas y Asincronicas.

//📢Operaciones síncronas son aquellas en las que el programa espera a que se complete la operación antes de continuar con el resto del código.
//📢Operaciones asíncronas son aquellas en las que el programa no espera a que se complete la operación y puede continuar con otras tareas. Cuando la operación asíncrona se completa, se maneja a través de callbacks, promesas, o async/await.

//📌Código Síncrono Bloqueante

//📢El código síncrono bloqueante es aquel en el que todas las operaciones se realizan en secuencia y de manera sincrónica. Si una operación es bloqueante, detiene la ejecución del código hasta que se complete.

(() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

console.log("********************");

//Código Asíncrono No Bloquenate
(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
