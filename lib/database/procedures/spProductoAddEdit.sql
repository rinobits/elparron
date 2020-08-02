USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditProducto`;
DELIMITER $$
CREATE PROCEDURE `addOrEditProducto` (
    IN _id              INT(11),
    IN _productoTipo_id INT(11),
    IN _nombre          VARCHAR(200),
    IN _diet            INT(1))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO producto (
		    productoTipo_id,
            nombre,
            diet)
        VALUES(
            _productoTipo_id,
            _nombre,
            _diet);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE producto
        SET 
            productoTipo_id = _productoTipo_id,
            nombre          = _nombre,
            diet            = _diet
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;