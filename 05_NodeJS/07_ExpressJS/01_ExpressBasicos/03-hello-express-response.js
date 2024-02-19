import express from "express";
import { resolve } from "path";

const app = express();

//la diferencia entre send y end es que send permite enviar un objeto, un array, un string, un json, etc y end solo permite enviar un string, por lo que send es mas versatil
app.get("/", (req, res) => {
  res.send("<h1>Hola mundo desde express.js</h1>");
});
// json es un metodo que permite enviar un objeto, un array, un string, un json, etc
app.get("/json", (req, res) => {
  res.json({
    name: "sebastian",
    age: 20,
  });
});
// sendFile permite enviar un archivo
app.get("/archivo", (req, res) => {
  res.sendFile(resolve("index.html"));
});

// render permite enviar un archivo html que se encuentre en la carpeta views
app.get("/plantilla", (req, res) => {
  //no funciona por ahora porque no se le ha especificado el motor de plantillas a express
  res.render("plantilla");
});

// redirect permite redirigir a otra pagina
app.get("/github", (req, res) => {
  // res.send("<h1>Bienvenidos a github</h1>");
  res.redirect(301, "https://github.com");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
