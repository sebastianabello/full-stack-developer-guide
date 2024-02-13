const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); //muestra la clase que tiene
console.log($card.classList); //muestra las clases que tiene
//se puede verificar si esta un estilo
console.log($card.classList.contains("rotate-45")); 

//Para añadir un estilo ya creado en la hoja de estilo se puede de la siguiente manera.

$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);
console.log($card);
//Asi como se puede añadir tambien podemos quitar un estilo
$card.classList.remove("rotate-45");

//Metodo que hace las dos, es decir si la tiene la quita y asi al contrario

//Toggle sirve para los dos, si tiene la clase la quita, si no la tiene la pone
//como no la tiene la pone
$card.classList.toggle("rotate-45");
//Como la tiene la quita
$card.classList.toggle("rotate-45");
//se añade de nuevo xd
$card.classList.toggle("rotate-45");

//para replazar un estilo por otro
$card.classList.replace("rotate-45", "rotate-135");

//se puede añadir mas de un estilo a la vez
$card.classList.add("opacity-80", "sepia");
