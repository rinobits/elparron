const mysqlConnection = require('../../lib/database/database');

class SaborServices{
    saborFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM sabor WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    saborFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM sabor WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    saborCreate(body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const id         = 0;
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditSabor(@id, @nombre);
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
    saborUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const query = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditSabor(@id, @nombre);
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
    saborDeleteById(id){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE sabor SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = SaborServices;
