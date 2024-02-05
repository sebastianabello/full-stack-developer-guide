//Pasos para usar Axios:
// 1. Importar la librería.
// 2. Usar la librería.
// 3. Usar la respuesta.
// 4. Usar la palabra clave catch para manejar los errores de la petición.
// 5. Usar la palabra clave finally para ejecutar código independientemente del resultado de la petición.
// 6. Usar la palabra clave then para manejar la respuesta de la petición.

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  axios
    //.get("assets/users.json")
    .get("https://jsonplaceholder.typicode.com/users")
    //en res se almacena la respuesta de la petición.
    .then((res) => {
      console.log(res);
      //res.data es una propiedad que devuelve la respuesta de datos como un objeto.
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Esto se ejecutará independientemente del resultado Axios");
    });
})();
