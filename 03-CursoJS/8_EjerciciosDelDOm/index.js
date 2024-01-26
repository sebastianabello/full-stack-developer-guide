import hamburguerMenu from "./js/1_menu_hamburguesa.js";
import { digitalClock, alarm } from "./js/2_reloj.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});
