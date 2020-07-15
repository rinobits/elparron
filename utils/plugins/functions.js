const ProgramacionServices = require('../../app/programacion/services');
const programacionServices = new ProgramacionServices();

const sortTables = (tables) => {
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
    return tables;
}
const tablesToJson = (detalle, tables) => {
    tables.forEach(table => { 
        for(let i = 1; i <= 13; i++){
            detalle[i-1].torta_id = table.torta_id;
            for(let j = 0; j < 4; j++){
                detalle[i-1].cantidades[j].tamano_id = table.tamano_id;
                detalle[i-1].cantidades[j].cantidad  = table.cantidad;
            }
        }                    
    });
    return tables;
}
const jsonToTables = (action, body) => {
    return new Promise((resolve, reject) => {
        const _sucursal_id = body.sucursal_id;
        const _dia         = body.dia;
        var   detalle      = [...body.detalle];
        var  tables        = [];
        var _id            = 1;
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
        if(action == 'create'){
            tables.forEach((table) => {
                programacionServices.programacionCreate(table)
                .then(r  => {
                    console.log(`\n<!> T A B L E  |${_id}|  C R E A T E D <!>`)
                    _id = _id + 1;
                })
                .catch(e => reject(e))
            })
        }else if(action == 'update'){
            tables.forEach(table => {
                _id = _id + 1;
                programacionServices.programacionUpdateById(_id, table)
                .then(r  => console.log(`\n<!> T A B L E  |${_id}|  U P D A T E D <!>`))
                .catch(e => reject(e))
            })
        }
        resolve()
    })
}
const moveToEnd = () => {
    return new Promise((resolve, reject) => {
        var refreshTables = []
        programacionServices.programacionFindAll()
            .then(r => refreshTables.push(...r.programacion))
            .catch(e => reject(e));
        for(let id = 1; i <= 52; i++){
            programacionServices.programacionDeleteById(id)
                .then(r  => console.log(`\n<!> T A B L E  |${id}|  D E L E T E D <!>`))
                .catch(e => reject(e))
        }
        programacionServices.programacionFindDeleted()
            .then(r => {
                r = [...r.programacion];
                tablesLen = r.length + 52;
                for(let id = 1; id <= 52; id++){
                    let body = {id: id + tablesLen};
                    programacionServices.programacionUpdateById(id, body) 
                    .then(r  => console.log(`<!> TABLE |#${id}| CHANGED TO |#${id+tablesLen}| <!>`))
                    .catch(e => reject(e))
                }
            })
            .catch(e => reject(e))
        let id = 1
        refreshTables.forEach(table => {
            programacionServices.programacionCreate(table)
            .then(r  => console.log(`\n<!> T A B L E  |${id++}|  R E F R E S H E D <!>`))
            .catch(e => reject(e))
        });
        resolve();
    })
}
module.exports = {
    sortTables,
    tablesToJson,
    jsonToTables,
    moveToEnd
};