console.log(document.documentElement.lang); //es-ES
console.log(document.documentElement.getAttribute("lang")); //es-ES

console.log(document.querySelector(".link-dom").href); 
console.log(document.querySelector(".link-dom").getAttribute("href")); 

document.documentElement.lang = "es";
console.log(document.documentElement.lang);

//constantes escritas con dolar en la primera letra, es para difereciar de codigo js a codigo del dom
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);
//setAttribute nos permite cambiar el valor de un atributo del html, recibe dos parametros el nombre del atributo y el valor
//Tener en cuenta que donde se defina se colocara de una asi se llame con console.log antes algo confuso pero se puede entender probando en la  consola
$linkDOM.setAttribute("target", "_blank");

//data-attributes
//sirven para guardar informacion que no se muestra en el navegador
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
