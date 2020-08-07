CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS comuna;

CREATE TABLE comuna (
  id     INT(11)      NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  estado INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE comuna ADD UNIQUE comunaUnique(nombre, ciudad);
DESCRIBE comuna;


