//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No Ingresaste un numero");

  if (typeof numero !== "number")
    return console.warn(`El valor ${numero} ingresado, No es un numero`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(
        `Si es capua, numero original ${numero}, numero al reves ${alReves}`
      )
    : console.info(
        `NO es capua, numero original ${numero}, numero al reves ${alReves}`
      );
};

capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(2002);
