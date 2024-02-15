import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminGifsicle from "imagemin-gifsicle";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import sharp from "sharp";

let inputFolder = "src";
let outputFolder = "opt";
let targetWidth = 1920;

const processImage = async () => {
  try {
    const files = await fse.readdir(inputFolder);
    for (const file of files) {
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${outputFolder}/${file}`;

      await sharp(inputPath).resize(targetWidth).toFile(outputPath);
      await imagemin([inputPath], {
        destination: outputFolder,
        plugins: [
          imageminJpegtran({ quality: 80 }),
          imageminPngquant(),
          imageminGifsicle(),
          imageminSvgo(),
          //hace una copia de png o jpg a webp, que es un formato de imagen mas ligero
          imageminWebp({ quality: 80 }),
        ],
      });
      console.log("Se optimizo la imagen con exito!");
    }
    console.log("Se optimizaron todas las imagenes con exito!");
  } catch (error) {
    console.error("Error:", error);
  }
};

processImage();
