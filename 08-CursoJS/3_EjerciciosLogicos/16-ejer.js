//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste el numero a convertir");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, No es un numero`);
  if (base === undefined)
    return console.warn("No ingresaste el numero a convertir");
  if (typeof base !== "number")
    return console.error(`El valor "${base}" ingresado, No es un numero`);

  if (base === 2) {
    return console.info(
      `El numero ${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir No es valido");
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal("hola");
convertirBinarioDecimal("s", 2);
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(111010, 2);
convertirBinarioDecimal(142, 10);
