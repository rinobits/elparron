const mysqlConnection = require('../../lib/database/database');

class PerfilServices{
    perfilFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM perfil WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    perfilFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM perfil WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    perfilCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            if(!id) id = 0;
            var query = `
                SELECT * FROM perfil
                WHERE id = ?
            `
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query = `
                        SET @id     = ?;
                        SET @nombre = ?;
                        CALL addOrEditPerfil(@id, @nombre);
                    `
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, body.nombre], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, body.nombre], (err) => {
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
    perfilDeleteById(id, body){
        if(!body) var estado = 0;
        else      var estado = body.estado;
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE perfil SET estado = ? WHERE id = ?`, [estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = PerfilServices;
