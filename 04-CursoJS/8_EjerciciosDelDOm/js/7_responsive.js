const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  //matchMedia: devuelve un objeto MediaQueryList que representa los resultados de la consulta de medios especificada.
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    //matches: devuelve un Booleano que indica si el documento actual coincide con el objeto MediaQueryList asociado.
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
    // console.log("MQ", breakpoint, e.matches);
  };
  //change: se activa cuando se produce un cambio en el estado de un objeto MediaQueryList.
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
