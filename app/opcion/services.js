const mysqlConnection = require('../../lib/database/database');

class OpcionServices{
    opcionFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM vw_opcionPerfil
                WHERE estado = 1;
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
                SELECT * FROM vw_opcionPerfil
                WHERE id = ?
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
                        SET @icono      = ?;
                        CALL addOrEditOpcion(@id, @nombre, @seccion_id, @icono);
                    `
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, nombre, seccion_id, icono], (err, rows, fields) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, nombre, seccion_id, icono], (err, rows, fields) => {
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
