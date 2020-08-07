CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS producto;

CREATE TABLE producto (
  id              INT(11)      NOT NULL AUTO_INCREMENT,
  productoTipo_id INT(11)      NOT NULL,
  nombre          VARCHAR(255) NOT NULL,
  diet            INT(1)       NOT NULL,
  estado          INT(1)       DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE producto ADD UNIQUE productoUnique(productoTipo_id, nombre, diet);
DESCRIBE producto;


