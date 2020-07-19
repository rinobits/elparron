const mysqlConnection = require('../../lib/database/database');

class TortaServices{
    tortaFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM torta`, (err, rows) => {
                if(!err){
                    resolve(rows[0]);
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
            const { masaTipo_id, masaSabor_id, sabor_id } = body;
            const id         = 0;
            const query      = `
                SET @id = ?;
                SET @masaTipo_id = ?;
                SET @masaSabor_id = ?;
                SET @sabor_id = ?;
                CALL addOrEditTorta(@id, @masaTipo_id, @masaSabor_id, @sabor_idw);
            `
            mysqlConnection.query(query, [id, masaTipo_id, masaSabor_id, sabor_id], (err) => {
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
            const { masaTipo_id, masaSabor_id, sabor_id } = body;
            const query = `
                SET @id = ?;
                SET @masaTipo_id = ?;
                SET @masaSabor_id = ?;
                SET @sabor_id = ?;
                CALL addOrEditTorta(@id, @masaTipo_id, @masaSabor_id, @sabor_id);
            `
            mysqlConnection.query(query, [id, masaTipo_id, masaSabor_id, sabor_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    tortaDeleteById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`DELETE FROM torta  WHERE id = ?`, [id], (err, rows, fields) => {
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
