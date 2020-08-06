const mysqlConnection = require('../../lib/database/database');

class ComunaServices{
    comunaFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM comuna WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    comunaFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM comuna WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    comunaCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            if(!id) id = 0;
            var query  = `
                SELECT * FROM comuna
                WHERE id = ?
            `;
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query      = `
                        SET @id     = ?;
                        SET @nombre = ?;
                        SET @ciudad = ?;
                        CALL addOrEditComuna(@id, @nombre, @ciudad);
                    `;
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, body.nombre, body.ciudad], (err, rows, fields) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, body.nombre, body.ciudad], (err, rows, fields) => {
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
            })
        });
    }
    comunaDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE comuna  SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = ComunaServices;
