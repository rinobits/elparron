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
    async programacionFindAll(){
        const tables = await Programacion.findAll({
            where: {estado:1},
            include: [Torta, Tamano, Sucursal]
        });
        return tables;
    }
    async programacionFindAllRaw(){
        const tables = await Programacion.findAll({
            where: {estado:1}
        });
        return tables;
    }
    async programacionFindByDiaYsucursal(dia, sucursal_id){
        const r = await Programacion.findAll({
            include: [Torta, Tamano, Sucursal],
            where  : { dia , sucursal_id, estado: 1 }
        })
        return r;        next(boom.badImplementation());

    }
    async programacionCreate(body){
        await Programacion.create(body);
    }
    async programacionUpdateById(id, body){
        await Programacion.update(body, { where: {id: id}})
    }
    async programacionDeleteById(id, estado = 0){
        const r = await Programacion.destroy(id, { where: {id: id}})
        if(r == 1){
            resolve({"DELETE DATA:": true});
        }
        else reject({"DELETE DATA:": false})
    }
    async empty(params){
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
    }
    async createSucursal(params) {
        var {sucursal_id} = params;
        try{
            let res = await this.programacionFindAll();
            sucursal_id = Number(sucursal_id);
            for(const element of [...res]){
                if(element.dataValues.sucursal_id == sucursal_id) return false
            }
            var table = require('../../app/programacion/schemas/programacion'); 
            for(let i = 0; i < 6; i++){
                table.sucursal_id = sucursal_id;
                table.dia         = i+1;
                await this.jsonToTables('create', table);
                console.log(`${i+1} DAY CREATED FOR SUCURSAL ${sucursal_id}`);
            }
        }catch(e){
            return e
        }
        return true;
    }
/*     async deleteSucursal(params) {
        var {sucursal_id} = params;
        let flag = false;
        let res = await this.programacionFindAll();
        res = [...res];
        const tableLen = res.length;
        sucursal_id = Number(sucursal_id);
        for(const element of [...res]){
            if(element.dataValues.sucursal_id = sucursal_id) flag = true
        }
        if(flag){
            for(const table of res){
                if(table.sucursal_id == sucursal_id){
                    this.programacionDeleteById()
                }
                console.log(`${table.dia} DAY DELETED FOR SUCURSAL ${sucursal_id}`);
            }
        }
        return flag;
    } */
    async jsonToTables(action, body) {
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
        }
    tablesToJson(detalle, tables) {
        var i = 0;
        var j = 0;
        for(var table of tables){ 
            table = table.dataValues;
            detalle[i].cantidades[j].tamano_id = table.tamano_id;
            detalle[i].cantidades[j].cantidad  = table.cantidad;
            j++;
            if(j == 4){
                j = 0;
                i++;   
            }
        }                    
        return detalle;
    }
}
module.exports = ProgramacionServices;
