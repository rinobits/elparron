USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditPrecioTorta`;
DELIMITER $$
CREATE PROCEDURE `addOrEditPrecioTorta` (
    IN _id          INT(11),
    IN _tamano_id   INT(11),
    IN _masaTipo_id INT(11),
    IN _diet        INT(1),
    IN _cuadrada    INT(11),
    IN _costo       INT(11),
    IN _venta       INT(11),
    IN _sucursal_id INT(11))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO precio (
            tamano_id,
            masaTipo_id,
            diet,
            cuadrada,
            costo,
            venta,
            sucursal_id
        )
        VALUES(
            _tamano_id,
            _masaTipo_id,
            _diet,
            _cuadrada,
            _costo,
            _venta,
            _sucursal_id
             );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE precio
        SET 
            tamano_id   = _tamano_id,
            masaTipo_id = _masaTipo_id,
            diet        = _diet,
            cuadrada    = _cuadrada,
            costo       = _costo,
            venta       = _venta,
            sucursal_id = _sucursal_id,
            updatedAt   = CURRENT_TIMESTAMP
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
