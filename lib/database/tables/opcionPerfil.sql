CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS opcionPerfil;

CREATE TABLE opcionPerfil (
  id        INT(11) NOT NULL AUTO_INCREMENT,
  opcion_id INT(11) NOT NULL,
  perfil_id INT(11) NOT NULL,
  PRIMARY KEY(id)
);