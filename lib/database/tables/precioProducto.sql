CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS precioProducto;
CREATE TABLE IF NOT EXISTS precioProducto (
  id          INT(11)      NOT NULL AUTO_INCREMENT,
  producto_id INT(11)      NOT NULL,
  costo       INT(11)      NOT NULL,
  venta       INT(11)      NOT NULL,
  sucursal_id INT(11)      NOT NULL,
  diet        INT(1)       NOT NULL,
  estado      INT(1)       DEFAULT 1,
  createdAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

DESCRIBE precioProducto;



