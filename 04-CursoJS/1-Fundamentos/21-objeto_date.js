//Objeto Date

//Actual
console.log(Date());

let fecha = new Date();
console.log(fecha);

//Dia del mes
console.log(fecha.getDate());

//Dia de la semana( 1. lunes 2. martes ....)
console.log(fecha.getDay());

//Mes del año en un arreglo
console.log(fecha.getMonth());

//Año actual
console.log(fecha.getFullYear());

//Hora actual (0-24--> militar)
console.log(fecha.getHours());

//Minuto actual
console.log(fecha.getMinutes());

//Segundos actual
console.log(fecha.getSeconds());

//Milisegundos actual
console.log(fecha.getMilliseconds());

//Solo la fecha
console.log(fecha.toDateString());

//Formato de fecha con hora (mes/dia/año hora)
console.log(fecha.toLocaleString());

//Formato de fecha (mes/dia/año)
console.log(fecha.toLocaleDateString());

//Formato de hora (hora:minuto:segundos)
console.log(fecha.toLocaleTimeString());
