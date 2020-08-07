const mysqlConnection = require('../../../lib/database/database');
const moment          = require('moment');
class ProgramacionDiariaServices{
    sortTables(tables){
        return new Promise((resolve, reject) => {
            try{
                const tableLen = tables.length;
                for(let i = 0; i < tableLen - 1; i++){
                    for(let j = i+1; j < tableLen; j++){
                        if(tables[i].torta_id > tables[j].torta_id){
                            let swap = tables[i].torta_id;
                            tables[i].torta_id = tables[j].torta_id;
                            tables[j].torta_id = swap;
                        }
                    }
                }
                for(let i = 0; i < tableLen; i+=4){
                    let tmp = [tables[i], tables[i+1], tables[i+2], tables[i+3]];
                    for(let j = 0; j < 3; j++){
                        for(let k = j + 1; k < 4; k++){
                            if(tmp[i] > tmp[j]){
                                let swap = tmp[i];
                                tmp[i]   = tmp[j];
                                tmp[j]   = swap;
                            }
                        }
                    }
                    tables[i]   = tmp[0];
                    tables[i+1] = tmp[1];
                    tables[i+2] = tmp[2];
                    tables[i+3] = tmp[3];
                }
                resolve(tables);
            }catch(e){
                reject(e);
            }
        })
    }
    programacionDiariaFindAll(){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM programacionDiaria`;
            mysqlConnection.query(query, (e, r) => {
                if(!e) resolve(r)
                else   reject(e)
            })
        })
    }
    programacionDiariaFindByDiaYsucursal(dia, sucursal_id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM programacionDiaria WHERE dia = ? AND sucursal_id = ?;
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
    programacionDiariaAddEdit(body, id = 0){
        return new Promise((resolve, reject) => {
            const { dia, sucursal_id, torta_id, tamano_id, cantidad } = body;
            const query = `
                SET @id          = ?;
                SET @dia         = ?;
                SET @sucursal_id = ?;
                SET @torta_id    = ?;
                SET @tamano_id   = ?;
                SET @cantidad    = ?;
                CALL addOrEditProgramacionDiaria(@id, @dia, @sucursal_id, @torta_id, @tamano_id, @cantidad);
            `
            mysqlConnection.query(query, [id, dia, sucursal_id, torta_id, tamano_id, cantidad], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject(err);
                }
            });
        });
    }
    empty(params){
        return new Promise((resolve, reject) => {
                var {sucursal_id, fecha} = params;
                if(fecha) if(!moment(fecha, "DD-MM-YYYY").isValid()) reject('Invalid date');
                var flag = false;
                const query = `
                    UPDATE programacionDiaria SET cantidad = 0 WHERE id = ?
                `
                mysqlConnection.query(`SELECT * FROM programacionDiaria WHERE sucursal_id = ?`, [sucursal_id], (e, r) => {
                    if(r.length == 0) reject(Error('No data found'));
                    if(!e){
                        if(!fecha){
                            for(var rr of r){
                                mysqlConnection.query(query, [rr.id], (err) => {
                                    if(!err){
                                        console.log(`${rr.id}  E M P T I E D`);
                                    }else{
                                        reject(err);
                                    }
                                });                            
                            }
                        }else{
                            fecha = fecha.split('-');
                            fecha = fecha[1] + '-' + fecha[0] + '-' + fecha[2];
                            const dia = moment(fecha).format('e');
                            console.log(dia);
                            for(var rr of r){
                                if(dia == rr.dia){
                                    mysqlConnection.query(query, [rr.id], (err) => {
                                        if(!err){
                                            console.log(`${rr.id}  E M P T I E D`);
                                        }else{
                                            reject(err);
                                        }
                                    });
                                    flag = true;
                                }
                            }
                            if(!flag) reject('No data found');
                        }
                        resolve();
                    }else{
                        reject(e)
                    }
                });
            });
    }
    jsonToTables(action, body, params) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM programacionDiaria`, async(e, r) => {
                if(!e){
                    var { fecha, sucursal_id } = params;
                    if(!moment(fecha, "DD-MM-YYYY").isValid()) reject('Invalid date');
                    fecha = fecha.split('-');
                    fecha = fecha[1] + '-' + fecha[0] + '-' + fecha[2];
                    const _dia         = moment(fecha).format('e');
                    var   detalle      = [...body.detalle];
                    var   tables       = [];
                    var   _id          = 1;
                    var   flag         = false;
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
                    _id = 1;
                    if(action === 'create'){
                        for(const table of tables){
                            await this.programacionDiariaAddEdit(table);
                            console.log(`${_id++} C R E A T E D`);
                        }
                        console.log('ALL TABLES INSERTED');
                    }else if(action === 'update'){
                        for(var rr of r){
                            if(_dia == rr.dia && sucursal_id == rr.sucursal_id){
                                await this.programacionDiariaAddEdit(tables[_id-1], rr.id);
                                console.log(`${_id++} U P D A T E D`);
                                flag = true; 
                            }
                        }
                        if(!flag) reject('No data found')
                    }else if(action === 'getall'){
                        resolve(tables);
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
            if(!tables) reject();
            var schema  = require('./schemas/programacionDiaria');
            var schemas = [];
            var i = 0;
            var j = 0;
            schema.sucursal_id = tables[0].sucursal_id;
            schema.dia         = tables[0].dia;
            for(var table of tables){ 
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
        });
    }
}
module.exports = ProgramacionDiariaServices;
