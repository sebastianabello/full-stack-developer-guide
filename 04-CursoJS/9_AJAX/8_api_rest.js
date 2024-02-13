//API Rest: Una API (Application Programming Interface), o Interfaz de Programación de Aplicaciones, es un conjunto de rutinas que provee acceso a funciones de un determinado software.
//Las API Rest son un conjunto de reglas (de arquitectura) y métodos (de transferencia de datos) que permiten la creación de servicios web.
//Las API Rest, se basan en el protocolo HTTP, para la transferencia de datos, y en el formato JSON, para el formato de los mismos.
//Las API Rest, son muy utilizadas en el desarrollo de aplicaciones web, debido a que son independientes del lenguaje de programación que se utilice.
//Las API Rest, permiten realizar peticiones a otros servicios, y que estos servicios realicen peticiones a nuestra aplicación.
//Las API Rest, permiten crear aplicaciones web escalables, debido a que se pueden crear diferentes servicios para diferentes tareas.
//Las API Rest, permiten crear aplicaciones web rápidas, debido a que no consumen muchos recursos del servidor.
//Las API Rest, permiten crear aplicaciones web seguras, debido a que se pueden crear diferentes servicios con diferentes niveles de seguridad.
//Las API Rest, permiten crear aplicaciones web con alta disponibilidad, debido a que se pueden crear diferentes servicios para diferentes tareas.

//Dentro de los navegadores web tenemos 2 tipos de APIs:

//APIs nativas, como el DOM que es el API que nos permite acceder al código HTML de nuestros documentos a través de JavaScript o la de Geolocalización que no permite acceder a las coordendas terrestres de nuestra ubicación actual; y,
//APIs externas, como la de Twitter que nos permite obtener los últimos tweets de un usuario, o la de GitHub que nos permite obtener la información de los repositorios de una cuenta o como la API de WordPress que nos permite acceder a la información de páginas y entradas de un sitio.

//REST SIGNIFICA: Representational State Transfer
//Un servicio REST es un conjunto de restricciones con las que podemos crear un estilo de arquitectura de software, la cual podremos usar para crear aplicaciones web respetando el protocolo HTTP.

//Las restricciones que debemos seguir para crear un servicio REST son las siguientes:

//Cliente-Servidor: esta restricción mantiene al cliente y al servidor débilmente acoplados. Esto quiere decir que el cliente no necesita conocer los detalles de implementación del servidor y el servidor se olvida de entender cómo son usados los datos que envía al cliente.
//Sin Estado: significa que cada petición recibida por el servidor debería ser independiente, es decir, no es necesario mantener sesiones.
//Cacheable: las respuestas del servidor deben definir si son o no cacheables. Esto quiere decir que la respuesta debe ser explícita para que el cliente pueda almacenarla y reusarla posteriormente.
//Interfaz Uniforme: significa que la interfaz entre el cliente y el servidor debe ser la misma para todas las peticiones que se realicen. De esta manera, se simplifica y se hace más visible la arquitectura de la aplicación.
//Sistema con capas: el cliente no puede saber si se está comunicando directamente con el servidor o con intermediarios. Esto quiere decir que, si en algún momento se necesita agregar un intermediario, el cliente no se verá afectado.
