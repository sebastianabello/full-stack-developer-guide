import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Home</h1>");
  } else if (req.url === "/productos") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Productos</h1>");
  } else if (req.url === "/contacto") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Contacto</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor en el puerto 3000, http://127.0.0.1:3000/ ");
});
