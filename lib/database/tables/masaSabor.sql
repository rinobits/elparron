CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS masaSabor;

CREATE TABLE masaSabor (
  id     INT(11)       NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100)  NOT NULL,
  estado INT(2)        DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE masaSabor ADD UNIQUE masaSaborUnique(nombre);
DESCRIBE masaSabor;

INSERT INTO masaSabor (id, nombre) values
  (1, 'Blanco'),
  (2, 'Chocolate'),
  (3, 'Nuez');
  
SELECT * FROM masaSabor;

