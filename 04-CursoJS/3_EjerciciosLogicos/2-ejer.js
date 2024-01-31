//1)Programa una funcion que cuente el numero de caracteres de una cadena de texto

//📢Forma 1:
function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingreso ningura cadena");
  } else {
    console.info(`La cadena tiene ${cadena.length} caracteres`);
  }
}
contarCaracteres();
contarCaracteres("Holi");

//📢Forma 2:
const contarCaracteres1 = (cadena = "") =>
  !cadena
    ? console.warn("No ingreso ningura cadena forma 2")
    : console.info(`La cadena tiene ${cadena.length} caracteres`);

contarCaracteres1();
contarCaracteres1("Holi");
