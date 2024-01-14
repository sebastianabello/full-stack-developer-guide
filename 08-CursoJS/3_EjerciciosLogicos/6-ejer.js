//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirPalabras = (palabras = "") =>
  !palabras
    ? console.warn("No ha ingresado palabras")
    : console.info(palabras.split("").reverse().join(""));
invertirPalabras("sebastian");
invertirPalabras();
