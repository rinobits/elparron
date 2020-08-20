const mysqlConnection = require('../../../lib/database/database');
const moment          = require('moment');

class SobranteServices{
    sortTables(tables){
        return new Promise((resolve, reject) => {
            if(!tables) reject("Wrong call");
            if(tables.length > 52){
                tables
                .sort((x, y) =>
                    (x.dia > y.dia) ? 1 :
                    (x.dia === y.dia)?
                        ((x.sucursal_id > y.sucursal_id) ? 1 :
                            -1) : -1);
                tables
                .sort((x, y) =>
                    (x.torta_id > y.torta_id) ? 1 :
                    (x.torta_id === y.torta_id)?
                        ((x.tamano_id > y.tamano_id) ? 1 :
                            -1) : -1);
            }
            resolve(tables
                    .sort((x, y) =>
                        (x.torta_id > y.torta_id) ? 1 :
                        (x.torta_id === y.torta_id)?
                            ((x.tamano_id > y.tamano_id) ? 1 :
                                -1) : -1))
            
        })
    }
    sobranteFindByDiaYsucursal(dia, sucursal_id){
        return new Promise((resolve, reject) => { 
            const query = `
                SELECT * FROM sobrante WHERE dia = ? AND sucursal_id = ?;
            `
            mysqlConnection.query(query, [dia, sucursal_id], (err, rows) => {
                if(rows.length == 0) reject('No data found');
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    sobranteAddEdit(body, id = 0){
        return new Promise((resolve, reject) => { 
            const { dia, sucursal_id, torta_id, tamano_id, cantidad } = body;
            mysqlConnection.query('SELECT * FROM sobrante WHERE dia = ? AND sucursal_id = ?', [dia, sucursal_id], (err, rows) => {
                if(!err){
                    if(rows.length == 0) id = 0;
                    var query = `
                         SET @id          = ?;
                         SET @dia         = ?;
                         SET @sucursal_id = ?;
                         SET @torta_id    = ?;
                         SET @tamano_id   = ?;
                         SET @cantidad    = ?;
                         CALL addOrEditSobrante(@id, @dia, @sucursal_id, @torta_id, @tamano_id, @cantidad);
                     `;
                     mysqlConnection.query(query, [id, dia, sucursal_id, torta_id, tamano_id, cantidad], (err) => {
                         if(!err){
                             resolve('Done');
                         }else{
                             reject(err);
                         }
                     });
                }else{
                    reject(err);
                }
            })
        });
    }
    jsonToTables(action, body, params) {
        return new Promise((resolve, reject) => {
            var { fecha, sucursal_id } = params;
            fecha                      = fecha.split('-');
            var   _dia                 = Number(moment(fecha[1] + '-' + fecha[0] + '-' + fecha[2]).format('e'));
            var query                  = `SELECT * FROM sobrante WHERE sucursal_id=? AND dia=?`;
            if(action === 'update'){
                let [ HH, mm ] = 
                    moment().locale('cl').format('HH:mm').split(' ')[0].split(':')
                    .map((n) => { return Number(n) });
                if((HH >= 18 && mm >= 30 || HH >= 19) && moment().format('e') == _dia){
                    if(_dia == 6) _dia = 1;
                    else          _dia++;
                }
            }
            mysqlConnection.query(query, [sucursal_id, _dia], async(e, r) => {
                if(!e){
                    if(!moment(fecha, "DD-MM-YYYY").isValid()) reject('Invalid date');
                    if(r.length == 0 && action === 'update'){ action = 'create' }
                    var   detalle      = [...body.detalle];
                    var   tables       = [];
                    var   _id          = 1;
                    detalle.forEach(torta => {
                        let _torta_id = torta.torta_id;
                        for(let i = 0; i < 4; i++){
                            tables.push({
                                dia:         _dia,
                                sucursal_id: sucursal_id,
                                torta_id:    _torta_id,
                                tamano_id:   torta.cantidades[i].tamano_id,
                                cantidad:    torta.cantidades[i].cantidad
                            });
                        }
                    });
                    if(action === 'create'){
                        for(const table of tables){
                            try{
                                await this.sobranteAddEdit(table); 
                                console.log(`${_id++} C R E A T E D`);
                            }catch(e){
                                reject(e);
                            }
                        }
                        console.log('ALL TABLES INSERTED');
                    }else if(action === 'update'){
                        var flag = false;
                        for(const rr of r){
                            if(_dia == rr.dia && sucursal_id == rr.sucursal_id){
                                try{
                                    await this.sobranteAddEdit(tables[_id-1], rr.id);
                                    console.log(`${_id++} U P D A T E D`);
                                    flag = true;
                                }catch(e){
                                    reject(e);
                                }
                            }
                        }
                        if(!flag) reject('Something went wrong\nFrom /programacion/sobrante/services/jsonToTables');
                    }
                    resolve('done')
                }else{
                    reject(e);
                }
            });
        })
    }
    tablesToJson(tables) {
        return new Promise((resolve, reject) => {
            if(!tables) reject('There\'s no data');
            var schema = require('./schemas/sobrante');
            var i = 0;
            var j = 0;
            schema.sucursal_id = tables[0].sucursal_id;
            schema.dia         = tables[0].dia;
            for(const table of tables){ 
                schema.detalle[j].torta_id                = table.torta_id;
                schema.detalle[j].cantidades[i].tamano_id = table.tamano_id;
                schema.detalle[j].cantidades[i].cantidad  = table.cantidad;
                i++;
                if(i == 4){
                    i = 0;
                    j++
                }
            }
            resolve(schema);
        })
    }
}
module.exports = SobranteServices;
