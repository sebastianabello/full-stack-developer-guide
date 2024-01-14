//3) Programa una funcion que dada un String te devuelva un array de textos separados por cierto caracter

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No se ingreso un cadena de texto")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

cadenaAArreglo(
  "dsdsd dsad fa asfa fas fafaar raw  aga af sa fsaf fasf asf sfa fasf fgas",
  " "
);
