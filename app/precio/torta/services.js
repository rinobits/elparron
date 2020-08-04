const mysqlConnection = require('../../../lib/database/database');

class PrecioTortaServices{
    precioTortaFindByStore(sucursal_id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioTorta WHERE sucursal_id = ?`, [sucursal_id], (err, rows) => {
                if(!err){
                    if(!rows) reject();
                    else{
                        var schema = require('./schemas/torta');
                        var i = 0;
                        for(var table of rows){
                            schema.masaTipo_id               = table.masaTipo_id;
                            schema.diet                      = table.diet;
                            schema.cuadrada                  = table.cuadrada;
                            schema.precioTamano[i].tamano_id = table.tamano_id;
                            schema.precioTamano[i].costo     = table.costo;
                            schema.precioTamano[i].venta     = table.venta;
                            i++;
                            if(i == 4) i = 0;
                        }
                    }
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
    precioTortaUpdate(body){
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
            var query = `
                SELECT * FROM precioTorta
                    WHERE masaTipo_id = ?
                    AND   diet        = ?
                    AND   cuadrada    = ?;
            `;
            mysqlConnection.query(query, [masaTipo_id, diet, cuadrada], async(err, row) => {
                if(!err){
                    if(!row){
                        await this.precioTortaCreate(body);
                        resolve('Done');
                    }else{
                        query = `
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
                        mysqlConnection.query(query, [row.id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
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
                masaTipo_id: 0,
                diet:        0,
                cuadrada:    0,
                tamano_id:   0,
                costo:       0,
                venta:       0
            }
            body.forEach(async(elem) => {
                table.masaTipo_id = elem.masaTipo_id;
                table.diet        = elem.diet;
                table.cuadrada    = elem.cuadrada;
                for(let i = 0; i < 4; i++){
                    table.tamano_id = elem.precioTamano[i].tamano_id;
                    table.costo     = elem.precioTamano[i].costo;
                    table.venta     = elem.precioTamano[i].venta;
                    if(action === 'create')      await this.precioTortaCreate(table);
                    else if(action === 'update') await this.precioTortaUpdate(table);
                }
            });
            resolve('Done');
        })
    }
}
module.exports = PrecioTortaServices;
