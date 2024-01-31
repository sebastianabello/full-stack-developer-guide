//Asincronia
//La programación asíncrona es una técnica que permite a tu programa iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta

console.log("Inicio");
setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
}, 2000);

/*
setInterval(()=> {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
},5000)
*/

/*
setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000)
*/

//📌Romper un setIntervale
let temporalizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporalizador);
console.log("Despues del clear clearInterval");
