import { createServer } from "http";
import { get } from "https";
import { writeFileSync } from "fs";

const DB_FILE = "pag-gitgub.html";

const hostname = "localhost",
  port = 3000,
  options = {
    host: "github.com",
    port: 443,
    path: "/tuUsuario",
  };

let htmlCode = "";

const httpClient = (res) => {
  console.log(
    `El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`
  );

  res.on("data", (data) => {
    htmlCode += data;
    // console.log(htmlCode);
    writeFileSync(DB_FILE, htmlCode, "utf-8");
    // console.log(data, data.toString());
  });
};

const httpError = (err) => {
  console.error(
    `El sitio ${options.host} no ha respondido. Código: ${err.code}. Mensaje: ${err.message}.`
  );
};

const webServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(htmlCode);
};

//instancia cliente HTTP o HTTPs
get(options, httpClient).on("error", httpError);

//instancia servidor local HTTP
createServer(webServer).listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
