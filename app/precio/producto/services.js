const mysqlConnection = require('../../lib/database/database');

class PrecioProductoServices{
    precioProductoFindByStore(sucursal){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioProducto WHERE sucursal_id = ?`, [sucursal], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    precioProductoCreate(body){
        return new Promise((resolve, reject) => {
            const {
                producto_id,
                diet,
                costo,
                venta,
                sucursal_id
            } = body;
            const id         = 0;
            const query      = `
                SET @id          = ?;
                SET @producto_id = ?;
                SET @diet        = ?;
                SET @costo       = ?;
                SET @venta       = ?;
                SET @sucursal_id = ?;
                CALL addOrEditPrecioProducto(@id, @producto_id, @diet, @costo, @venta, @sucursal_id);
            `;
            mysqlConnection.query(query, [id, producto_id, diet, costo, venta, sucursal_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    precioProductoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const {
                producto_id,
                diet,
                costo,
                venta,
                sucursal_id,
            } = body;
            const query      = `
                SET @id          = ?;
                SET @producto_id = ?;
                SET @diet        = ?;
                SET @costo       = ?;
                SET @venta       = ?;
                SET @sucursal_id = ?;
                CALL addOrEditPrecioProducto(@id, @producto_id, @diet, @costo, @venta, @sucursal_id);
            `
            mysqlConnection.query(query, [id, producto_id, diet, costo, venta, sucursal_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = PrecioProductoServices;
