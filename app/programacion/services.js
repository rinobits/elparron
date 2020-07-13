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
                .then(r => resolve({programacion: r})) 
                .catch(e => reject(e));
        });
    }
    programacionFindById(id){
        return new Promise((resolve, reject) => {
            Programacion.findByPk(id, {include: [{Torta, Tamano, Sucursal}]})
                .then(r => resolve({r}))
                .catch(e => reject(e));
        });
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
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    programacionDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Programacion.update({estado: estado}, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    
}
module.exports = ProgramacionServices;
