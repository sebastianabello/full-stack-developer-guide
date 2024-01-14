//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numPrimo = (numero = undefined) => {
  //validaciones para cuadno se meta el dato
  if (numero === undefined) return console.warn("No igreso ningun numero");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero} igresado, No es un numero`);
  if (numero === 0) return console.warn("El numero no puede ser 0");
  if (numero === 1) return console.warn("El numero no puede ser 1");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El numero ${numero}, No es primo`)
    : console.log(`El numero ${numero}, SI es primo`);
};

numPrimo();
numPrimo(0);
numPrimo("13");
numPrimo(1);
numPrimo(-13);
numPrimo(10);
numPrimo(4);
numPrimo(5);
