const mysqlConnection = require('../../../lib/database/database');

class PrecioProductoServices{
    precioProductoFindByStore(sucursal){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioProducto WHERE sucursal_id = ?`, [sucursal], (err, rows) => {
                if(!err){
                    resolve(rows);
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
    precioProductoUpdate(body){
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
            `
            mysqlConnection.query(query, [producto_id, diet, sucursal_id], async(err, row) => {
                if(!err){
                    if(!rows){
                        await this.precioProductoCreate(body);
                        resolve('Done');
                    }else{
                        query = `
                            SET @id          = ?;
                            SET @producto_id = ?;
                            SET @diet        = ?;
                            SET @costo       = ?;
                            SET @venta       = ?;
                            SET @sucursal_id = ?;
                            CALL addOrEditPrecioProducto(@id, @producto_id, @diet, @costo, @venta, @sucursal_id);
                        `;
                        mysqlConnection.query(query, [row.id, producto_id, diet, costo, venta, sucursal_id], (err) => {
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
        });
    }
    jsonToTables(action, body){
        return new Promise((resolve, reject) => {
            var table = {
                producto_id: 0,
                diet:        0,
                costo:       0,
                sucursal_id: 0,
                venta:       0
            }
            body.forEach(async(elem) => {
                table.producto_id = elem.masaTipo_id;
                table.diet        = elem.diet;
                table.costo       = elem.costo;
                table.venta       = elem.venta;
                table.sucursal_id = elem.sucursal_id;
                if(action === 'create')      await this.precioTortaCreate(table);
                else if(action === 'update') await this.precioTortaUpdate(table);
            });
            resolve('Done');
        })
}
}
module.exports = PrecioProductoServices;
