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
                    reject(err);
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
                    reject(err);
                }
            });
        });
    }
    productoCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            if(!id) id = 0;
            const {
                productoTipo_id,
                nombre,
                diet
            } = body;
            var query = `
                SELECT * FROM producto
                WHERE id = ?
            `;
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query = `
                        SET @id              = ?;
                        SET @productoTipo_id = ?;
                        SET @nombre          = ?;
                        SET @diet            = ?;
                        CALL addOrEditProducto(@id, @productoTipo_id, @nombre, @diet);
                    `;
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, productoTipo_id, nombre, diet], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, productoTipo_id, nombre, diet], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }
                }else{
                    reject(err);
                }
            })
        })
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
