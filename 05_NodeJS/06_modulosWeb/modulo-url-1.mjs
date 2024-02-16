import { parse } from "url";

const urlString =
  "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";

//parse hace que la url sea un objeto con propiedades, recibe dos parámetros, el primero es la url y el segundo es un booleano que indica si se deben parsear los parámetros de consulta
//metodos:
// - protocol: protocolo de la url
// - hostname: nombre del host
// - pathname: ruta de la url
// - query: parámetros de consulta

const parsedUrl = parse(urlString, true);

console.log("Protocolo:", parsedUrl.protocol);
console.log("Hostname:", parsedUrl.hostname);
console.log("Pathname:", parsedUrl.pathname);
console.log("Parámetros de consulta:", parsedUrl.query);
