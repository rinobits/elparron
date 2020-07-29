const mysqlConnection = require('../../lib/database/database');

class MasaTipoServices{
    masaTipoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaTipo WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
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
                    reject('Not found');
                }
            });
        });
    }
    masaTipoCreate(body){
        return new Promise((resolve, reject) => {
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditMasaTipo(@id, @nombre);
            `
            mysqlConnection.query(query, [0, body.nombre], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    masaTipoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const query = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL addOrEditMasaTipo(@id, @nombre);
            `
            mysqlConnection.query(query, [id.id, body.nombre], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
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
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = MasaTipoServices;
