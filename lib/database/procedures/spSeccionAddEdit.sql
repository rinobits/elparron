USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditSeccion`;
DELIMITER $$
CREATE PROCEDURE `addOrEditSeccion` (
    IN _id INT(11),
    IN _nombre VARCHAR(200))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO seccion (
            nombre)
        VALUES(
            _nombre
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE seccion
        SET 
            nombre = _nombre
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
