const mysqlConnection = require('../../lib/database/database');

class TamanoServices{
    tamanoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM tamano WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    tamanoFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM tamano WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    tamanoCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            if(!id) id = 0;
            var query = `
                SELECT * FROM tamano
                WHERE id = ?
            `
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query = `
                        SET @id     = ?;
                        SET @tamano = ?;
                        SET @personas = ?;
                        CALL addOrEditTamano(@id, @tamano, @personas);
                    `
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, body.tamano, body.personas], (err, rows, fields) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, body.tamano, body.personas], (err, rows, fields) => {
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
    tamanoDeleteById(id, body){
        if(!body) var estado = 0;
        else      var estado = body.estado;
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE tamano SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = TamanoServices;
