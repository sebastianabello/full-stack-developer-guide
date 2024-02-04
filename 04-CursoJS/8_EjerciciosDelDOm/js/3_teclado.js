const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    //getBoundingClientRect(): devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  // console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        //preventDefault(): cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(e.altKey);
  // console.log(e.shiftKey);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}
