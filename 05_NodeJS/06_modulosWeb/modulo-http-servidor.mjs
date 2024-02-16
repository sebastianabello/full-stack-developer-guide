import { createServer } from "http";

//createServer es un metodo que recibe un callback con dos parametros, req y res, que son la peticion y la respuesta respectivamente.

//req es un objeto que contiene toda la informacion de la peticion que se esta haciendo al servidor.
//res es un objeto que contiene toda la informacion de la respuesta que se le va a dar al cliente.

//medotos:
//writeHead() recibe dos parametros, el estado de la respuesta y un objeto con las cabeceras de la respuesta.
//end() recibe un string que es el cuerpo de la respuesta.
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Hola Mundo</h1>");
});

//listen sirve para que el servidor escuche en un puerto, para desarrolar recomiendan tomar del puerto 3000 en adelante ya que los primeros puertos son para servicios del sistema.
//recibe 3 parametros, el puerto, una funcion que se ejecuta cuando el servidor esta listo y un mensaje que se imprime en consola.
server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor en el puerto 3000, http://127.0.0.1:3000/ ");
});
