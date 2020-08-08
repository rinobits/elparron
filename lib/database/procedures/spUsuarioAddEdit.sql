USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditUsuario`;
DELIMITER $$
CREATE PROCEDURE `addOrEditUsuario` (
    IN _id INT(11),
    IN _userName VARCHAR(200),
    IN _password VARCHAR(200),
    IN _perfil_id INT(11))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO usuario (
            userName,
            password,
            perfil_id)
        VALUES(
            _userName,
            _password,
            _perfil_id
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        IF _password = '' THEN        
            UPDATE usuario
            SET 
                userName  = _userName,
                perfil_id = _perfil_id,
                estado = 1
            WHERE id = _id;
        ELSE
            UPDATE usuario
            SET 
                userName  = _userName,
                password  = _password,
                perfil_id = _perfil_id,
                estado = 1
            WHERE id = _id;
        END IF;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
