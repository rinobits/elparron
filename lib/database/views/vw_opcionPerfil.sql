CREATE OR REPLACE VIEW vw_opcionPerfil
AS 
    SELECT 
        opcion.id                         AS id,
        opcionPerfil.opcion_id,
        opcion.nombre                     AS opcion_nombre,
        opcion.seccion_id, seccion.nombre AS seccion_nombre,
        opcion.icono,
        perfil_id, perfil.nombre          AS perfil_nombre,
        opcion.estado                     AS estado
    FROM opcionPerfil
        INNER JOIN opcion
            ON opcionPerfil.opcion_id = opcion.id
        INNER JOIN perfil
            ON opcionPerfil.perfil_id = perfil.id
        INNER JOIN seccion opcion
            ON seccion.id = opcion.seccion_id;
