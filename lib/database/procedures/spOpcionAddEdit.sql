USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditOpcion`;
DELIMITER $$
CREATE PROCEDURE `addOrEditOpcion` (
    IN _id INT(11),
    IN _nombre VARCHAR(200),
    IN _seccion_id INT(11),
    IN _perfil_id  INT(11),
    IN _icono VARCHAR(100))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO opcion (
            nombre,
            seccion_id,
            perfil_id,
            icono)
        VALUES(
            _nombre,
            _seccion_id,
            _perfil_id,
            _icono
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE opcion
        SET 
            nombre     = _nombre,
            seccion_id = _seccion_id,
            perfil_id  = _perfil_id,
            icono      = _icono
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
