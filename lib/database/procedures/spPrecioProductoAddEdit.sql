USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditPrecioProducto`;
DELIMITER $$
CREATE PROCEDURE `addOrEditPrecioProducto` (
    IN _id          INT(11),
    IN _producto_id INT(11),
    IN _diet        INT(1),
    IN _costo       INT(11),
    IN _venta       INT(11),
    IN _sucursal_id INT(11))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO precio (
                producto_id,
                diet,
                costo,
                venta,
                sucursal_id
        )
        VALUES(
                _producto_id,
                _diet,
                _costo,
                _venta,
                _sucursal_id
             );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE precio
        SET 
            producto_id = _producto_id,
            diet        = _diet,
            costo       = _costo,
            venta       = _venta,
            sucursal_id = _sucursal_id,
            updatedAt   = CURRENT_TIMESTAMP
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
