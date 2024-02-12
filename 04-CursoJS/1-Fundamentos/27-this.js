//This
//es fundamental en JavaScript y se utiliza para referirse al objeto actual en el que se encuentra ejecutándose un fragmento de código. El valor de this depende del contexto en el que se utiliza y puede variar según cómo se invoque una función o método

//📌En funciones regulares:

//.📢En una función regular, el valor de this se determina en tiempo de ejecución, según cómo se invoca la función.
//.📢Si una función se llama como una función normal, this hace referencia al objeto global (en un navegador, generalmente window).
//.📢Si una función se invoca como un método de un objeto, this hace referencia a ese objeto.

const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`); // "Hola, soy Juan"
  },
};

persona.saludar(); // "Hola, soy Juan"

//📌En funciones de flecha:

//📢Las funciones de flecha (=>) no tienen su propio valor de this. En su lugar, toman el valor de this del contexto que las rodea en el que se definen.

const persona1 = {
  nombre: "Ana",
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

persona1.saludar(); // "Hola, soy undefined" (this se refiere al objeto global)

//📌En eventos y callbacks:

//📢En callbacks y eventos, el valor de this puede variar según cómo se configure o llame la función.
//📢Puedes utilizar métodos como bind, call, o apply para especificar explícitamente el valor de this

const boton = document.querySelector("#miBoton");
boton.addEventListener("click", function () {
  console.log(this); // Se refiere al elemento de botón
});

//📌En clases:

//📢En clases de JavaScript, this se utiliza para hacer referencia a instancias de la clase.
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const juan = new Persona("Juan");
juan.saludar(); // "Hola, soy Juan"
