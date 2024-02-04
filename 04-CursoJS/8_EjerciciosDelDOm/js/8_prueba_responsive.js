const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      //window.open(url, name, specs, replace)
      //name: _blank, _self, _parent, _top, name
      //specs: ancho, alto, left, top, menubar, toolbar, location, resizable, scrollbars
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
