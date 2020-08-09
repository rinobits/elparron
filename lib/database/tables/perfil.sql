CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS perfil;

CREATE TABLE perfil (
  id          INT(11)      NOT NULL AUTO_INCREMENT,
  nombre      VARCHAR(200) NOT NULL,
  estado      INT(1)       DEFAULT 1,
  createdAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

ALTER TABLE perfil ADD UNIQUE perfilUnique(nombre);

DESCRIBE perfil;
