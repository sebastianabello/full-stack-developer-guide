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

//Metodos de arreglos comunes

const colores = ["Rojo", "verde", "Azul"];
console.log(colores);

//push ---> Añade elemento al final
colores.push("Negro");
console.log(colores);

//pop ---> Elimina el ultimo elemento
colores.pop();
console.log(colores);

//forEach ---> Ejecuta la función indicada una vez por cada elemento del array.

//A la funcion se le pasan dos parametros primero el elemento que seria cada tipo de dato del array y el segundo es el index es decir la pocicion en la que se encuentra.
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});
