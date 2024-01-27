const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  //matchMedia: devuelve un objeto MediaQueryList que representa los resultados de la consulta de medios especificada.
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
    console.log("MQ", breakpoint, e.matches);
  };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
