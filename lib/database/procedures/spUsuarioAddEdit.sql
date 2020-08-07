USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditUsuario`;
DELIMITER $$
CREATE PROCEDURE `addOrEditUsuario` (
    IN _id INT(11),
    IN _userName VARCHAR(200),
    IN _password VARCHAR(200))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO usuario (
            userName,
            password)
        VALUES(
            _userName,
            _password
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE usuario
        SET 
            userName = _userName,
            password = _password,
            estado = 1
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
