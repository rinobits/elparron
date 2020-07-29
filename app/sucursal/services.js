const mysqlConnection = require('../../lib/database/database');

class SucursalServices{
    sucursalFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM sucursal WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    sucursalFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM sucursal WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject('Not found');
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
    sucursalUpdateById(id, body){
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
                    reject('Not found');
                }
            });
        });
    }
    
}
module.exports = SucursalServices;
