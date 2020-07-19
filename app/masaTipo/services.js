const mysqlConnection = require('../../lib/database');

class MasaTipoServices{
    masaTipoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM masaTipo`, (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
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
            const { nombre } = body;
            const id         = 0;
            const query      = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL AddEditMasaTipo(@id, @nombre);
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
    masaTipoUpdateById(body){
        return new Promise((resolve, reject) => {
            const { id, nombre } = body;
            const query = `
                SET @id     = ?;
                SET @nombre = ?;
                CALL AddEditMasaTipo(@id, @nombre);
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
    masaTipoDeleteById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`DELETE FROM masaTipo  WHERE id = ?`, [id], (err, rows, fields) => {
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
