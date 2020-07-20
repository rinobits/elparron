USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditComuna`;
DELIMITER $$
CREATE PROCEDURE `addOrEditComuna` (
    IN _id INT(11),
    IN _nombre VARCHAR(200),
    IN _ciudad VARCHAR(200))

BEGIN
    IF _id = 0 THEN
        INSERT	INTO comuna (
		    nombre,
            ciudad)
        VALUES(
            _nombre,
            _ciudad);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE comuna
        SET 
            nombre = _nombre,
            ciudad = _ciudad
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;