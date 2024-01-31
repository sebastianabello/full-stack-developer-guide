//Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
//#
//##
//###
//####
//#####
//######
//#######
//Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo .length después de ella.

let text = "#";
while (text.length < 8) {
  console.log(text);
  text += "#";
}
