const mysqlConnection = require('../../../lib/database/database');
class ProgramacionSemanalServices{
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
    programacionDiariaFindAll(){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM programacionSemanal`;
            mysqlConnection.query(query, (e, r) => {
                if(!e) resolve(r)
                else   reject(e)
            })
        })
    }
    programacionSemanalFindByDiaYsucursal(dia, sucursal_id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM programacionSemanal WHERE dia = ? AND sucursal_id = ?;
            `;
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
    programacionSemanalAddEdit(body, id = 0){
        return new Promise((resolve, reject) => {
            const { dia, sucursal_id, torta_id, tamano_id, cantidad } = body;
            const query = `
                SET @id          = ?;
                SET @dia         = ?;
                SET @sucursal_id = ?;
                SET @torta_id    = ?;
                SET @tamano_id   = ?;
                SET @cantidad    = ?;
                CALL addOrEditProgramacionSemanal(@id, @dia, @sucursal_id, @torta_id, @tamano_id, @cantidad);
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
    jsonToTables(action, body, params) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM programacionSemanal`, async(e, r) => {
                if(!e){
                    var { dia, sucursal_id } = params;
                    var   detalle      = [...body.detalle];
                    var   tables       = [];
                    var   _id          = 1;
                    var   flag         = false;
                    detalle.forEach(torta => {
                        let _torta_id = torta.torta_id;
                        for(let i = 0; i < 4; i++){
                            tables.push({
                                dia:         dia,
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
                            try{
                                await this.programacionSemanalAddEdit(table);
                                console.log(`${_id++} C R E A T E D`);
                            }catch(e){
                                reject(e);
                            }
                        }
                        flag = true;
                        console.log('ALL TABLES INSERTED');
                    }else if(action === 'update'){
                        for(var rr of r){
                            if(dia == rr.dia && sucursal_id == rr.sucursal_id){
                                try{
                                    await this.programacionSemanalAddEdit(tables[_id-1], rr.id);
                                    console.log(`${_id++} U P D A T E D`);
                                    flag = true;
                                }catch(e){
                                    reject(e);
                                }
                            }
                        }
                        if(!flag) reject('No data found')
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
            var schema = require('./schemas/semanal');
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
                    j++;
                }
            }     
            resolve(schema);
        });
    }
}
module.exports = ProgramacionSemanalServices;
