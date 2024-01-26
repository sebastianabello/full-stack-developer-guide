export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;
  //matches() es un método que se usa para saber si un elemento coincide con un selector CSS
  //matches() devuelve true si el elemento sería seleccionado por el selector especificado; de lo contrario, devuelve false.
  //target es una propiedad de solo lectura de la interfaz Event, que identifica el objetivo del evento.
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
