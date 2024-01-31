// Escriba un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.
// Pasar este string a console.log debería mostrar algo como esto:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// Cuando tenga un programa que genere este patrón, defina una variable size = 8 y cambie el programa para que funcione para cualquier size, produciendo una cuadrícula de ese ancho y alto.

const ajedres = () => {
  let textpar = "";
  let textimp = "";
  while (textpar.length < 8) {
    if (textpar.length % 2 === 0) {
      textpar += "#";
      textimp += " ";
    }
    if (textimp.length % 2 === 1) {
      textpar += " ";
      textimp += "#";
    }
  }
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) console.log(textpar);
    if (i % 2 === 1) console.log(textimp);
  }
};
ajedres();

const ajedres1 = (tamanio) => {
  let textpar = "";
  let textimp = "";
  while (textpar.length < tamanio) {
    if (textpar.length % 2 === 0) {
      textpar += "#";
      textimp += " ";
    }
    if (textimp.length % 2 === 1) {
      textpar += " ";
      textimp += "#";
    }
  }
  for (let i = 0; i < tamanio; i++) {
    if (i % 2 === 0) console.log(textpar);
    if (i % 2 === 1) console.log(textimp);
  }
};
ajedres1(40);
