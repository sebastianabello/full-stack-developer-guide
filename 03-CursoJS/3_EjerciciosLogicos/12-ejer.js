// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if (numero == undefined) return console.warn("No se ingreso ningun numero");
  if (typeof numero !== "numero")
    return console.error(`El valor "${numero}" ingresado, No es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let factorial = 1;
  for (i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial es ${numero} es ${factorial}`);
};

factorial();
factorial(0);
factorial("13");
factorial(-4);
factorial(3);
