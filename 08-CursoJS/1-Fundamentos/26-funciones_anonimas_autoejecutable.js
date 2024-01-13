//Funcuin anonima autoejecutable

//4 Formas de estrablecerla:

//📌Clasica
(function () {
  console.log("Version clasica");
})();

//📌La Crockford (JavaScript The Good Parts)
(function () {
  console.log("Version Crockford");
})();

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log");
})(document, window, console);

//📌Unaria
+(function () {
  console.log("Version unaria");
})();

//📌Facebook
!(function () {
  console.log("Version facebook");
})();
