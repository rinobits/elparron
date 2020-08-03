const mysqlConnection = require('../../lib/database/database');

class PrecioTortaServices{
    precioTortaFindById(sucursal){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioTorta WHERE sucursal_id = ?`, [sucursal], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    precioTortaCreate(body){
        return new Promise((resolve, reject) => {
            const {
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
                SET @tamano_id   = ?;
                SET @masaTipo_id = ?;
                SET @diet        = ?;
                SET @cuadrada    = ?;
                SET @costo       = ?;
                SET @venta       = ?;
                SET @sucursal_id = ?;
                CALL addOrEditPrecioTorta(@id, @tamano_id, @masaTipo_id, @diet, @cuadrada, @costo, @venta, @sucursal_id);
            `;
            mysqlConnection.query(query, [id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    precioTortaUpdateById(id, body){
        return new Promise((resolve, reject) => {
            const {
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
                SET @tamano_id   = ?;
                SET @masaTipo_id = ?;
                SET @diet        = ?;
                SET @cuadrada    = ?;
                SET @costo       = ?;
                SET @venta       = ?;
                SET @sucursal_id = ?;
                CALL addOrEditPrecioTorta(@id, @tamano_id, @masaTipo_id, @diet, @cuadrada, @costo, @venta, @sucursal_id);
            `
            mysqlConnection.query(query, [id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = PrecioTortaServices;
