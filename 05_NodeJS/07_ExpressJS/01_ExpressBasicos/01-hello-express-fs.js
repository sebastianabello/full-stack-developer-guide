//Cuando usamos import luego {} o nada, el {} es para importar una función o variable en específico, y nada es para importar todo el archivo.
import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
