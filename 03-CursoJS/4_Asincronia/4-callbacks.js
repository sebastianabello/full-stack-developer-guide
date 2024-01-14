//📌Callbacks
// las callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan tras un proceso asincrono.

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
          });
        });
      });
    });
  });
});

//Diferencia de callbacks y promesas
//📢Las promesas son especialmente útiles cuando necesitas realizar múltiples operaciones asíncronas y deseas controlar cómo se manejan sus resultados.
//📢Las callbacks son útiles para realizar operaciones asíncronas simples, pero pueden volverse difíciles de manejar cuando se anidan varias de ellas.
//📢Las promesas son más legibles y fáciles de escribir que las callbacks anidadas.
//📢Las promesas son inherentemente seguras contra errores de programación, mientras que las callbacks anidadas no lo son.
//📢Las promesas se pueden encadenar, mientras que las callbacks anidadas no.
//📢Las promesas pueden ser observadas, mientras que las callbacks anidadas no.
//📢Las promesas tienen un rendimiento ligeramente mejor que las callbacks anidadas.
//📢Las promesas tienen un flujo de control más claro que las callbacks anidadas.
//📢Las promesas tienen una sintaxis más limpia que las callbacks anidadas.
//📢Las promesas tienen un manejo de errores más sencillo que las callbacks anidadas.
