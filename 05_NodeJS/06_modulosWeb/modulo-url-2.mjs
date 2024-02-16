import { format } from "url";

const urlObj = {
  protocol: "https",
  hostname: "www.ejemplo.com",
  pathname: "/ruta",
  query: { parametro1: "valor1", parametro2: "valor2" },
};

//format hace que dado un objeto con propiedades, se devuelva una url en formato de texto
const urlString = format(urlObj);

console.log("URL completa:", urlString);
