CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS tamano (
  id       INT(11)      NOT NULL AUTO_INCREMENT,
  tamano   VARCHAR(100) NOT NULL,
  personas INT(2)       NOT NULL,
  estado   INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE tamano;

INSERT INTO tamano values 
  (1, '1/2', 6, 1),
  (2, '1',   12, 1),
  (3, '2',   18, 1),
  (4, '3',   24, 1),
  (5, '4',   30, 1),
  (6, '5',   40, 1),
  (7, '6',   50, 1);
  
SELECT * FROM tamano;



