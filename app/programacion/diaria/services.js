// ADD JOINS AFTER END
const mysqlConnection = require('../../../lib/database/database');

class ProgramacionServices{
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
    programacionFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM programacion`, (err, rows) => {
                if(rows.length == 0) reject('No data found');
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });

    }
    programacionFindByDiaYsucursal(dia, sucursal_id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM programacion WHERE dia = ? AND sucursal_id = ?;
            `
            mysqlConnection.query(query, [dia, sucursal_id], (err, rows) => {
                if(rows.length == 0) reject('No data found');
                if(!err){
                    resolve(rows);
                }else{
                    reject('Not found');
                }
            })
        });
    }
    programacionAddEdit(body, id = 0){
        return new Promise((resolve, reject) => {
            const { dia, sucursal_id, torta_id, tamano_id, cantidad } = body;
            const query = `
                SET @id          = ?;
                SET @dia         = ?;
                SET @sucursal_id = ?;
                SET @torta_id    = ?;
                SET @tamano_id   = ?;
                SET @cantidad    = ?;
                CALL addOrEditProgramacion(@id, @dia, @sucursal_id, @torta_id, @tamano_id, @cantidad);
            `
            mysqlConnection.query(query, [id, dia, sucursal_id, torta_id, tamano_id, cantidad], (err) => {
                if(!err){
                    resolve('Done');
                }else{
                    reject('Not found');
                }
            });
        });
    }
    empty(params){
        return new Promise((resolve, reject) => {
                const {sucursal_id, dia} = params;
                const query = `
                    UPDATE programacion SET cantidad = 0 WHERE id = ?
                `
                mysqlConnection.query(`SELECT * FROM programacion WHERE sucursal_id = ?`, [sucursal_id], (e, r) => {
                    if(r.length == 0) reject('No data found');
                    if(!e){
                        if(!dia){
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
                            for(var rr of r){
                                if(dia == rr.dia){
                                    mysqlConnection.query(query, [rr.id], (err) => {
                                        if(!err){
                                            console.log(`${rr.id}  E M P T I E D`);
                                        }else{
                                            reject(err);
                                        }
                                    });
                                }
                            }
                        }
                        resolve();
                    }else{
                        reject(e)
                    }
                });
            });
        }
    createSucursal(params) {
        return new Promise((resolve, reject) => {
            var {sucursal_id} = params;
            mysqlConnection.query(`SELECT * FROM programacion`, async(err, res) => {
                if(res.length == 0) reject('No data found');
                if(!err){
                    sucursal_id = Number(sucursal_id);
                    var i = 0
                    for(const element of res){
                        if(element.sucursal_id == sucursal_id){
                            reject('Already exists');
                            return;
                        }
                    }
                    var table = require('./schemas/programacion'); 
                    for(i; i < 6; i++){
                        table.sucursal_id = sucursal_id;
                        table.dia         = i+1;
                        await this.jsonToTables('create', table);
                        console.log(`${i+1} DAY CREATED FOR SUCURSAL ${sucursal_id}`);
                    }
                    resolve();
                }else{
                    reject(err);
                }
            });
        });
    }
    deleteSucursal(params) {
        return new Promise((resolve, reject) => {
            var {sucursal_id} = params;
            mysqlConnection.query(`SELECT * FROM programacion WHERE sucursal_id = ?`, [sucursal_id], (e, r) => {
                if(r.length == 0) reject('No data found');
                if(!e){
                    mysqlConnection(`DELETE FROM programacion WHERE sucursal_id = ?`, [sucursal_id], (e) => {
                        if(!e) resolve();
                        else   reject();
                    })
                }else{
                    reject(e);
                }
            });
        })
    }
    jsonToTables(action, body) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM programacion`, async(e, r) => {
                if(r.length == 0) reject('No data found');
                if(!e){
                    const _sucursal_id = body.sucursal_id;
                    const _dia         = body.dia;
                    var   detalle      = [...body.detalle];
                    var   tables       = [];
                    var   _id          = 1;
                    detalle.forEach(torta => {
                        let _torta_id = torta.torta_id;
                        for(let i = 0; i < 4; i++){
                            tables.push({
                                dia:         _dia,
                                sucursal_id: _sucursal_id,
                                torta_id:    _torta_id,
                                tamano_id:   torta.cantidades[i].tamano_id,
                                cantidad:    torta.cantidades[i].cantidad
                            });
                        }
                    });
                    _id = 1;
                    if(action === 'create'){
                        for(const table of tables){
                            await this.programacionAddEdit(table);
                            console.log(`${_id++} C R E A T E D`);
                        }
                        console.log('ALL TABLES INSERTED');
                    }else if(action === 'update'){
                        for(var rr of r){
                            console.log(_dia);
                            if(_dia == rr.dia && _sucursal_id == rr.sucursal_id){
                                await this.programacionAddEdit(tables[_id-1], rr.id);
                                console.log(`${_id++} U P D A T E D`);
                            }
                        }
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
            var schema = require('./schemas/programacion');
            var i = 0;
            var j = 0;
            schema.sucursal_id = tables[0].sucursal_id;
            schema.dia         = tables[0].dia;
            var detalle        = schema.detalle;
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
            schema.detalle = detalle;               
            resolve(schema);
        });
    }
}
module.exports = ProgramacionServices;
