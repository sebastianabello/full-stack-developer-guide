//📌Arrow Funtion

//Antes para declarar una funcion expresada se hacia asi:
const saludar = function () {};
saludar();

//📢Nueva manera:
//Se quita la palabra function y se agrega una flecha => despues de los parentesis
const saludar1 = () => {
  console.log(`Hola`);
};
saludar();

//📢Con parametros
//👀Cuando una funcion flecha recibe solamente una linea de instucciones ya no es necesario poner los corchetes ({}) pero si recive mas si es obligatorio
//Se vuelve mas expresiva
//Al igual que los parentesis de los parametros se pueden omitir si solo recibe un parametro
const saludar3 = (nombre) => console.log(`Hola ${nombre}`);
saludar3("sebas");

//EJEMPLO:

//Manera vieja:
const sumar = function (a, b) {
  return a + b;
};
console.log(sumar(8, 9));

//Nueva manera:
//Como es una arrow function se auto retorna el valor
const sumar1 = (a, b) => a + b;
console.log(sumar1(8, 10));

//Funcion de varias lineas
const funcionVariasLineas = () => {
  console.log("uno");
  console.log("dos");
  console.log("tres");
};
funcionVariasLineas();

//Con el forEach cambia tambien:
const numero = [1, 2, 3, 4, 5];
/*
numero.forEach(function (el,index){
    console.log(`El elemento ${el} esta en la posicion ${index}`);
})
*/
numero.forEach((el, index) =>
  console.log(`El elemento ${el} esta en la posicion ${index}`)
);

//Mas adelante se explicara sobre el contexto de this pero por ahora un ejemplo ya que las arrow function lo afectan:
//Ejemplo:

function perro() {
  console.log(this);
}
perro(); //En este caso this hace referencia al objeto window

//En este caso this hace referencia al objeto perro1 y no al objeto window
const perro1 = {
  nombre: "Anaia",
  ladrar: function () {
    console.log(this);
  },
};
perro1.ladrar();

//Pero si se cambia a una arrow function this hace referencia al objeto window Las arrow funcion tienen el poder de saltarse el contexto en el que estan
const perro2 = {
  nombre: "Anaia",
  ladrar: () => {
    console.log(this);
  },
};
perro2.ladrar();
