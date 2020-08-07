CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS precio;

CREATE TABLE precio (
  id          INT(11)      NOT NULL AUTO_INCREMENT,
  producto_id INT(11)      DEFAULT NULL,
  costo       INT(11)      NOT NULL,
  venta       INT(11)      NOT NULL,
  masaTipo_id INT(11)      DEFAULT NULL,
  diet        INT(1)       DEFAULT NULL,
  cuadrada    INT(1)       DEFAULT NULL,
  tamano_id   INT(11)      DEFAULT NULL,
  sucursal_id INT(11)      NOT NULL,
  diet        INT(1)       NOT NULL,
  estado      INT(1)       DEFAULT 1,
  createdAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
CREATE OR REPLACE VIEW vw_producto
AS
    SELECT 
        producto.id AS producto_id,
        producto.nombre,
        producto.diet,
        producto.productoTipo_id, productoTipo.nombre AS productoTipo_nombre,
        producto.estado
    FROM producto
    INNER JOIN productoTipo
        ON producto.productoTipo_id = productoTipo.id;
DESCRIBE precioProducto;



