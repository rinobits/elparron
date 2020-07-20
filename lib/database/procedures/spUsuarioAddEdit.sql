USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditUsuario`;
DELIMITER $$
CREATE PROCEDURE `addOrEditUsuario` (
    IN _id INT(11),
    IN _userName VARCHAR(200),
    IN _userPassword VARCHAR(200))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO usuario (
            userName,
            userPassword)
        VALUES(
            _userName,
            _userPassword
        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE usuario
        SET 
            userName = _userName,
            userPassword = _userPassword
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
