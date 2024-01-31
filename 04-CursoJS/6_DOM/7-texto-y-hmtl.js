const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
  El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

//innertext no es estandar, no se recomienda usarlo, se inserta tal cual con identacion y saltos de linea
// $whatIsDOM.innerText = text;
//textContent es estandar, se inserta tal cual sin identacion y saltos de linea
// $whatIsDOM.textContent = text;

//contiene toda la nueva insercion
//para renderizarlo como codigo html se usa:
// $whatIsDOM.innerHTML = text;

//segun las etiquetas las pone en difente contenedor
//remplaza el contenido del dom y lo remplazo por otro
$whatIsDOM.outerHTML = text;
