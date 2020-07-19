CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS masaTipo (
  id     INT(11)      NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  estado INT(1)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE masaTipo;

INSERT INTO masaTipo (id, nombre) values 
  (1, 'Bizcocho'),
  (2, 'Hoja' ),
  (3, 'Panqueque'),
  (4, 'Merengue');
  
SELECT * FROM masaTipo;



