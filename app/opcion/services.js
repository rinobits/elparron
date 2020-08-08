const mysqlConnection = require('../../lib/database/database');

class OpcionServices{
    opcionFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    opcion.id                         AS opcion_id,
                    opcion.nombre                     AS opcion_nombre,
                    opcion.seccion_id, seccion.nombre AS seccion_nombre,
                    opcion.icono,
                    perfil.id                         AS perfil_id,
                    perfil.nombre                     AS perfil_nombre,
                    opcion.estado                     AS estado
                FROM opcion
                    INNER JOIN perfil
                        ON opcion.perfil_id = perfil.id
                    INNER JOIN seccion
                        ON seccion.id = opcion.seccion_id
                WHERE opcion.estado = 1;
            `;
            mysqlConnection.query(query, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    opcionFindById(id){
        return new Promise((resolve, reject) => {
            const query = `
            SELECT 
                opcion.id AS opcion_id,
                opcion.nombre                     AS opcion_nombre,
                opcion.seccion_id, seccion.nombre AS seccion_nombre,
                opcion.icono,
                perfil.id                         AS perfil_id,
                perfil.nombre                     AS perfil_nombre,
                opcion.estado                     AS estado
            FROM opcion
                INNER JOIN perfil
                    ON opcion.perfil_id = perfil.id
                INNER JOIN seccion
                    ON seccion.id = opcion.seccion_id
            WHERE opcion.id = ?;
            `;
            mysqlConnection.query(query, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    opcionCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            if(!id) id = 0;
            const {
                nombre,
                seccion_id,
                perfil_id,
                icono
            } = body;
            var query = `
                SELECT * FROM opcion
                WHERE id = ?;
            `
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query = `
                        SET @id         = ?;
                        SET @nombre     = ?;
                        SET @seccion_id = ?;
                        SET @perfil_id  = ?;
                        SET @icono      = ?;
                        CALL addOrEditOpcion(@id, @nombre, @seccion_id, @perfil_id, @icono);
                    `
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, nombre, seccion_id, perfil_id, icono], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, nombre, seccion_id, perfil_id, icono], (err, rows, fields) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }
                }else{
                    reject(err);
                }
            });
        });
    }
    opcionDeleteById(id, body){
        if(!body) var estado = 0;
        else      var estado = body.estado;
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE opcion SET estado = ? WHERE id = ?`, [estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = OpcionServices;
