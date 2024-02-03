//Ciclos (Loops)

//📌while

let contador = 0;

//si no se cumple la condicion no se evalua
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}

//📌 do - while

//Se ejecuta almenos una vez el codigo
do {
  console.log("do " + contador);
  contador++;
} while (contador < 10);

//📌for

for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}

//CON ARRAY
let numeros = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//📢Variantes del FOR:
//for in --> Permite recorrer o iterar las propiedades de un OBJETO

const juan = {
  nombre: "sebastian",
  apellido: "Abello",
  edad: 19,
};
//Un data importante a tener en cuenta es que la notacion del punto (.) no es valido para acceder a las propiedades de un objeto, en su lugar se debe usar la notacion de corchetes ([]).
for (const propiedad in juan) {
  console.log(propiedad);
  console.log(`Key: ${propiedad}, valor: ${juan[propiedad]}`);
}

//for of --> Permite recorrer los elementos que son iterables es decir que permita partirce en pequeños elementos como los areglos; otros casos son objeto, aray, string etc..
//Array:
for (const elementos of numeros) {
  console.log(elementos); //10, 20, 30, 40, 50, 60, 70
}
//String:
let cadena = "Hola sebas";
for (const elementos of cadena) {
  console.log(elementos);
  /*
  H
  o
  l
  a

  s
  e
  b
  a
  s
  */
}
