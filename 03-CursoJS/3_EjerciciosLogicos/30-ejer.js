//Escribir un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprima "Fizz" en lugar del número, y para números divisibles por 5 (y no 3), imprima "Buzz" en su lugar.
//Cuando tenga eso funcionando, modifique su programa para imprimir "FizzBuzz", para números que son divisibles por 3 y 5 (y aún imprima "Fizz" o "Buzz" para números divisibles por solo uno de esos).
// (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si lo resuelve, su valor en el mercado laboral acaba de subir).

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
