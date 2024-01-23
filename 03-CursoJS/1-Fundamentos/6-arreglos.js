//ARREGLOS
//array

//En un array siempre empieza el index desde 0

//Arreglo vacio
const a = [];
console.log(a);

//Arreglo con datos
const b = [1, true, "Hola", ["A", "B", "C"]];
console.log(b);

//para saber la longitud de un arreglo se usa: length
console.log(a.length); //0
console.log(b.length); //4

//Para acceder a los elementos de un arreglo es de este modo:

console.log(b[0]); //Posicion 1 del array es decir (1)
console.log(b[2]);
console.log(b[3][2]); // De igual manera se recorre un array dentro de otro array
const c = [1, "holi", ["A", "B", "C", ["d", "e", "f"]]];
console.log(c[2][3][1]);

//Forma nueva de crear arreglos

const d = Array.of("x", "y", "d", 2, 3, 4);
console.log(d);

//Metodo fill() cambia todos los elementos en un arreglo por un valor estático
//En el siguiente caso se crea el array de 20 elemntos
//luego con .fill(false) lo que tendra cada elemento
const e = Array(20).fill(false);
console.log(e);

//Practicas que ya no usan para crear un arreglo
const f = new Array();
console.log(f);
const g = new Array(1, 2, 3, 4, true);
console.log(g);

//🔴Metodos de arreglos comunes

const colores = ["Rojo", "verde", "Azul"];
console.log(colores);

//🔴push("") ---> Añade elemento al final
colores.push("Negro");
console.log(colores);

//🔴pop() ---> Elimina el ultimo elemento
colores.pop();
console.log(colores);

//🔴forEach ---> Ejecuta la función indicada una vez por cada elemento del array.

//A la funcion se le pasan dos parametros primero el elemento que seria cada tipo de dato del array y el segundo es el index es decir la pocicion en la que se encuentra.
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});

//🔴unshift("") ----> Añadir un elemento al principio de un Array
let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]

//🔴shift() ------> Eliminar el primer elemento de un Array
let primero = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]

//🔴indexOf("") ---> Encontrar el índice de un elemento del Array
frutas.push("Fresa");
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// 1 ---
//si no encuentra retorna -1

//🔴splice() ----> no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
//recibe 3 parametros: posicion, cantidad de elementos a eliminar, elementos a agregar
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria", "Pepino", "Tomate"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let poss = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(poss, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria", "Pepino", "Tomate"] ==> Lo que actualmente tiene "vegetales"

//🔴slice() ----> Copiar un Array
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria, "Pepino", "Tomate""]; ==> Copiado en "copiaArray"

//Devuelve true si valor es un array, y false en caso contrario.
copiaArray.isArray();
// true

//🔴fill() ----> Rellenar todos los elementos de un array desde el índice a un valor estático.
//recibe 3 parametros: valor, inicio, fin
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

//🔴find()) ----> Devuelve el primer elemento de un array que cumpla con la condición dada por una función.
const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 10);

console.log(found);
// Expected output: 12

//🔴findIndex() ----> Devuelve el índice del primer elemento de un array que cumpla con la condición dada por una función.
const array3 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array3.findIndex(isLargeNumber));
// Expected output: 3

//🔴includes() ----> Determina si un array contiene un elemento especificado, devuelve true o false según corresponda.
const array4 = [1, 2, 3];

console.log(array4.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

//🔴join() ----> Une todos los elementos de una matriz (u objeto similar) en una cadena y devuelve esta cadena.
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

//🔴concat() ----> Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const array5 = ["a", "b", "c"];
const array6 = ["d", "e", "f"];
const array7 = array5.concat(array6);

console.log(array7);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//🔴map() ----> Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

//🔴filter() ----> Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//🔴reduce() ----> Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

const array9 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

//🔴reverse() ----> Invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

const array10 = ["one", "two", "three"];
console.log("array1:", array10);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array10.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array10);
// Expected output: "array1:" Array ["three", "two", "one"]

//🔴sort() ----> Ordena los elementos de un array localmente y devuelve el array ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.
