//4) Programa una funcion que repita un texto X veces

const repetirTexto = (texto = "", cantidad = undefined) =>
  !texto
    ? console.warn("No se ha ingresado un texto")
    : cantidad === undefined
    ? console.warn("No se ha ingresado un numero para repetir el texto")
    : cantidad === 0
    ? console.warn("La cantidad no puede ser 0")
    : Math.sign(cantidad) === -1
    ? console.warn("La cantidad no puede ser negativa")
    : console.info(texto.repeat(`${cantidad}`));

repetirTexto();
repetirTexto("holi", 3);
repetirTexto("holi");
repetirTexto("holi", 0);
repetirTexto("holi", -5);

//Forma 2:
const repetirTexto2 = (texto = "", cantidad = undefined) => {
  if (!texto) return console.warn("No se ha ingresado un texto");
  if (cantidad === undefined)
    return console.warn("No se ha ingresado un numero para repetir el texto");
  if (cantidad === 0) return console.warn("La cantidad no puede ser 0");
  if (Math.sign(cantidad) === -1)
    return console.warn("La cantidad no puede ser negativa");
  for (let i = 0; i < cantidad; i++) {
    console.info(`${texto}, ${i + 1}`);
  }
};

repetirTexto2();
repetirTexto2("holi", 3);
repetirTexto2("holi");
repetirTexto2("holi", 0);
repetirTexto2("holi", -5);
