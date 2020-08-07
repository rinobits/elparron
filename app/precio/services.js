const mysqlConnection = require('../../../lib/database/database');
var schemas           = [];
var schema            = {};
class PrecioServices{
    precioProductoFindByStore(sucursal_id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    precioProducto.id,
                    precioProducto.producto_id, vw_producto.productoTipo_nombre,
                    precioProducto.costo,
                    precioProducto.venta,
                    precioProducto.diet,
                    precioProduct.sucursal_id,
                    sucursal.rut            AS sucursal_rut,
                    sucursal.nombre         AS sucursal_nombre,
                    sucursal.direccion      AS sucursal_direccion,
                    sucursal.giro           AS sucursal_gito,
                    sucursal.contactoNombre AS sucursal_contactoNombre,
                    sucursal.contactoEmail  AS sucursal_contactoEmail,
                    precioProducto.estado
                FROM precioProducto
                INNER JOIN vw_producto
                    ON precioProducto.producto_id = vw_producto.producto_id
                INNER JOIN sucursal
                    ON precioProducto.sucursal_id = sucursal.id
                AND sucursal_id = ?;
            `
            mysqlConnection.query(query, [sucursal_id], (err, rows) => {
                if(!err){
                    rows = rows.slice(-(rows.length-1))[0];
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }
    precioTortaFindByStore(sucursal_id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    precioTorta.id,
                    precioTorta.masaTipo_id, masaTipo.nombre AS masaTipo_nombre,
                    precioTorta.cuadrada,
                    precioTorta.tamano_id,
                    tamano.tamano   AS tamano,
                    tamano.personas AS tamano_personas,
                    precioTorta.costo,
                    precioTorta.venta,
                    precioTorta.diet,
                    precioTorta.sucursal_id,
                    sucursal.rut            AS sucursal_rut,
                    sucursal.nombre         AS sucursal_nombre,
                    sucursal.direccion      AS sucursal_direccion,
                    sucursal.giro           AS sucursal_giro,
                    sucursal.contactoNombre AS sucursal_contactoNombre,
                    sucursal.contactoEmail  AS sucursal_contactoEmail,
                    precioTorta.estado
                FROM precioTorta
                INNER JOIN masaTipo
                    ON precioTorta.masaTipo_id = masaTipo.id
                INNER JOIN tamano
                    ON precioTorta.tamano_id   = tamano.id
                INNER JOIN sucursal
                    ON precioTorta.sucursal_id = sucursal.id
                AND sucursal_id = ?;
            `
            mysqlConnection.query(query, [sucursal_id], async(err, rows) => {
                if(!err){
                    if(!rows) reject();
                    else{
                        schemas = []
                        schema  = require('./schemas/torta');
                        for(let i = 0; i < rows.length; i+=4){
                            schema.masaTipo_id               = rows[i].masaTipo_id;
                            schema.masaTipo_nombre           = rows[i].masaTipo_nombre;
                            schema.diet                      = rows[i].diet;
                            schema.cuadrada                  = rows[i].cuadrada;
                            schema.sucursal_id               = rows[i].sucursal_id;
                            schema.sucursal_rut              = rows[i].sucursal_rut;
                            schema.sucursal_nombre           = rows[i].sucursal_nombre;
                            schema.sucursal_direccion        = rows[i].sucursal_direccion;
                            schema.sucursal_giro             = rows[i].sucursal_giro;
                            schema.sucursal_contactoNombre   = rows[i].sucursal_contactoNombre;
                            schema.sucursal_contactoEamail   = rows[i].sucursal_contactoNombre;
                            for(let j = 0; j < 4; j++){
                                schema.precioTamano[j].tamano_id       = rows[i+j].tamano_id;
                                schema.precioTamano[j].tamano          = rows[i+j].tamano;
                                schema.precioTamano[j].tamano_personas = rows[i+j].tamano_personas;
                                schema.precioTamano[j].costo           = rows[i+j].costo;
                                schema.precioTamano[j].venta           = rows[i+j].venta;
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
module.exports = PrecioServices;
