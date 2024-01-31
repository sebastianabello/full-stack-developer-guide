//📌POO (Programacion orientada a objetos)
/*
Clases --Modelo a seguir
objetos --Es una instancia de una clase (como una copia de la clase)
    Atributos -- Es una caracteristica o propiedad  del objeto(son variables dentro de un objeto)
    Metodos --Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto)
*/

//📢Funcion Costructura
//Esto no se hace asi pero se toma de ejemplo, la forma correcta es con clases
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;

  //Metodos
  this.sonar = function () {
    console.log("Hago sonido");
  };
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };
}

const perro = new Animal("Snoopy", "Macho"),
  conejo = new Animal("Lolita", "Hembra");

console.log(perro);
console.log(conejo);

//📌Funcion construtora donde se asigna los metodos al prototipo, no a la funcion como tal.

function Animal2(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}
//Metodos agregados al prototipo de la funcion constuctora
Animal2.prototype.sonar = function () {
  console.log("Hago sonido");
};
Animal2.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

const gato = new Animal2("samuel", "Macho"),
  caballo = new Animal2("chimuelita", "Hembra");

console.log(gato);
console.log(caballo);

gato.sonar();
gato.saludar();
caballo.sonar();
caballo.saludar();

//📌Herencia prototipica

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
//Perro esta herendndo de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Guauu Guauu");
};
