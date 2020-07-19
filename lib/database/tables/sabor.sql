CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS sabor (
  id     INT(11)      NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  estado INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE sabor;

INSERT INTO sabor values (
  (1, 'Piña',      1),
  (2, 'Lúcuma',    1),
  (3, 'Nueces',    1),
  (4, 'Frambuesa', 1),
  (5, 'Chocolate', 1),
  (6, 'Manjar',    1),
  (7, 'Vainilla',  1));
  
SELECT * FROM sabor;

