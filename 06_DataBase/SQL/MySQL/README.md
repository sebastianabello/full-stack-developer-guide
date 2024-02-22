# MySQL

## Comandos

- Mostra toda las bases de datos  
SHOW DATABASES;
- Crear base de datos  
CREATE DATABASE curso_sql;
- Eliminar base de datos  
DROP DATABASE curso_sql;

- Se puede colocar condicionales para que evitar errores  
- Crear base de datos (nombre) si no existe  
CREATE DATABASE IF NOT EXISTS curso_sql;
- borrar base de datos (nombre) si existe  
DROP DATABASE IF EXISTS curso_sql;

### Usuarios

- Creacion de un usuario  
CREATE USER 'sebastian'@'localhost' IDENTIFIED BY '1234';

#### Para asignarle permisos  
- Para darle todos los privilegios
GRANT ALL PRIVILEGES ON para_sebas TO 'sebastian'@'localhost';  

Cuando uno se esta conectando en un servidor remotamente losprivilegios no se ven en automatico, entonces cuando se vaya asignar privilegios o quitarlos, por buena practica usar FlUSH PRIVILEGES, lo que hace es actualizar sin necesidad tenga que actualizar en otra terminal consumiendo el servidor.  
FLUSH PRIVILEGES;

- Para ver los privilegios en un usuario  
SHOW GRANTS FOR 'sebastian'@'localhost';

- Para quitar todos los privilegios de un usuario  
REVOKE ALL, GRANT OPTION FROM 'sebastian'@'localhost';

- Para eliminar un usuario  
DROP USER 'sebastian'@'localhost';

### Usar base de datos:

- para empezar a usar una base de datos usamos  
USE nombre_DB;

- Para ver las tablas que contiene una base de datos usamos  
SHOW TABLES;

- Para describir una base da datos usamos, saber lo que esta dentro de una tabla  
DESCRIBE nombre_tabla;

- Para crear una tabla, dentro de los parentesis se coloca los atributos  
CREATE TABLE usuarios(
nombre VARCHAR(50),
correo VARCHAR(50)
);

### Modificar tabla:

- Añadir una columna  
ALTER TABLE usuarios ADD COLUMN cumpleañso VARCHAR(15);
- Modificar la columna  
ALTER TABLE usuarios MODIFY cumpleañso DATE;
- Renombrar la columna  
ALTER TABLE usuarios RENAME COLUMN cumpleañso TO nacimiento;
- Borrar una columna  
ALTER TABLE usuarios DROP COLUMN nacimiento;

### Borrar una tabla:

DROP TABLE usuarios;

### Atributos en los campos de una tabla:

- UNSIGNED: significa que va ser un numero pero sin signo  
- AUTO_INCREMENT: valor auto incremental  
- NOT NULL: indica que un campo no puede ir vacio  
- PRIMARY KEY: indica que va ser un unico identificador  
- UNIQUE: valor unico en la base de datos  
- DEFAULT: si no se ingresa un valor, pone el valor por defecto  
CREATE TABLE usuarios(
usuario_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
apellidos VARCHAR(30) NOT NULL,
correo VARCHAR(50) UNIQUE,
dirrecion VARCHAR(100) DEFAULT "Sin direccion",
edad INT DEFAULT 0
);

### OPERACION DE CRUD

#### SENTENCIA INSERT:
- Para insertar datos a la tabla existen 4 formas:
- 1:
INSERT INTO usuarios VALUES (0,"Sebas","Abello","jsebas@gmail.com","cra12#14",20);
- 2:
INSERT INTO usuarios (nombre, apellidos, edad) VALUES ("Juan", "Urueña", 21);
- 3:
INSERT INTO usuarios SET nombre = "David", apellidos = "Vanegaz";
- 4:
INSERT INTO usuarios (nombre, apellidos, edad) VALUES
("Miryam", "Abelo", 46),
("Sofia", "Gutierrez", 19),
("Herly", "Urueña", 72);

#### SENTENCIA SELECT: Para leer datos
- todos los campos de la tabla
SELECT _ FROM usuarios;
- Los campos que uno requiera
SELECT nombre, edad, usuario_id FROM usuarios;
- Se puede usar con funciones tambien, por ejemplo para saber la cantidad de usuarios registrados
SELECT COUNT(_) FROM usuarios;
- se le puede dar un alias para ser mas descriptivos en el nombre de la tabla:
SELECT COUNT(\*) AS total_usuarios FROM usuarios;

#### Clausula WHERE y WHERE IN
SELECT * FROM usuarios WHERE nombre = "Juan";
SELECT * FROM usuarios WHERE nombre IN ("Juan","Miryam");
SELECT * FROM usuarios WHERE edad IN (19,46);

#### SENTENCIA UPDATE:
-- Actualizar
-- toda sentencia update debe tener un where
UPDATE usuarios SET correo = "miry@hotmal.com", dirrecion = "Direccion MIRYAM" WHERE usuario_id = 5;

#### SENTENCIA DELETE
DELETE FROM usuarios WHERE usuario_id = 7;

#### SENTENCIA TRUNCATE
- es parecido al delete, pero con la diferencia que truncate borra tambien en la cache, diagamos cuando se tenia los auto incrementales, si se borran los que estan y se le agregan nuevos, el auto incremental no va inicar en 0 va iniciar desde el ultimo numero asi haya borrado.  
 TRUNCATE TABLE usuarios;


### OPERADORES:

#### Operador LIKE
- sirve para buscar, como un tipo de comodin o expresion regular  
- a% indica que tiene que inciar con lo que se le indique, y lo que le sigue no ignora  
SELECT _ FROM usuarios WHERE apellidos LIKE 'A%';

- %a indica que tiene que terminar con lo que se le indique, y lo que esta antes lo ignora  
SELECT _ FROM usuarios WHERE correo LIKE '%.com';

- %a% indica que tiene que tener dentro lo le indique, y lo que esta fuera lo ignora  
SELECT \* FROM usuarios WHERE apellidos LIKE '%ru%';

#### Operador NOT LIKE:
SELECT _ FROM usuarios WHERE apellidos NOT LIKE '%ru%';
SELECT _ FROM usuarios WHERE correo NOT LIKE '%.com';
SELECT \* FROM usuarios WHERE apellidos NOT LIKE 'A%';

#### Operadores relacionales:
- = : lo que sea igual  
SELECT _ FROM usuarios WHERE edad = 20;
- != o <> :lo que no sea igual  
SELECT _ FROM usuarios WHERE edad != 20;
SELECT _ FROM usuarios WHERE edad <> 20;
- > : mayor que  
SELECT _ FROM usuarios WHERE edad > 45;
- < : menor que  
SELECT _ FROM usuarios WHERE edad < 45;
- >= : mayor o igual que  
SELECT _ FROM usuarios WHERE edad >= 45;
- <= : mayor o igual que  
SELECT \* FROM usuarios WHERE edad <= 46;

#### Operadores logicos:
- NOT: niega  
SELECT _ FROM usuarios WHERE NOT dirrecion = "Sin direccion";
- AND: se tienen que complir las dos condiciones para mostrarse  
SELECT _ FROM usuarios WHERE NOT dirrecion = "Sin direccion" AND edad >= 20;
- OR: con que una condicion se cumpla lo muestra  
SELECT \* FROM usuarios WHERE NOT dirrecion = "Sin direccion" OR edad >= 20;
