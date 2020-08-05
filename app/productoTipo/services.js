const mysqlConnection = require('../../lib/database/database');

class ProductoTipoServices{
    productoTipoFindAll(){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM productoTipo WHERE estado = 1`
            mysqlConnection.query(query, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    productoTipoFindById(id){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM productoTipo WHERE id  = ?`;
            mysqlConnection.query(query, [id], (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    productoTipoCreate(body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const id         = 0;
            const query      = `
                SET @id              = ?;
                SET @nombre          = ?;
                CALL addOrEditProductoTipo(@id, @nombre);
            `;
            mysqlConnection.query(query, [id, nombre], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    productoTipoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            const query      = `
                SET @id              = ?;
                SET @nombre          = ?;
                CALL addOrEditProductoTipo(@id, @nombre);
            `;
            mysqlConnection.query(query, [id, nombre], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    productoTipoDeleteById(id, body){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE productoTipo SET estado = ? WHERE id = ?`, [body.estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = ProductoTipoServices;
