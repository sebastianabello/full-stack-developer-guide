//Ayudan a controlar el flujo de las estructuras de control por ejemplo cuando estamos en un loop, sirve para romper o saltar segun la condicion

//📌Breack
//break lo que hace es romper el ciclo o la estructura de control en la que se encuentra
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//recordar que i indica la posicion de cada elemento del array
for (let i = 0; i < numero.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numero[i]); // 1 2 3 4 5
}

//📌Continue
//continue lo que hace es saltar la iteracion actual y continuar con la siguiente
for (let i = 0; i < numero.length; i++) {
  //Aqui tener en cuenta que es la poscion del array no el valor
  if (i === 5) {
    continue;
  }
  console.log(numero[i]); // 1 2 3 4 5 7 8 9 0
}

for (let i = 0; i < numero.length; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(numero[i]); // 1 3 5 7 9
}
