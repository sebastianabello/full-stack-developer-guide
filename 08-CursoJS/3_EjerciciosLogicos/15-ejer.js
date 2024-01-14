//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertir = (grado = undefined, unidad = undefined) => {
  if (grado === undefined && unidad === undefined)
    return console.warn("No ingresaste un dato valido");
  if (typeof grado !== "number") return console.warn("No ingresaste un numero");
  if (typeof unidad !== "string")
    return console.warn(
      `El valor "${grado}" ingresado, NO es una cadena de texto`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de grado no reconocido");

  if (unidad === "C") {
    return console.info(`${grado}°C = ${Math.round(grado * (9 / 5) + 32)}°C`);
  } else if (unidad === "F") {
    return console.info(`${grado}°F = ${Math.round((grado - 32) * (5 / 9))}°F`);
  } else {
    return console.error("El tipo de grado a convertir no es VALIDO");
  }
};
convertir();
convertir("13");
convertir(13, 13);
convertir(13, "hola");
convertir(13, "F");
convertir(13, "C");
