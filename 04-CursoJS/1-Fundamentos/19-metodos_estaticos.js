//📌Metodos estaticos
//📢Es aquel que se puede ejecutar sin necesidad de instanciar la clase. una instancia es un objeto que deriva de otro objeto.
//📌Getters y Setters
//📢Es aquel que nos permite establecer y obtener los valores de atributos de nuestra clase.

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Metodos
  sonar() {
    console.log("Hago sonido por que estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //Con el metodo super() se manda a llmar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guauu Guauu");
  }
  //📌📢Metodo statico
  //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase se puede llamar en cualquier momento
  static queEres() {
    console.log(
      "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos"
    );
  }

  ////📌📢Getters y Setters
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

//Invoca el metodo queEres sin instanciar la clase
Perro.queEres();

const eduar = new Animal("Eduar", "Macho"),
  ani = new Perro("Ani", "Hembra", "Mediano");

console.log(eduar);
eduar.sonar();
eduar.saludar();
console.log(ani);
ani.sonar();
ani.saludar();
ani.ladrar();

console.log(ani.getRaza); //undefined
ani.setRaza = "goldenretriver"; //Asigna el valor a la raza
console.log(ani.getRaza); //goldenretriver
