const mysqlConnection = require('../../lib/database/database');

class PrecioServices{
    precioFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precio WHERE estado = 1`, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    precioFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precio WHERE ID = ?`, [id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    precioCreate(body){
        return new Promise((resolve, reject) => {
            const {
                producto_id,
                tamano_id,
                masaTipo_id,
                diet,
                cuadrada,
                costo,
                venta,
                sucursal_id
            } = body;
            const id         = 0;
            const query      = `
                SET @id          = ?;
                SET @producto_id = ?;
                SET @tamano_id   = ?;
                SET @masaTipo_id = ?;
                SET @diet        = ?;
                SET @cuadrada    = ?;
                SET @costo       = ?;
                SET @venta       = ?;
                SET @sucursal_id = ?;
                CALL addOrEditPrecio(@id, @producto_id, @tamano_id, @masaTipo_id, @diet, @cuadrada, @costo, @venta, @sucursal_id);
            `;
            mysqlConnection.query(query, [id, producto_id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    precioUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const {
                producto_id,
                tamano_id,
                masaTipo_id,
                diet,
                cuadrada,
                costo,
                venta,
                sucursal_id,
            } = body;
            const query      = `
                SET @id          = ?;
                SET @producto_id = ?;
                SET @tamano_id   = ?;
                SET @masaTipo_id = ?;
                SET @diet        = ?;
                SET @cuadrada    = ?;
                SET @costo       = ?;
                SET @venta       = ?;
                SET @sucursal_id = ?;
                CALL addOrEditPrecio(@id, @producto_id, @tamano_id, @masaTipo_id, @diet, @cuadrada, @costo, @venta, @sucursal_id);
            `
            mysqlConnection.query(query, [id, producto_id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    precioDeleteById(id, body){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE precio SET estado = ? WHERE id = ?`, [body.estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = PrecioServices;
