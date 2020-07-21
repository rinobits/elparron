USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditProgramacion`;
DELIMITER $$

USE `parron`$$
CREATE PROCEDURE `addOrEditProgramacion` (
    IN _id INT(11),
    IN _dia VARCHAR(10),
    IN _sucursal_id INT(11),
    IN _torta_id INT(11),
    IN _tamano_id INT(11),
    IN _cantidad INT(3))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO programacion (
		    dia,
            sucursal_id,
            torta_id,
            tamano_id,
            cantidad)
        VALUES(
            _dia,
            _sucursal_id,
            _torta_id,
            _tamano_id,
            _cantidad);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE programacion
        SET 
            dia         = _dia,
            sucursal_id = _sucursal_id,
            torta_id    = _torta_id,
            tamano_id   = _tamano_id,
            cantidad    = _cantidad
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
