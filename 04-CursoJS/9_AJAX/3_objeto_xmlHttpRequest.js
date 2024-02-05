//Los pasos para hacer una petición AJAX con el objeto XMLHttpRequest son:
// 1. Crear una instancia del objeto XMLHttpRequest.
// 2. Abrir una conexión.
// 3. Configurar la petición.
// 4. Enviar la petición.
// 5. Recibir la respuesta.
// 6. Usar la respuesta.

(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
  //readystatechange es un evento que se dispara cada vez que el estado de la petición cambia.
  xhr.addEventListener("readystatechange", (e) => {
    //readyState es una propiedad que devuelve el estado de la petición.((Mirar el archivo 2_fundamentos.js)
    if (xhr.readyState !== 4) return;
    //status es una propiedad que devuelve el estado de la petición.
    if (xhr.status >= 200 && xhr.status < 300) {
      //responseText es una propiedad que devuelve la respuesta de datos como una cadena de texto.
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
  // open es un método que inicializa una petición.
  //El primer argumento es el método de la petición (GET, POST, PUT, DELETE, etc).
  //El segundo argumento es la URL a la que se enviará la petición.
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // send es un método que envía la petición.
  xhr.send();
})();
