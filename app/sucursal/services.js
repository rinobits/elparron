const mysqlConnection = require('../../lib/database/database');

class SucursalServices{
    sucursalFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    sucursal.id, sucursal.rut, sucursal.giro, sucursal.direccion, 
                    sucursal.comuna_id, comuna.nombre AS comuna_nombre,
                    sucursal.nombre, sucursal.contactoEmail, sucursal.contactoNombre,
                    sucursal.colorFondo, sucursal.colorLetra
                FROM sucursal
                    INNER JOIN comuna
                        ON sucursal.comuna_id = comuna.id
                    AND sucursal.estado = 1;
            `;
            mysqlConnection.query(query, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    sucursalFindById(id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    sucursal.id, sucursal.rut, sucursal.giro, sucursal.direccion, 
                    sucursal.comuna_id, comuna.nombre AS comuna_nombre,
                    sucursal.nombre, sucursal.contactoEmail, sucursal.contactoNombre,
                    sucursal.colorFondo, sucursal.colorLetra
                FROM sucursal
                    INNER JOIN comuna
                        ON sucursal.comuna_id = comuna.id
                    AND sucursal.id = ?;
            `;
            mysqlConnection.query(query, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    sucursalCreate(body){
        return new Promise((resolve, reject) => {
            const id         = 0;
            const query      = `
                SET @id = ?;
                SET @rut = ?;
                SET @razonSocial = ?;
                SET @giro = ?;
                SET @direccion = ?;
                SET @comuna_id = ?;
                SET @nombre = ?;
                SET @contactoEmail = ?;
                SET @contactoNombre = ?;
                SET @colorFondo = ?;
                SET @colorLetra = ?;
                CALL addOrEditSucursal(@id, @rut, @razonSocial, @giro, @direccion, @comuna_id, @nombre, @contactoEmail, @contactoNombre, @colorFondo, @colorLetra);
            `
            mysqlConnection.query(query, [id, body.rut, body.razonSocial, body.giro, body.direccion, body.comuna_id, body.nombre, body.contactoEmail, body.contactoNombre, body.colorFondo, body.colorLetra], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    sucursalUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            id = id.id;
            const query      = `
                SET @id     = ?;
                SET @rut = ?;
                SET @razonSocial = ?;
                SET @giro = ?;
                SET @direccion = ?;
                SET @comuna_id = ?;
                SET @nombre = ?;
                SET @contactoEmail = ?;
                SET @contactoNombre = ?;
                SET @colorFondo = ?;
                SET @colorLetra = ?;
                CALL addOrEditSucursal(@id, @rut, @razonSocial, @giro, @direccion, @comuna_id, @nombre, @contactoEmail, @contactoNombre, @colorFondo, @colorLetra);
            `
            mysqlConnection.query(query, [id, body.rut, body.razonSocial, body.giro, body.direccion, body.comuna_id, body.nombre, body.contactoEmail, body.contactoNombre, body.colorFondo, body.colorLetra], (err, rows, fields) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    sucursalDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE sucursal  SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = SucursalServices;
