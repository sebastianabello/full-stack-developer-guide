//Condicionales

//📌if-else --> Dos condiciones

let edad = 17;
//Tener presente mucho la condicion y la logica de la condición.

//Caso 1:
if (edad > 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
//Caso 2:
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
//Caso 3:
if (edad <= 17) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

//📌 if-else if- else --> Mas de dos condiciones

//EJEMPLO:
let hora = 22;

if (hora >= 0 && hora < 6) {
  console.log("Dejame dormir");
} else if (hora < 12) {
  console.log("Buenos dias");
} else if (hora < 19) {
  console.log("Buenas tarder");
} else {
  console.log("Buenas noches");
}

//📌Operador ternario
//Simplifica if-else

//variable = (condicion)? verdadero:falso;

let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

//📌switch - case

let dia = 2;

switch (dia) {
  case 0:
    console.log("Lunes");
    break;
  case 1:
    console.log("Martes");
    break;
  case 2:
    console.log("Miercoles");
    break;
  case 3:
    console.log("Jueves");
    break;
  case 4:
    console.log("Viernes");
    break;
  case 5:
    console.log("Sabado");
    break;
  case 6:
    console.log("Domingo");
    break;

  default:
    console.log("Dia invalido");
    break;
}
