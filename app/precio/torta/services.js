const mysqlConnection = require('../../../lib/database/database');
var schemas           = [];
var schema            = {};
class PrecioTortaServices{
    precioTortaFindByStore(sucursal_id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM precioTorta WHERE sucursal_id = ?`, [sucursal_id], async(err, rows) => {
                if(!err){
                    if(!rows) reject();
                    else{
                        schemas = []
                        schema  = require('./schemas/torta');
                        for(let i = 0; i < rows.length; i+=4){
                            schema.masaTipo_id               = rows[i].masaTipo_id;
                            schema.diet                      = rows[i].diet;
                            schema.cuadrada                  = rows[i].cuadrada;
                            schema.sucursal_id               = rows[i].sucursal_id;
                            for(let j = 0; j < 4; j++){
                                schema.precioTamano[j].tamano_id = rows[i+j].tamano_id;
                                schema.precioTamano[j].costo     = rows[i+j].costo;
                                schema.precioTamano[j].venta     = rows[i+j].venta;
                            }
                            schemas.push(Object.assign({},schema));
                            schema = require('./schemas/torta');
                        }
                    }
                    resolve(schemas);
                }else{
                    reject(err);
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
