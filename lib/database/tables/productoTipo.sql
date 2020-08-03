CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS productoTipo;

CREATE TABLE IF NOT EXISTS productoTipo (
  id              INT(11)      NOT NULL AUTO_INCREMENT,
  nombre          VARCHAR(255) NOT NULL,
  estado          INT(1)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE productoTipo;


