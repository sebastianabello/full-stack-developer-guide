//Objeto Date

//Actual
console.log(Date()); //Mon Aug 02 2021 20:00:00 GMT-0500 (hora estandar central)

let fecha = new Date();
console.log(fecha);

//Dia del mes
console.log(fecha.getDate());

//Dia de la semana( 1. lunes 2. martes ....)
console.log(fecha.getDay());

//Mes del año
console.log(fecha.getMonth());

//Milisegundos desde 1970 (timestamp), 1970 porque es el año en el que se creo el lenguaje de programacion JS
console.log(fecha.getTime());

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

//Solo la fecha (lunes/mes/dia/año)
console.log(fecha.toDateString());

//Formato de fecha con hora (mes/dia/año hora)
console.log(fecha.toLocaleString());

//Formato de fecha (mes/dia/año)
console.log(fecha.toLocaleDateString());

//Formato de hora (hora:minuto:segundos)
console.log(fecha.toLocaleTimeString());
