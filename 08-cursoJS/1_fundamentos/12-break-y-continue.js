//Ayudan a controlar el flujo de las estructuras de control por ejemplo cuando estamos en un loop, sirve para romper o saltar segun la condicion

//📌Breack

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//recordar que i indica la posicion de cada elemento del array
for (let i = 0; i < numero.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numero[i]);
}

//📌Continue

for (let i = 0; i < numero.length; i++) {
  //Aqui tener en cuenta que es la poscion del array no el valor
  if (i === 5) {
    continue;
  }
  console.log(numero[i]);
}

for (let i = 0; i < numero.length; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(numero[i]);
}
