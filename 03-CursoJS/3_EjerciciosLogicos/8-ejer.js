//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alRevec = palabra.split("").reverse().join("");

  return palabra === alRevec
    ? console.ifno(
        `Si es palindormo, Palabra original ${palabra}, palabra al reves ${alRevec}`
      )
    : console.info(
        `No es palindromo, palabra original ${palabra}, palabra al reves ${alRevec}`
      );
};
palindromo();
palindromo("Hola Mundo");
palindromo("SaLas");
