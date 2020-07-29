const mysqlConnection = require('../../lib/database/database');

class MasaSaborServices{
    masaSaborFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaSabor WHERE estado = 1`, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
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
                    reject('Not found');
                }
            });
        });
    }
    masaSaborCreate(body){
        return new Promise((resolve, reject) => {
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditMasaSabor(@id, @nombre);
            `
            mysqlConnection.query(query, [0, body.nombre], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    masaSaborUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const query = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditMasaSabor(@id, @nombre);
            `
            mysqlConnection.query(query, [id, nombre], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    masaSaborDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE masaSabor  SET estado = 0 WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = MasaSaborServices;
