const mysqlConnection = require('../../lib/database/database');

class MasaSaborServices{
    masaSaborFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaSabor WHERE estado = 1`, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    masaSaborFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaSabor WHERE ID = ?`, [id], (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }
    masaSaborCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            if(!id) id = 0;
            var query = `
                SELECT * FROM masaSabor
                WHERE id = ?;
            `;
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query = `
                        SET @id     = ?;
                        SET @nombre = ?;
                        CALL addOrEditMasaSabor(@id, @nombre);
                    `;
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, nombre], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, nombre], (err) => {
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
    masaSaborDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE masaSabor SET estado = ? WHERE id = ?`, [estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = MasaSaborServices;
