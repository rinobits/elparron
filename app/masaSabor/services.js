const mysqlConnection = require('../../lib/database');

class MasaSaborServices{
    masaSaborFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaSabor`, (err, rows) => {
                if(!err){
                    resolve(rows[0]);
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
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    masaSaborCreate(body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const id         = 0;
            const query      = `
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
    masaSaborDeleteById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`DELETE FROM masaSabor WHERE id = ?`, [id], (err, rows) => {
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
