// 📢son una característica poderosa que permite pausar y reanudar la ejecución de una función. Estas funciones se definen utilizando la palabra clave function* y contienen al menos una instrucción yield, que se utiliza para emitir un valor y pausar la ejecución de la función.

//📌Definición de una función generadora:
//📢Para crear una función generadora, se utiliza la sintaxis function* y se incluyen instrucciones yield en el cuerpo de la función.

function* miGenerador() {
  yield 1;
  yield 2;
  yield 3;
}

//📌Creación de un generador:
//📢Para crear una instancia de un generador, simplemente llamamos a la función generadora. Esto no ejecuta el código dentro de la función generadora; en su lugar, crea un objeto generador.

const generador = miGenerador();

//📌Pausa y reanudación de la ejecución:
//📢Cuando llamamos al método next() en un objeto generador, la ejecución de la función generadora se pausa en la instrucción yield y se devuelve un objeto con dos propiedades: value (el valor emitido) y done (un valor booleano que indica si la función generadora ha terminado).

console.log(generador.next()); // { value: 1, done: false }
console.log(generador.next()); // { value: 2, done: false }
console.log(generador.next()); // { value: 3, done: false }
console.log(generador.next()); // { value: undefined, done: true }

//📌Iteración automática:
//📢Los generadores son iterables por naturaleza y se pueden usar en bucles for...of para simplificar la iteración.

for (const valor of miGenerador()) {
  console.log(valor);
}

// Resultado:
// 1
// 2
// 3

//📌Generadores infinitos:
//📢Los generadores permiten la creación de secuencias infinitas de datos, ya que puedes usar un bucle while con yield para generar datos de manera indefinida.
function* contadorInfinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
