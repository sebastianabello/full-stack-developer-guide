console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";

//constantes escritas con dolar en la primera letra, es para difereciar de codigo js a codigo del dom
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);

$linkDOM.setAttribute("target", "_blank");

//data-attributes
//sirven para guardar informacion que no se muestra en el navegador
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
