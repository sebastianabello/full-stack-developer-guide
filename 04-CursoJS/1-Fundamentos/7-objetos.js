//Objetos

const b = {};
console.log(b);
const juan = {
  nombre: "sebas",
  apellido: "Abello",
  edad: 19,
  pasatiempo: ["Correr", "Estudiar", "Leer", "Programar"],
  soltero: false,
  contacto: {
    email: "Juanse.abello@gmail.com",
    instagram: "Juanse.abe123",
    celular: "3192323",
  },
  saludar: function () {
    console.log(`Hola`);
  },
  decirMiNombre: function () {
    //la palabra this hace referenfcia al contexto de bloque en el que se le aplique mas adelante se explicara de mejor forma
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  },
};
console.log(juan);

//📢 Dentro de un objeto a las variables se le van a llamar atributos/propiedad y a a las funciones metodos.

//Para acceder a atributo/propiedad:
//forma rara
console.log(juan["nombre"]);

//✔forma mas comun
console.log(juan.apellido); //Abello
console.log(juan.pasatiempo[1]); //Estudiar
console.log(juan.contacto.email); // Juanse.abello@gmail.com

//Para acceder a los metodos:
juan.saludar();
juan.decirMiNombre();

//Para ver que metodos y propiedades/atributos que estan en un objeto se puede usar
console.log(Object.keys(juan));
//Para saber que valor tiene cada propiedad se usa
console.log(Object.values(juan));

//Para verificar si se encutra en el objeto metodos y propiedades se una: hasOwnProperty("...");
//retorna un booleano
console.log(juan.hasOwnProperty("nombre")); //true
console.log(juan.hasOwnProperty("nacimiento")); //false

//faltan
