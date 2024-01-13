//📌Objetos Literales

let nombre = "Sebas",
  edad = 19;
//SIN caracteristicas de Objetos Literales

const humano = {
  nombre: nombre,
  edad: edad,
  hablar: function () {
    console.log("holi holi");
  },
};
console.log(humano);
humano.hablar();

//📢CON caracteristicas de Objetos Literales
//si las propiedades tienen el mismo nombre que la variable se pone solo una vez js entiene
//los metodos se escriben mas facil omitiendo la palabra function y los dos puntos (:)
const human = {
  nombre,
  edad,
  ocupacion: ["Estudiante", "Programador"],
  hablar() {
    console.log("holi holi holi");
  },
};
console.log(human);
console.log(human.ocupacion[1]);
human.hablar();
