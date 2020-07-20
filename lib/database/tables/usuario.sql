CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS usuario (
  id           INT(11)      NOT NULL AUTO_INCREMENT,
  userName     VARCHAR(100) NOT NULL UNIQUE,
  userPassword VARCHAR(100) NOT NULL,
  estado       INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE usuario;


