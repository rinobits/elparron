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
    programacionFindAll(){
        return new Promise((resolve, reject) => {
            Programacion.findAll({
                where: {estado:1},
                include: [Torta, Tamano, Sucursal]
            })
                .then(r => {
                    resolve({programacion: r}) 
                })
                .catch(e => reject(e));
        });
    }
    programacionFindDeleted(){
        return new Promise((resolve, reject) => {
            Programacion.findAll({
                where: {estado:0},
            })
                .then(r => {
                    resolve({programacion: r}) 
                })
                .catch(e => reject(e));
        });
    }
    programacionFindByDiaYsucursal(_dia, _sucursal_id){
        return new Promise((resolve, reject) => {
            Programacion.findAll({
                include: [{Torta, Tamano, Sucursal}],
                where  : { dia : _dia, sucursal_id : _sucursal_id }
            })
            .then(r => resolve({r}))
            .catch(e => reject(e))
        })
    }
    programacionCreate(body){
        return new Promise((resolve, reject) => {
            Programacion.create(body)
                .then(r => resolve(r))
                .catch(e => reject(e));
        });
    }
    programacionUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Programacion.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1) resolve();
                else reject();
            })
            .catch(e => reject(e));
        });
    }
    programacionDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Programacion.update({estado: estado}, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"DELETE DATA:": true});
                }
                else reject({"DELETE DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    
}
module.exports = ProgramacionServices;
