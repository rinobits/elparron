CREATE OR REPLACE VIEW vw_usuarioPerfil
AS
    SELECT
        usuario.id        AS usuario_id,
        usuarioPerfil.id,
        usuarioPerfil.usuario_id,
        usuario.userName  AS usuario_userName, 
        usuario.createdAt AS usuario_creadoEl,
        usuarioPerfil.perfil_id,
        perfil.nombre     AS perfil_nombre,
        usuario.estado    AS estado
    FROM opcionPerfil
        INNER JOIN usuario
            ON usuarioPerfil.usuario_id = usuario.id
        INNER JOIN perfil
            ON usuarioPerfil.perfil_id  = perfil.id;