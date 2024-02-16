// import { get } from "http";
import { get } from "https";

//tener en cuenta el protocolo, puede ser http o https
//el pueto http es 80
//el de https es 443
const urlSite = {
  hostname: "github.com",
  port: 443,
  path: "/sebastianabello",
};
//get recibe dos parametros, el primero es un objeto con las propiedades de la url a la que se va a hacer la peticion y el segundo es un callback que recibe la respuesta del servidor.
get(urlSite, (res) => {
  console.log("El sitio respondió con el estado:", res.statusCode);
  console.log("Cabeceras:", res.headers);
  res.on("data", (data) => {
    console.log(data.toString());
  });
}).on("error", (error) => {
  console.log("Error:", error.message);
});
