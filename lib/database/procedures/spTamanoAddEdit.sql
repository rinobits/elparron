USE `parron`$$
CREATE PROCEDURE `addOrEditDia` (
    IN _id INT(11),
    IN _nombre VARCHAR(200),
    IN _comuna VARCHAR(200))

BEGIN
    IF _id = 0 THEN
        INSERT	INTO pedidos (

        VALUES(

        );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE pedidos
        SET 
            
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
