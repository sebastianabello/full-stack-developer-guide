import { basename, dirname, extname } from "path";

const ruta = "/ruta/principal/archivo.txt";
//Es parecido a cuando usamos parse() en una url, pero en este caso, devuelve el nombre del archivo, el nombre del directorio y la extensión del archivo.
const nombreArchivo = basename(ruta);
const nombreDirectorio = dirname(ruta);
const extension = extname(ruta);

console.log("Nombre del archivo:", nombreArchivo);
console.log("Nombre del directorio:", nombreDirectorio);
console.log("Extensión del archivo:", extension);
