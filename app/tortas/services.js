const mysqlConnection = require('../../lib/database/database');

class TortaServices{
    tortaFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM torta WHERE estado = 1`, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    tortaFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM torta WHERE ID = ?`, [id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    tortaCreate(body){
        return new Promise((resolve, reject) => {
            const id         = 0;
            const query      = `
                SET @id = ?;
                SET @masaTipo_id = ?;
                SET @masaSabor_id = ?;
                SET @sabor_id = ?;
                CALL addOrEditTorta(@id, @masaTipo_id, @masaSabor_id, @sabor_id);
            `
            mysqlConnection.query(query, [id, body.masaTipo_id, body.masaSabor_id, body.sabor_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    tortaUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const query = `
                SET @id = ?;
                SET @masaTipo_id = ?;
                SET @masaSabor_id = ?;
                SET @sabor_id = ?;
                CALL addOrEditTorta(@id, @masaTipo_id, @masaSabor_id, @sabor_id);
            `;
            mysqlConnection.query(query, [id.id, body.masaTipo_id, body.masaSabor_id, body.sabor_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    tortaDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE torta  SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = TortaServices;
