const mysqlConnection = require('../../lib/database/database');

class ProductoServices{
    productoFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM producto WHERE estado = 1`, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    productoFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM producto WHERE ID = ?`, [id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    productoCreate(body){
        return new Promise((resolve, reject) => {
            const {
                productoTipo_id,
                nombre,
                diet
            } = body;
            const id         = 0;
            const query      = `
                SET @id              = ?;
                SET @productoTipo_id = ?;
                SET @nombre          = ?;
                SET @diet            = ?;
                CALL addOrEditProducto(@id, @productoTipo_id, @nombre, @diet);
            `;
            mysqlConnection.query(query, [id, productoTipo_id, nombre, diet], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    productoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const {
                productoTipo_id,
                nombre,
                diet
            } = body;
            const query      = `
                SET @id              = ?;
                SET @productoTipo_id = ?;
                SET @nombre          = ?;
                SET @diet            = ?;
                CALL addOrEditProducto(@id, @productoTipo_id, @nombre, @diet);
            `;
            mysqlConnection.query(query, [id, productoTipo_id, nombre, diet], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    productoDeleteById(id, body){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE producto SET estado = ? WHERE id = ?`, [body.estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = ProductoServices;
