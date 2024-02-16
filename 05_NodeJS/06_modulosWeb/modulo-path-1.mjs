import { join } from "path";

const directorio = "/ruta/principal";
const archivo = "archivo.txt";
const archivo2 = "archivo2.txt";

//join() combina las rutas de directorio y archivo, recibe dos argumentos o más y devuelve una ruta completa.
const rutaCompleta = join(directorio, archivo);
const rutaCompleta2 = join(directorio, archivo, archivo2);

console.log("Ruta completa:", rutaCompleta);
console.log("Ruta completa:", rutaCompleta2);
