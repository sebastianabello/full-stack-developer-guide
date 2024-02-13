// Pasos para usar Fetch
// 1. Crear una instancia del objeto Fetch.
// 2. Configurar la petición.
// 3. Enviar la petición.
// 4. Recibir la respuesta.
// 5. Usar la respuesta.
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //fetch("assets/users.json")
  //fetch() recibe como argumento la URL a la que se enviará la petición, tambien puede recibir un objeto de configuración.
  //el objeto de configuracion tiene: method, headers, body, mode, cache, credentials, redirect, referrer, referrerPolicy, integrity, keepalive, signal
  fetch("https://jsonplaceholder.typicode.com/users")
    //ok es una propiedad que devuelve un valor booleano que indica si la petición fue exitosa.
    //json es un método que devuelve una promesa que resuelve con el resultado de analizar el cuerpo de la respuesta como JSON.
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      console.log(
        "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
      );
    });
})();
