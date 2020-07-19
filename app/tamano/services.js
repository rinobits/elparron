const mysqlConnection = require('../../lib/database/database');

class TamanoServices{
    tamanoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM tamano`, (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
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
            const { nombre } = body;
            const id         = 0;
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditTamano(@id, @nombre);
            `
            mysqlConnection.query(query, [id, nombre], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    tamanoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const query = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditTamano(@id, @nombre);
            `
            mysqlConnection.query(query, [id, nombre], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    tamanoDeleteById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`DELETE FROM tamano  WHERE id = ?`, [id], (err, rows, fields) => {
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
