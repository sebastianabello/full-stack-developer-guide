//Objetos del BOM
console.log("*******************Objeto URL (location)*******************");
conole.log(location);
//window.location.href - devuelve la URL completa de la página actual
console.log(location.href);
//window.location.hostname - devuelve el nombre de dominio de la dirección web
console.log(location.hostname);
//window.location.pathname - devuelve la ruta y el nombre de archivo de la página actual
console.log(location.pathname);
//window.location.protocol - devuelve el protocolo web utilizado (http: o https:)
console.log(location.protocol);
//window.location.assign - carga una nueva página
location.assign("https://www.google.com/");
//window.location.reload - recarga la página actual
location.reload();
//window.location.replace - reemplaza la página actual por una nueva
location.replace("https://www.google.com/");
//window.location.search - devuelve la parte de consulta de una URL
console.log(location.search);
//window.location.hash - devuelve la parte de anclaje de una URL
console.log(location.hash);
//window.location.port - devuelve el número del puerto de una URL
console.log(location.port);
//window.location.host - devuelve el nombre de host y el número de puerto de una URL
console.log(location.host);
//window.location.origin - devuelve el protocolo, el nombre de host y el número de puerto de una URL
console.log(location.origin);

console.log("*******************Objeto Historial (history)*******************");
console.log(history);
//window.history.back - carga la URL anterior en la lista de historial
history.back();
//window.history.forward - carga la URL siguiente en la lista de historial
history.forward();
//window.history.go - carga una URL específica desde la lista de historial
history.go(1);
//window.history.length - devuelve la longitud del historial del navegador
console.log(history.length);

console.log(
  "*******************Objeto Navegador (navigator)*******************"
);
console.log(navigator);
//window.navigator.appCodeName - devuelve el nombre de código del navegador
console.log(navigator.appCodeName);
//window.navigator.appName - devuelve el nombre del navegador
console.log(navigator.appName);
//window.navigator.appVersion - devuelve la versión del navegador
console.log(navigator.appVersion);
//window.navigator.cookieEnabled - devuelve true si las cookies están habilitadas, de lo contrario, devuelve false
console.log(navigator.cookieEnabled);
//window.navigator.language - devuelve el idioma del navegador
console.log(navigator.language);
//window.navigator.onLine - devuelve true si el navegador está en línea
console.log(navigator.onLine);
//window.navigator.platform - devuelve para qué plataforma está compilado el navegador
console.log(navigator.platform);
//window.navigator.product - devuelve el motor del navegador
console.log(navigator.product);
//window.navigator.userAgent - devuelve el agente de usuario del navegador
console.log(navigator.userAgent);
//window.navigator.geolocation - devuelve la ubicación del usuario
console.log(navigator.geolocation);
//window.navigator.javaEnabled - devuelve true si Java está habilitado
console.log(navigator.javaEnabled());
