USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditMasaTipo`;
DELIMITER $$
CREATE PROCEDURE `addOrEditMasaTipo` (
    IN _id INT(11),
    IN _nombre VARCHAR(200))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO masaTipo (
            nombre)
        VALUES(
            _nombre
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE masaTipo
        SET 
            nombre = _nombre
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
