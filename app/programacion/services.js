const {Torta, Tamano, Sucursal, Programacion} = require("../../lib/database");
Torta
    .hasMany(Programacion,  {foreignKey: 'torta_id'});
Tamano
    .hasMany(Programacion,  {foreignKey: 'tamano_id'});
Sucursal
    .hasMany(Programacion,  {foreignKey: 'sucursal_id'});
Programacion
    .belongsTo(Torta,       {foreignKey: 'torta_id'});
Programacion
    .belongsTo(Tamano,      {foreignKey: 'tamano_id'});
Programacion  
    .belongsTo(Sucursal,    {foreignKey: 'sucursal_id'});
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
        return new Promise(async(resolve, reject) => {
            try{
                const tables = await Programacion.findAll({
                    where: {estado:1},
                    include: [Torta, Tamano, Sucursal]
                });
                resolve(tables);
            }catch(e){
                reject(e);
            }
        });

    }
    programacionFindAllRaw(){
        return new Promise(async(resolve, reject) => {
            try{
                const tables = await Programacion.findAll({
                    where: {estado:1}
                });
                resolve(tables);
            }catch(e){
                reject(e);
            }
        });
    }
    programacionFindByDiaYsucursal(dia, sucursal_id){
        return new Promise(async(resolve, reject) => {
            try{
                const r = await Programacion.findAll({
                    where  : { dia:dia , sucursal_id:sucursal_id, estado: 1 },
                    include: [Torta, Tamano, Sucursal],
                })
                resolve(r); 
            }catch(e){
                reject(e);
            }
        });
    }
    programacionCreate(body){
        return new Promise(async(resolve, reject) => {
            try{
                await Programacion.create(body);
                resolve();
            }catch(e){
                reject(e);
            }
        });
    }
    programacionUpdateById(id, body){
        return new Promise(async(resolve, reject) => {
            try{
                await Programacion.update(body, { where: {id: id}});
                resolve();
            }catch(e){
                reject(e);
            }
        });
    }
    empty(params){
        return new Promise(async(resolve, reject) => {
            try{
                const {sucursal_id, dia} = params;
                var r = await this.programacionFindAll();
                if(!dia){
                    for(var rr of r){
                        if(sucursal_id == rr.sucursal_id){
                            await this.programacionUpdateById(rr.id, {cantidad:0});
                            console.log(`${rr.id}  E M P T I E D`);
                        }
                    }
                }else{
                    for(var rr of r){
                        if(dia == rr.dia && sucursal_id == rr.sucursal_id){
                            await this.programacionUpdateById(rr.id, {cantidad:0});
                            console.log(`${rr.id}  E M P T I E D`);
                        }
                    }
                }
                resolve();
            }catch(e){
                reject(e);
            }
        });

    }
    createSucursal(params) {
        return new Promise(async(resolve, reject) => {
            try{
                var {sucursal_id} = params;
                var res = await this.programacionFindAll();
                sucursal_id = Number(sucursal_id);
                var i = 0
                for(const element of [...res]){
                    if(element.dataValues.sucursal_id == sucursal_id) {
                        throw Error('e');
                    }
                }
                var table = require('../../app/programacion/schemas/programacion'); 
                for( i; i < 6; i++){
                    table.sucursal_id = sucursal_id;
                    table.dia         = i+1;
                    await this.jsonToTables('create', table);
                    console.log(`${i+1} DAY CREATED FOR SUCURSAL ${sucursal_id}`);
                }
                resolve();
            }catch(e){
                reject(e);
            }
        });
    }
    deleteSucursal(params) {
        return new Promise(async(resolve, reject) => {
            try{
                var {sucursal_id} = params;
                let flag          = false;
                let res           = await this.programacionFindAll();
                res               = [...res];
                sucursal_id = Number(sucursal_id);
                for(const field of res){
                    if(field.dataValues.sucursal_id = sucursal_id){
                        flag = true;
                        break;
                    }
                }
                if(flag){
                    await Programacion.destroy({where:{sucursal_id}});
                    resolve();
                }else{
                    reject();
                }
            }catch(e){
                reject(e);
            }
        });
    }
    jsonToTables(action, body) {
        return new Promise(async(resolve, reject) => {
            try{
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
                    var r = await this.programacionFindAll();
                    r = [...r];
                    if(action === 'create'){
                        for(const table of tables){
                            await this.programacionCreate(table);
                            console.log(`${_id++} C R E A T E D`);
                        }
                        console.log('ALL TABLES INSERTED');
                    }else if(action === 'update'){
                        for(var rr of r){
                            if(_dia == rr.dia && _sucursal_id == rr.sucursal_id){
                                await this.programacionUpdateById(rr.id, tables[_id-1]);
                                console.log(`${_id++} U P D A T E D`);
                            }
                        }
                        console.log('ALL TABLES UPDATED');
                    }
                    resolve();
            }catch(e){
                reject(e);
            }
        });
    }
    tablesToJson(tables) {
        return new Promise(async(resolve, reject) => {
            try{
                var schema = require('./schemas/programacion');
                var i = 0;
                var j = 0;
                schema.sucursal_id = tables[0].dataValues.sucursal_id;
                schema.dia         = tables[0].dataValues.dia;
                var detalle        = schema.detalle;
                for(var table of tables){ 
                    table = table.dataValues;
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
            }catch(e){
                reject(e);
            }
        });
    }
}
module.exports = ProgramacionServices;
