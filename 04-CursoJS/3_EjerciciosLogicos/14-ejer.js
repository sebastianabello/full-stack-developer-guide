//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numParOImp = (numero = undefined) => {
  if (numero === undefined) return console.error("No ingreso nada");
  if (typeof numero !== "number") return "Lo que ingreso no fue un numero";

  return numero % 2 === 0
    ? console.info(`El numero ${numero} es par`)
    : console.info(`El numero ${numero} es Impar`);
};

numParOImp();
numParOImp("13");
numParOImp(-14);
numParOImp(4);
numParOImp(3);
