//2) Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados.

const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No se ingreso ninguna cadena de texto ")
    : longitud === undefined
    ? console.warn("No se ingreso ninguna longitud para recortar el texto")
    : console.info(cadena.slice(0, longitud));

recortarTexto("Hola mundo", 4);
recortarTexto();
recortarTexto("Hola hola");
