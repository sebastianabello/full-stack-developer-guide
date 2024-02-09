# Single Page Application

Una SPA o Aplicación de una Sola Página es una web que todo su contenido carga una sola vez, es decir, tu navegador descarga un sólo archivo html con todos los recursos y dependencias que necesite para funcionar: estilos, scripts, imágenes, fuentes, etc.

Una vez que carga todo el contenido de la aplicación la navegación de esta suele ser muy rápida y fluida, pues el contenido ya ha sido previamente cargado y sólo estamos intercambiando contenido a través de las interacciones del usuario.

Dependiendo de la complejidad y robustez de la aplicación también podría cargarse contenido de forma dinámica sin la necesidad de recargar la página y sí, como seguramente lo estas pensando esto se hace mediante peticiones asíncronas con AJAX de tal manera que sólo se tiene que cargar el nuevo contenido.

En una SPA tenemos vistas, NO páginas. Las vistas son las diferentes secciones o apartados de contenido que tiene la aplicación y al no tener que cambiar de ruta para acceder al contenido, la carga suele ser muy rápida.

## el SEO en una SPA

la mayoria del contenido de una SPA se carga de forma dinámica, por lo que los mecanismos que tienen los buscadores para analizar el código HTML de las urls prácticamente son inservibles, pues en su mayoría, las SPAs tienen un sólo tag HTML vacío con un nombre de identificador y mediante JavaScript, el contenido es cargado asíncronamente a dicho tag.
Por lo anterior el código HTML de nuestra SPA estaría vacío ante los rastreadores de los buscadores, encargados de posicionar el contenido en la web

### Ventajas de una SPA

- La velocidad de carga es muy rápida.
- La navegación es muy rápida y fluida.
- La experiencia de usuario es muy buena.

### Desventajas de una SPA

- El SEO puede verse afectado.
- La primera carga puede ser lenta.
- El rendimiento puede verse afectado en dispositivos con poca memoria RAM.
- El uso de memoria RAM es mayor.
- El desarrollo es más complejo.
- El mantenimiento es más complejo.
- El código es más complejo.
