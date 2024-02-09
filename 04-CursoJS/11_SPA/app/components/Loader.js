export function Loader() {
  const d = document,
    $loader = d.createElement("img");

  $loader.src = "app/assets/ball-triangle.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");

  return $loader;
}
