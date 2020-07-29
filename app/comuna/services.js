const mysqlConnection = require('../../lib/database/database');

class ComunaServices{
    comunaFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM comuna WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
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
                    reject('Not found');
                }
            });
        });
    }
    comunaCreate(body){
        return new Promise((resolve, reject) => {
            const id         = 0;
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                SET @ciudad = ?;
                CALL addOrEditComuna(@id, @nombre, @ciudad);
            `
            mysqlConnection.query(query, [id, body.nombre, body.ciudad], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    comunaUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                SET @ciudad = ?;
                CALL addOrEditComuna(@id, @nombre, @ciudad);
            `
            mysqlConnection.query(query, [id, body.nombre, body.ciudad], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
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
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = ComunaServices;
