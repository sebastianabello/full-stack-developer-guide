//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("juanse.abello.2004@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, no es una cadena de texto`
    );

  // ^ --> indica que no puede haber nada antes de la expresion a evaluar.
  // $ --> indica que no puede haber nada despues de la expresion a evaluar.
  // + ---> para que lo evalue por cada caracter en la cadena de texto

  let expReg =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i.test(
      email
    );

  ///^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

  ///[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

  return expReg
    ? console.info(`"${email}", Email valido`)
    : console.warn(`"${email}", Email invalido`);
};

validarEmail();
validarEmail(34);
validarEmail("juan,sas,2fas@gmal.com");
validarEmail("Juanse.abello.2004@gmail.com");

//fusion de ejercicio 19 y 20
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto ");
  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, no es una cadena de texto`
    );

  if (patron === undefined)
    return console.warn("No ingresaste una cadena de texota ");
  if (patron instanceof RegExp)
    return console.error(`El valor "${patron}" No es una expresion regular`);

  let expReg = patron.test(cadena);

  ///^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

  ///[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

  return expReg
    ? console.info(`"${email}", cumple con el patron ingresado`)
    : console.warn(`"${email}", No cumple con el patron`);
};

validarPatron();
validarPatron(34);
validarPatron("juan,sas");
