import hamburguerMenu from "./js/1_menu_hamburguesa.js";
import { digitalClock, alarm } from "./js/2_reloj.js";
import { moveBall, shortcuts } from "./js/3_teclado.js";
import countdown from "./js/4_cuenta_regresiva.js";
import scrollTopButton from "./js/5_boton_scroll.js";
import darkTheme from "./js/6_tema_oscuro.js";
import responsiveMedia from "./js/7_responsive.js";
import responsiveTester from "./js/8_prueba_responsive.js";
const d = document;

//DOMContetLoaded: cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para finalizar la carga.
d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "January 7 2025 00:00:00", "Feliz cumpleaños");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc?si=-SdemdU0elOcOZW4" target= "_blank" rel=noopener>Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=plocb8XCrGEH3Vr3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href ="https://maps.app.goo.gl/puGjoqkFpv5ixuKf8" target= "_blank" rel=noopener>Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3485130053086!2d-74.03167350000001!3d4.7093831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8555b8f45e6f%3A0xf65f0294d0cff2d!2sUnbosque!5e0!3m2!1ses-419!2sco!4v1706324537479!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
});

//keydown : cuando se presiona una tecla
//keyup: cuando se suelta una tecla
//keypress: cuando se presiona una tecla y no se suelta

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
