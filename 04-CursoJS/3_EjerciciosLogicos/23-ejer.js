//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}, No es un numero"`);
  }

  return console.info(
    `Arreglo original: ${arr}\nValor mayor: ${Math.max(
      ...arr
    )}, \nValor menor: ${Math.min(...arr)}`
  );
};

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2, 3, 4, 5, true]);
arrayMinMax([1, 4, 3, 99, -60]);
