//Clases

//Las clases no tienen parametros por lo que se crea un constructor
//Lo que nos hacen las clase es simplificarnos la escritura es azucar sintactico
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
    //Con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  //Sobreescritura de metodos
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  //Nuevo metodo
  ladrar() {
    console.log("Guauu Guauu");
  }
}

const eduar = new Animal("Eduar", "Macho"),
  ani = new Perro("Ani", "Hembra", "Mediano");

console.log(eduar);
eduar.sonar();
eduar.saludar();
console.log(ani);
ani.sonar();
ani.saludar();
ani.ladrar();
