//Pasos para usar Axios con async await:
// 1. Importar la librería.
// 2. Crear una función asíncrona.
// 3. Dentro de la función, usar la palabra clave await antes de la llamada a axios.
// 4. Usar la palabra clave try para manejar la respuesta de la petición.
// 5. Usar la palabra clave catch para manejar los errores de la petición.
// 6. Usar la palabra clave finally para ejecutar código independientemente del resultado de la petición.
// 7. Llamar a la función.
// 8. Usar la respuesta.

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();
