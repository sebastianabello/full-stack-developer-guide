import { resolve } from "path";

const rutaRelativa = "../carpeta/archivo.txt";

//resolve() devuelve la ruta absoluta de la ruta relativa. es decir, la ruta completa.
const rutaAbsoluta = resolve(rutaRelativa);

console.log("Ruta absoluta:", rutaAbsoluta);
