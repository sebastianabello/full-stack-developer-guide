//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const textoEvaluar = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");
  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresada, No es una cadena de texto`
    );

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLowerCase();

  for (let letra of cadena) {
    if (/[aeiou]/.test(letra)) {
      vocales++;
    }
    if (/[bcdfghjklmnpqrstwxys]/.test(letra)) {
      consonantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

textoEvaluar(0);
textoEvaluar("");
textoEvaluar();
textoEvaluar("Hola mucho gusto");
