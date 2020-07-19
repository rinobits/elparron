CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS masaTipo (
  id     INT(11)      NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  estado INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE masaTipo;

INSERT INTO masaTipo values (
  (1, 'Bizcocho',  1),
  (2, 'Hoja',      1),
  (3, 'Panqueque', 1),
  (4, 'Merengue',  1));
  
SELECT * FROM masaTipo;



