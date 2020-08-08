CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS tamano;

CREATE TABLE tamano (
  id       INT(11)      NOT NULL AUTO_INCREMENT,
  num      VARCHAR(100) NOT NULL,
  personas VARCHAR(100) NOT NULL,
  estado   INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE tamano ADD UNIQUE tamanoUnique(num   );

DESCRIBE tamano;

INSERT INTO tamano(id, num, personas, estado) values 
  (1, '1/2', "6 personas", 1),
  (2, '1',   "12 personas", 1),
  (3, '2',   "18 personas", 1),
  (4, '3',   "24 personas", 1),
  (5, '4',   "30 personas", 1),
  (6, '5',   "40 personas", 1),
  (7, '6',   "50 personas", 1);
  
SELECT * FROM tamano;



