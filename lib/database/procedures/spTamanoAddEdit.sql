USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditTamano`;
DELIMITER $$
CREATE PROCEDURE `addOrEditTamano` (
    IN _id INT(11),
    IN _tamano VARCHAR(200),
    IN _personas VARCHAR(200))

BEGIN
    IF _id = 0 THEN
        INSERT	INTO tamano (
            tamano,
            personas
            )
        VALUES(
            _tamano,
            _personas
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE tamano
        SET 
            tamano = _tamano,
            personas = _personas
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
