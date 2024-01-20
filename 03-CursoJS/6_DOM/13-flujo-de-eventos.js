const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos() {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

$divsEventos.forEach((div) => {
  //fase de burbuja
  div.addEventListener("click", flujoEventos);
  //fase de captura
  div.addEventListener("click", flujoEventos, true);
});
