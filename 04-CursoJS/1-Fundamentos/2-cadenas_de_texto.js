//Cadenas de texto

let nombre = "Juan";
let apellido = "Abello";
let saludo = new String("Hola mundo");
let lorem =
  "    lorem ipsum, dolor sut amet consectetur adipicing elit. Est, et dolutm    ";

console.log(nombre, apellido, saludo);

//🟡Propiedades

//length: Retorna la longitud de un string
console.log(
  //Para saber la longitud de un string usamos length
  nombre.length,
  apellido.length,
  saludo.length
);

//🟡Concatenacion

let saludo2 = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo2);

//Interpolacion de variedad
//Template strings
//Forma mas facil de contatenar
let saludo3 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo3);

let lorem2 = `Esto es un lorem cortico: ${lorem.trim()}`;
console.log(lorem2);
//puede faclitar en la incercion de codigo html por Ejemplo:
let ul = `
    <ul>
        <li>Primavera</li>
        <li>Otoño</li>
        <li>Verano</li>
        <li>Invierno</li>
    </ul>
    `;
console.log(ul);

//🟡Metodos para los string

// CharAt(): Retorna el caracter en la posicion que se le pase
console.log(nombre.charAt(0)); //J

// charCodeAt(): Retorna el codigo ASCII del caracter en la posicion que se le pase
console.log(nombre.charCodeAt(0)); //74

// codePointAt(): Retorna el codigo unicode del caracter en la posicion que se le pase
console.log(nombre.codePointAt(0)); //74

//concat(): Concatena dos o mas strings, es mas lento que el template string
console.log(nombre.concat(" ", apellido)); //Juan Abello

//endsWith(): Evalua si el string termina con la frase que se le pase
console.log(nombre.endsWith("n")); //true

//fromCharCode(): Retorna el caracter que corresponde al codigo ASCII que se le pase
console.log(String.fromCharCode(74)); //J

//formCodePoint(): Retorna el caracter que corresponde al codigo unicode que se le pase
console.log(String.fromCodePoint(74)); //J

//includes(): Evalua si se encuentra la frase en un string, si la encuetra returna true, si no false
console.log(lorem.includes("sut")); //true

//indexOf(): Retorna la posicion de la primera aparicion de la frase que se le pase
console.log(lorem.indexOf("ipsum")); //6

//lastIndexOf(): Retorna la posicion de la ultima aparicion de la frase que se le pase
console.log(lorem.lastIndexOf("et")); //54

//localeCompare(): Compara dos strings y retorna un valor dependiendo de la comparacion
console.log(nombre.localeCompare("Juan")); //0 (iguales)
console.log(nombre.localeCompare("Ana")); //1 (diferentes)

//match(): Retorna un arreglo con las coincidencias de la expresion regular que se le pase
console.log(lorem.match(/et/g)); //["et", "et"]

//matchAll(): Retorna un iterador con las coincidencias de la expresion regular que se le pase
console.log(lorem.matchAll(/et/g)); //StringIterator {}

//padEnd(): Agrega caracteres al final del string hasta que tenga la longitud que se le pase
console.log(nombre.padEnd(10, "123")); //Juan1231231

//padStart(): Agrega caracteres al inicio del string hasta que tenga la longitud que se le pase
console.log(nombre.padStart(10, "123")); //1231231Juan

//repeat(): Repite el string la cantidad de veces que se le pase
console.log(nombre.repeat(3)); //JuanJuanJuan

//replace(): Reemplaza la primera aparicion de la frase que se le pase por la frase que se le pase
console.log(lorem.replace("et", "ET")); //    lorem ipsum, dolor sut amET consectetur adipicing elit. Est, et dolutm

//replaceAll(): Reemplaza todas las apariciones de la frase que se le pase por la frase que se le pase
console.log(lorem.replaceAll("et", "ET")); //    lorem ipsum, dolor sut amET consoctur adipicing elit. Est, ET dolutm

//search(): Ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama y retorna la posición de la primera coincidencia.
console.log(lorem.search(/et/g)); //6

//slice(): Retorna una parte del string dependiendo de los parametros que se le pasen
console.log(lorem.slice(6, 11)); //ipsum
//con negativos
console.log(lorem.slice(-5, -1)); //dolut

//split(): Convierte una cadena de caracteres en un areglo dependiendo el parametro cambia como se separa el areglo
console.log(lorem.split(" ")); //["", "", "", "", "lorem", "ipsum,", "dolor", "sut", "amet", "consectetur", "adipicing", "elit.", "Est,", "et", "dolutm", "", "", "", ""]
console.log(lorem.split(",")); //["    lorem ipsum", " dolor sut amet consectetur adipicing elit. Est", " et dolutm    "]
//numero limitado
console.log(lorem.split(" ", 3)); //["lorem", "ipsum,", "dolor"]

//startsWith(): Evalua si el string empieza con la frase que se le pase
console.log(nombre.startsWith("J")); //true
// si se pasa con un segundo parametro evalua desde la posicion que se le pase
console.log(nombre.startsWith("u", 1)); //true

//substring(): Retorna una parte del string dependiendo de los parametros que se le pasen (no acepta negativos)
console.log(lorem.substring(6, 11)); //ipsum

// toLocaleLowerCase(): Convierte todo el string en minuscula dependiendo el idioma
console.log(nombre.toLocaleLowerCase(`en-US`)); //juan

// toLocaleUpperCase(): Convierte todo el string en mayuscula dependiendo el idioma
console.log(nombre.toLocaleUpperCase(`en-US`)); //JUAN

// toLowerCase(): Convierte todo el string en minuscula
console.log(nombre.toLowerCase()); //juan

// toUpperCase(): Convierte todo el string en mayuscula
console.log(nombre.toUpperCase()); //JUAN

// toString(): Retorna el string, si es un numero lo convierte a string
console.log(nombre.toString()); //Juan
let num = 1;
console.log(num.toString()); //1 (string)

// trim(): Quita los spacios en blanco que estan dentro de una cadena de caracteres del inicio y fin pero no entre
console.log(lorem.trim()); //lorem ipsum, dolor sut amet consectetur adipicing elit. Est, et dolutm

// trimEnd(): Quita los spacios en blanco que estan al final de una cadena de caracteres
console.log(lorem.trimEnd()); //    lorem ipsum, dolor sut amet consectetur adipicing elit. Est, et dolutm

// trimStart(): Quita los spacios en blanco que estan al inicio de una cadena de caracteres
console.log(lorem.trimStart()); //lorem ipsum, dolor sut amet consectetur adipicing elit. Est, et dolutm

// valueOf(): Retorna el valor primitivo del objeto String, si es un numero lo convierte a string
console.log(nombre.valueOf()); //Juan
