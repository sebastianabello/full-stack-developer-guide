# Reactividad

La reactividad de los datos, simplemente es que la interfaz de usuario de un sitio o aplicación se modifica a los cambios en los datos de la misma.

Cada vez que se actualizan los datos, la interfaz de usuario lo hace automáticamente para que coincida con la lógica de programación de la aplicación.

## Estado

El estado son los datos de tu aplicación.

Entonces, ¿por qué se le llama estado en lugar de datos?

Porque tiene una duración determinada, el estado son datos en un momento particular de la aplicación, por ello decimos: el estado actual de los datos de la aplicación.

## Interfaz basada en el estado

Una interfaz basada en el estado, es aquella que usa los datos de la aplicación en todo momento para pintar su elementos visuales.

Los elementos visuales de la interfaz suelen llamarse componentes.

## Componentes

- Son un fragmento de la interfaz que cumple una única función.
- Son reutilizables ( principio DRY - Don´t Repeat Yourself ).
- Son independientes, tanto de su contexto como del resto de componentes.
- Son autocontenidos, no filtran estilos o funcionalidad a otros componentes.
