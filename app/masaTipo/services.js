const mysqlConnection = require('../../lib/database/database');
const { route } = require('../masaSabor/routes');

class MasaTipoServices{
    masaTipoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaTipo WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    masaTipoFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaTipo WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    masaTipoCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            if(!id) id = 0;
            var query = `
                SELECT * FROM masaTipo 
                WHERE id = ?;
            `;
            mysqlConnection.query(`select * from masatipo where nombre = ?`, [body.nombre], (err, row) => {
                if(!err){
                    if(row.length == 0){
                        if(row) id = row.id;
                        mysqlConnection.query(query, [id], (err, row) => {
                            if(!err){
                                query = `
                                    SET @id     = ?;
                                    SET @nombre = ?;
                                    CALL addOrEditMasaTipo(@id, @nombre);
                                `;
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
                    }else{
                        mysqlConnection.query(query, [id], (err, row) => {
                            if(!err){
                                query = `
                                    SET @id     = ?;
                                    SET @nombre = ?;
                                    CALL addOrEditMasaTipo(@id, @nombre);
                                `;
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
                    }
                }else{
                    reject(err);
                }
            })
        });
    }
    masaTipoDeleteById(id){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE masaTipo  SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = MasaTipoServices;
