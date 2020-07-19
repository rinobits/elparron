CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS torta (
  id            INT(11) NOT NULL AUTO_INCREMENT,
  masaTipo_id   INT(11) NOT NULL,
  masaSabor_id  INT(11) NOT NULL,
  sabor_id      INT(11) NOT NULL,
  estado        INT(2)  DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE torta;

