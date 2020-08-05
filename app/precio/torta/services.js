const mysqlConnection = require('../../../lib/database/database');

class PrecioTortaServices{
    precioTortaFindByStore(sucursal_id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioTorta WHERE sucursal_id = ?`, [sucursal_id], (err, rows) => {
                if(!err){
                    if(!rows) reject();
                    else{
                        var schemas = [];
                        var schema  = require('./schemas/torta');
                        var i       = 0;
                        for(var table of rows){
                            schema.masaTipo_id               = table.masaTipo_id;
                            schema.diet                      = table.diet;
                            schema.cuadrada                  = table.cuadrada;
                            schema.precioTamano[i].tamano_id = table.tamano_id;
                            schema.precioTamano[i].costo     = table.costo;
                            schema.precioTamano[i].venta     = table.venta;
                            i++;
                            if(i == 4){
                                i = 0;
                                schemas.push(schema);
                            }
                        }
                    }
                    resolve(schemas);
                }else{
                    reject('Not found');
                }
            });
        });
    }
    precioTortaUpdateOrCreate(body){
        return new Promise((resolve, reject) => {
            const {
                masaTipo_id,
                diet,
                cuadrada,
                tamano_id,
                costo,
                venta,
                sucursal_id,
            } = body;
            var query = `
                SELECT * FROM preciotorta
                    WHERE masaTipo_id = ?
                    AND diet = ?
                    AND cuadrada = ?
                    AND sucursal_id = ?
                    AND tamano_id = ?;
            `;
            mysqlConnection.query(query, [masaTipo_id, diet, cuadrada, sucursal_id, tamano_id], (err, row) => {
                if(!err){
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
                        `;
                        if(row.length == 0){
                            const id = 0;
                            mysqlConnection.query(query, [id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
                                if(!err){
                                    resolve('created');
                                }else{
                                    console.log(err);
                                    reject(err);
                                }
                            });
                        }else{
                            mysqlConnection.query(query, [row[0].id, tamano_id, masaTipo_id, diet, cuadrada, costo, venta, sucursal_id], (err) => {
                                if(!err){
                                    resolve('updated');
                                }else{
                                    console.log(err);
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
                masaTipo_id: 0,
                diet:        0,
                cuadrada:    0,
                tamano_id:   0,
                costo:       0,
                venta:       0
            };
            var cont = 1;
            body.forEach((elem) => {
                table.masaTipo_id   = elem.masaTipo_id;
                table.diet          = elem.diet;
                table.cuadrada      = elem.cuadrada;
                table.sucursal_id   = elem.sucursal_id;
                for(let i = 0; i < 4; i++){
                    table.tamano_id = elem.precioTamano[i].tamano_id;
                    table.costo     = elem.precioTamano[i].costo;
                    table.venta     = elem.precioTamano[i].venta;
                    this.precioTortaUpdateOrCreate(table)
                        .then(r => {
                            console.log(`${cont++} - ${r}`);
                        })
                        .catch(e => {
                            console.log(e);
                            reject(e);
                        })
                }
            });
            resolve(1);
        })
    }
}
module.exports = PrecioTortaServices;
