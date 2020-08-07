CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS torta;

CREATE TABLE torta (
  id            INT(11) NOT NULL AUTO_INCREMENT,
  masaTipo_id   INT(11) NOT NULL,
  masaSabor_id  INT(11) NOT NULL,
  sabor_id      INT(11) NOT NULL,
  estado        INT(2)  DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE torta ADD UNIQUE tortaUnique(masaTipo_id, masaSabor_id, sabor_id);
INSERT INTO torta (id, masaTipo_id, masaSabor_id, sabor_id, estado) values
  (1, 1, 1, 1, 1),
  (2, 1, 1, 2, 1),
  (3, 1, 3, 3, 1),
  (4, 1, 1, 4, 1),
  (5, 1, 1, 5, 1),
  (6, 1, 1, 6, 1),
  (7, 2, 1, 5, 1),
  (8, 2, 1, 2, 1),
  (9, 2, 1, 3, 1),
  (10, 2, 1, 7, 1),
  (11, 2, 1, 6, 1),
  (12, 2, 1, 1, 1),
  (13, 2, 1, 4, 1);
  

DESCRIBE torta;

