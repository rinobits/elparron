CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS sucursal;

CREATE TABLE sucursal (
  id             INT(11)      NOT NULL AUTO_INCREMENT,
  rut            VARCHAR(12)  NOT NULL UNIQUE,
  razonSocial    VARCHAR(60)  NOT NULL,
  giro           VARCHAR(60)  NOT NULL,
  direccion      VARCHAR(120) NOT NULL,
  comuna_id      INT(11)      NOT NULL,
  nombre         VARCHAR(60)  NOT NULL,
  contactoEmail  VARCHAR(60)  NOT NULL,
  contactoNombre VARCHAR(60)  NOT NULL,
  colorFondo     VARCHAR(60)  NOT NULL,
  colorLetra     VARCHAR(60)  NOT NULL,
  estado         INT(2)       DEFAULT 1,
  PRIMARY KEY(id)
);
ALTER TABLE sucursal ADD UNIQUE sucursalUnique(rut, comuna_id);
DESCRIBE sucursal;


