//pasos para realizar una petición AJAX con fetch async await:
// 1. Crear una función asíncrona.
// 2. Dentro de la función, usar la palabra clave await antes de la llamada a fetch.
// 3. Usar la palabra clave try para manejar la respuesta de la petición.
// 4. Usar la palabra clave catch para manejar los errores de la petición.
// 5. Usar la palabra clave finally para ejecutar código independientemente del resultado de la petición.
// 6. Llamar a la función.
// 7. Usar la respuesta.

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      console.log(res, json);

      //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try... catch");
    }
  }
  getData();
})();
