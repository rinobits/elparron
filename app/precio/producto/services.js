const mysqlConnection = require('../../../lib/database/database');

class PrecioProductoServices{
    precioProductoFindByStore(sucursal){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioProducto WHERE sucursal_id = ?`, [sucursal], (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }
    precioProductoUpdateOrCreate(body){
        return new Promise((resolve, reject) => {
            const {
                producto_id,
                diet,
                costo,
                venta,
                sucursal_id,
            } = body;
            var query = `
                SELECT * FROM precioProducto
                    WHERE producto_id = ?
                    AND   diet        = ?
                    AND   sucursal_id = ?;
            `;
            mysqlConnection.query(query, [producto_id, diet, sucursal_id], (err, row) => {
                if(!err){
                        query = `
                            SET @id          = ?;
                            SET @producto_id = ?;
                            SET @diet        = ?;
                            SET @costo       = ?;
                            SET @venta       = ?;
                            SET @sucursal_id = ?;
                            CALL addOrEditPrecioProducto(@id, @producto_id, @diet, @costo, @venta, @sucursal_id);
                        `;
                        if(row.length == 0){
                            const id = 0;
                            mysqlConnection.query(query, [id, producto_id, diet, costo, venta, sucursal_id], (err) => {
                                if(!err){
                                    resolve('created');
                                }else{
                                    reject(err);
                                }
                            });
                        }else{
                            mysqlConnection.query(query, [row[0].id, producto_id, diet, costo, venta, sucursal_id], (err) => {
                                if(!err){
                                    resolve('updated');
                                }else{
                                    reject(err);
                                }
                            });
                        }
                }else{
                    console.log(err);
                    reject(err);
                }
            })
        });
    }
    jsonToTables(body){
        return new Promise((resolve, reject) => {
            var table = {
                producto_id: 0,
                diet:        0,
                costo:       0,
                sucursal_id: 0,
                venta:       0
            }
            var cont = 1;
            body.forEach((elem) => {
                table.producto_id = elem.producto_id;
                table.diet        = elem.diet;
                table.costo       = elem.costo;
                table.venta       = elem.venta;
                table.sucursal_id = elem.sucursal_id;
                this.precioProductoUpdateOrCreate(table)
                    .then(r => {
                        console.log(`${cont++} - ${r}`);
                    })
                    .catch(e => {
                        console.log(e);
                        reject(e);
                    })
            });
            resolve(1);
        })
    }
}
module.exports = PrecioProductoServices;
