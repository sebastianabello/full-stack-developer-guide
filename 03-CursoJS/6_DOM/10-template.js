//📌Las plantillas (<template>) son una característica interesante que te permite definir fragmentos de contenido HTML que no se renderizan en la página web cuando se carga inicialmente, pero que puedes clonar y mostrar fácilmente con JavaScript.

//📢Las plantillas son útiles cuando deseas ocultar contenido de la página web y luego mostrarlo dinámicamente en respuesta a eventos o acciones del usuario.

//📌Creación de la plantilla:
//📢se Debe crear una plantilla en tu HTML usando la etiqueta <template>
/*
<template id="miPlantilla">
    <p>Este es un párrafo de ejemplo.</p>
</template>
*/

//📌Clonar la plantilla con JavaScript:
//📢Para mostrar contenido desde la plantilla, debes clonarla primero. Puedes hacerlo utilizando JavaScript. Aquí tienes un ejemplo de cómo clonar la plantilla y agregarla al DOM:

// Obtén la referencia a la plantilla
// const template = document.getElementById('miPlantilla');

// // Clona la plantilla
// const clone = document.importNode(template.content, true);

// // Agrega el clon al DOM
// document.body.appendChild(clone);

//📌Manipular contenido dinámicamente:
//📢Una vez que hayas clonado la plantilla, puedes manipular su contenido dinámicamente antes de agregarla al DOM.

const template = document.getElementById("miPlantilla");
const clone = document.importNode(template.content, true);

// Modificar el contenido del clon
const paragraph = clone.querySelector("p");
paragraph.textContent = "Este es un párrafo modificado.";

document.body.appendChild(clone);
