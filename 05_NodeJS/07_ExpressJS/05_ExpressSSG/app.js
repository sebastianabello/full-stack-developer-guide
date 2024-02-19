import express from "express";
import fs from "fs/promises";
import path from "path";
import MarkdownIt from "markdown-it";
import fm from "front-matter";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(__dirname);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// rutas dinamicas desde archivos en la carpeta pages
const pagesDir = path.join(__dirname, "pages");
const files = await fs.readdir(pagesDir);

// para impletar los .html y md
for (let file of files) {
  const filePath = path.join(pagesDir, file);
  let ext = path.extname(filePath);

  if (ext === ".html" || ext === ".md" || ext === ".pug") {
    let fileName = path.basename(filePath, ext);
    app.get(`/${fileName}`, async (req, res) => {
      try {
        if (ext === ".pug") {
          res.render(fileName);
        }
        if (ext === ".html") {
          res.sendFile(filePath);
        }
        if (ext === ".md") {
          let fileContent = await fs.readFile(filePath, "utf-8");
          let { attributes: frontMatterAttributes, body } = fm(fileContent);
          let attributes = frontMatterAttributes;
          let contentHTML = MarkdownIt().render(body);
          res.render("layout-markdown", { ...attributes, contentHTML });
        }
      } catch (err) {
        res.status(404).render("error-404");
      }
    });
  }
}

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).render("error-404");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el http://localhost:${port}`);
});
