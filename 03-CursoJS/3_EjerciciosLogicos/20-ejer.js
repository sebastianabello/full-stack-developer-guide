//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Juan Sebastian") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");
  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, no es una cadena de texto`
    );

  // ^ --> indica que no puede haber nada antes de la expresion a evaluar.
  // $ --> indica que no puede haber nada despues de la expresion a evaluar.
  // + ---> para que lo evalue por cada caracter en la cadena de texto
  //(/s) ---> indica que acepta espacion en blanco

  let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombre);

  return expReg
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}",NO es un nombre valido`);
};

validarNombre();
validarNombre(3);
validarNombre("Sebastian abello");
validarNombre("sebastian123");
