CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS sabor;
CREATE TABLE sabor (
  id     INT(11)      NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  estado INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE sabor ADD UNIQUE saborUnique(nombre);
DESCRIBE sabor;

INSERT INTO sabor (id, nombre) values
  (1, 'Piña'),
  (2, 'Lúcuma'),
  (3, 'Nueces'),
  (4, 'Frambuesa'),
  (5, 'Chocolate'),
  (6, 'Manjar'),
  (7, 'Vainilla');
  
SELECT * FROM sabor;

