//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (const num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, no es un numero`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(
    `El arreglo orginal: ${arr},\nArreglo elevado al cuadrado ${newArr}`
  );
};
