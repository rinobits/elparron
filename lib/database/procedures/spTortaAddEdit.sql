USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditTorta`;
DELIMITER $$
CREATE PROCEDURE `addOrEditTorta` (
    IN _id INT(11),
    IN _masaTipo_id  VARCHAR(200),
    IN _masaSabor_id VARCHAR(200),
    IN _sabor_id     VARCHAR(200))

BEGIN
    IF _id = 0 THEN
        INSERT	INTO torta (
            masaTipo_id,
            masaSabor_id,
            sabor_id)
        VALUES(
            _masaTipo_id,
            _masaSabor_id,
            _sabor_id
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE torta
        SET 
            masaTipo_id  = _masaTipo_id,
            masaSabor_id = _masaSabor_id,
            sabor_id     = _sabor_id
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
