const mysqlConnection = require('../../lib/database/database');

class ProductoServices{
    productoFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    producto.id, producto.nombre, producto.diet, producto.productoTipo_id,
                    productoTipo.nombre AS productoTipo_nombre, productoTipo.id AS productoTipo_id
                FROM producto INNER JOIN productoTipo
                    ON producto.productoTipo_id = productoTipo.id
                    AND producto.estado = 1
                    AND productoTipo.estado = 1;
            `
            mysqlConnection.query(query, (err, rows) => {
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
            const query = `
                SELECT
                    producto.id, producto.nombre, producto.diet, producto.productoTipo_id,
                    productoTipo.nombre AS productoTipo_nombre, productoTipo.id AS productoTipo_id
                FROM producto INNER JOIN productoTipo
                    ON producto.productoTipo_id = productoTipo.id
                    AND producto.id = ?
            `;
            mysqlConnection.query(query, [id], (err, rows) => {
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
