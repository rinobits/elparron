CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS usuarioPerfil;
CREATE TABLE usuarioPerfil (
  id         INT(11) NOT NULL AUTO_INCREMENT,
  usuario_id INT(11) NOT NULL,
  perfil_id  INT(11) NOT NULL,
  PRIMARY KEY(id)
);

DESCRIBE usuarioPerfil;


