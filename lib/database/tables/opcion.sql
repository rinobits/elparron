CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS opcion;

CREATE TABLE opcion (
  id          INT(11)      NOT NULL AUTO_INCREMENT,
  nombre      VARCHAR(200) NOT NULL,
  seccion_id  INT(11)      NOT NULL,
  perfil_id   INT(11)      NOT NULL,
  icono       VARCHAR(100) NOT NULL,
  estado      INT(1)       DEFAULT 1,
  createdAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
ALTER TABLE opcion ADD UNIQUE opcionUnique(nombre, seccion_id, perfil_id);

DESCRIBE opcion;