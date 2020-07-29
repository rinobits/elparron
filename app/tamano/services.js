const mysqlConnection = require('../../lib/database/database');

class TamanoServices{
    tamanoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM tamano WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
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
                    reject('Not found');
                }
            });
        });
    }
    tamanoCreate(body){
        return new Promise((resolve, reject) => {
            const id    = 0;
            const query = `
                SET @id     = ?;
                SET @tamano = ?;
                SET @personas = ?;
                CALL addOrEditTamano(@id, @tamano, @personas);
            `
            mysqlConnection.query(query, [id, body.tamano, body.personas], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    tamanoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const query = `
                SET @id     = ?;
                SET @tamano = ?;
                SET @personas = ?;
                CALL addOrEditTamano(@id, @tamano, @personas);
            `
            mysqlConnection.query(query, [id, body.tamano, body.personas], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
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
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = TamanoServices;
