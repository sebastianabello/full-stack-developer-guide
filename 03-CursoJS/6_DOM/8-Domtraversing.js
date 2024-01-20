//DOm Traversing es la capacidad de moverse entre los elementos del DOM
const $cards = document.querySelector(".cards");
console.log($cards);
//children devuelve los hijos del elemento
console.log($cards.children);
console.log($cards.children[2]);
//firstElementChild y lastElementChild sirven para saber el primer y ultimo elemento hijo
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

//si quiero saber el elemento anterior y el siguiente
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

//closest sirve para buscar el ancestro mas cercano
console.log($cards.closest("div"));
