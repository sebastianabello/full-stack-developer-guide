import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde express.js</h1>");
});

app.get("/user/:id-:name-:age", (req, res) => {
  //http://localhost:3000/user/1234-Juan-25
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
      ${req.params.name}, bienvenido. Tu id es ${req.params.id} y tiene ${req.params.age} años.
    </h1>  
  `);
});
app.get("/search", (req, res) => {
  //http://localhost:3000/search?id=10&name=juan&age=39
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
      ${req.query.name}, bienvenido. Tu id es ${req.query.id} y tiene ${req.query.age} años.
    </h1>  
  `);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
