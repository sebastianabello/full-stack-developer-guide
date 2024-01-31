const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src = "../img/surft.jpg" alt = "Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//remplazar
//$cards.replaceChild($newCard,$cards.children[1]);

//borrar
$cards.removeChild($cards.lastElementChild);

//insertar nueva
//$cards.insertBefore($newCard,$cards.firstChild);

//📌Nuevos metodos

// .insertAdjacent...
//   .insertAdjacentElement(position, el)
//   .insertAdjacentHTML(position, html)
//   .insertAdjacentText(position, text)

// //Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); */

//prepend sirve para agregar un elemento al inicio de un padre
$cards.prepend($newCard);
// append sirve para agregar un elemento al final de un elemento como hijo
$cards.append($newCard);
// before sirve para agregar un elemento antes de un elemento hermano
$cards.before($newCard);
// after sirve para agregar un elemento despues de un elemento hermano
$cards.after($newCard);
