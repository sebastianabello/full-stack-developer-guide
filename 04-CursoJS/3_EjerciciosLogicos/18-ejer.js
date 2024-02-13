//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 39 años (en 2024).

const calcularanios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  if (!fecha instanceof Date)
    return console.warn("El valor que ingresaste no es es una fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365; // 1000ms * 60s * 60m * 24h * 365d :
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año ${fecha.getFullYear()}.`);
};

calcularanios();
calcularanios({});
calcularanios(false);
calcularanios(new Date());
calcularanios(new Date(1984, 4, 23));
