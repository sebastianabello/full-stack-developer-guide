const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    $id.innerHTML = `
    <p>Tu posicion actual es:</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precision: <b>${coords.accuracy}</b>metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},10z" target="_blank">Ver en google Maps</a>
    `;
    console.log(position);
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(err);
  };

  //getCurrentPosition: obtiene la ubicacion actual del usuario
  //recibe 3 parametros: success, error, options
  //success: funcion que se ejecuta si se obtiene la ubicacion
  //error: funcion que se ejecuta si no se obtiene la ubicacion
  //options: objeto que contiene las opciones de la peticion
  n.geolocation.getCurrentPosition(success, error, options);
}
