//📌Antes
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));

//muestra el primer elemento que coincida con el selector
console.log(document.getElementById("menu"));

//📌Ahora
//querySelector es mas lento que getElementById porque tiene que leer todo el documento y valida el tipo de selector que es.
//muestra el primer elemento que coincida con el selector
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelector(".card"));
//Muestra todos los elementos que coincidan con el selector
console.log(document.querySelectorAll(".card"));

//querySelectorAll devuelve un nodeList
//Un nodeList es un array de elementos del dom
console.log(document.querySelectorAll("a"));
//muestra el tercer elemento que coincida con el selector
console.log(document.querySelectorAll("a")[2]);

//se puede recorrer con un forEach
document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelectorAll("#menu li"));
