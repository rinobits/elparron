CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS masaSabor (
  id     INT(11)       NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100)  NOT NULL,
  estado INT(2)        DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE masaSabor;

INSERT INTO masaSabor values (
  (1, 'Blanco',    1),
  (2, 'Chocolate', 1),
  (3, 'Nuez',      1));
  
SELECT * FROM masaSabor;

