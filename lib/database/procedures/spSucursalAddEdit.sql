USE `parron`;
DROP PROCEDURE IF EXISTS `addOrEditSucursal`;
DELIMITER $$
CREATE PROCEDURE `addOrEditSucursal` (
    IN _id INT(11),
    IN _rut VARCHAR(100),
    IN _razonSocial VARCHAR(100),
    IN _giro VARCHAR(100),
    IN _direccion VARCHAR(100),
    IN _comuna_id VARCHAR(100),
    IN _nombre VARCHAR(100),
    IN _contactoEmail VARCHAR(100),
    IN _contactoNombre VARCHAR(100),
    IN _colorFondo VARCHAR(100),
    IN _colorLetra VARCHAR(100))
BEGIN
    IF _id = 0 THEN
        INSERT	INTO sucursal (
            rut,
            razonSocial,
            giro,
            direccion,
            comuna_id,
            nombre,
            contactoEmail,
            contactoNombre,
            colorFondo,
            colorLetra
            )
        VALUES(
            _rut,
            _razonSocial,
            _giro,
            _direccion,
            _comuna_id,
            _nombre,
            _contactoEmail,
            _contactoNombre,
            _colorFondo,
            _colorLetra
            );
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE sucursal
        SET 
            rut = _rut,
            razonSocial = _razonSocial,
            giro = _giro,
            direccion = _direccion,
            comuna_id = _comuna_id,
            nombre = _nombre,
            contactoEmail = _contactoEmail,
            contactoNombre = _contactoNombre,
            colorFondo = _colorFondo,
            colorLetra = _colorLetra
        WHERE id = _id;
    END IF;
    SELECT _id as id;
END;$$
DELIMITER ;
