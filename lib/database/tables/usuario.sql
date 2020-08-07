CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
  id           INT(11)      NOT NULL AUTO_INCREMENT,
  userName     VARCHAR(100) NOT NULL UNIQUE,
  password     VARCHAR(100) NOT NULL,
  estado       INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE usuario;


