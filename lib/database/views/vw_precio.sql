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