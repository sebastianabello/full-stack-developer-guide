//Dom: Document Object Model
//El dom es una api que nos permite manipular el html desde javascript

console.log(window.document);
console.log(document);
//document.head nos permite acceder a la etiqueta head
console.log(document.head);
//document.body nos permite acceder a la etiqueta body
console.log(document.body);
//document.documentElement nos permite acceder a la etiqueta html
console.log(document.documentElement);
//document.doctype nos permite acceder a la etiqueta doctype
console.log(document.doctype);
//document.characterSet nos permite acceder a la etiqueta characterSet
console.log(document.characterSet);
//document.title nos permite acceder a la etiqueta title
console.log(document.title);
//document.links nos permite acceder a la etiqueta links
console.log(document.links);
//document.images nos permite acceder a la etiqueta images
console.log(document.images);
//document.forms nos permite acceder a la etiqueta forms
console.log(document.forms);
//document.styleSheets nos permite acceder a la etiqueta styleSheets
console.log(document.styleSheets);
//document.scripts nos permite acceder a la etiqueta scripts
console.log(document.scripts);
//document.getSelection nos permite saber que se esta seleccionando en la pagina
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
//document.write nos permite escribir en el html
//No es muy buena practica usarlo pero en algunos casos es necesario
//Lo que se esta insertando en el .html se ve despues del llamado al script
document.write("<h2>Hola mundo desde el dom</h2>");
