//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const elimarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.warn("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacio");

  if (arr.length === 1)
    return console.error("El arreglo no puede tener solo 1 elemento");

  return console.info({
    original: arr,
    sinDuplicar: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};

elimarDuplicados();
elimarDuplicados([]);
elimarDuplicados({});
elimarDuplicados([2]);
elimarDuplicados(["x", 10, "x", 2, "10", true, true]);
