const {MasaTipo, MasaSabor, Sabor, Torta} = require("../../lib/database");

MasaTipo
    .hasMany(Torta,       {foreignKey: 'masaTipo_id'});
MasaSabor
    .hasMany(Torta,       {foreignKey: 'masaSabor_id'});
Sabor
    .hasMany(Torta,       {foreignKey: 'sabor_id'});
Torta
    .belongsTo(MasaTipo,  {foreignKey: 'masaTipo_id'});
Torta
    .belongsTo(MasaSabor, {foreignKey: 'masaSabor_id'});
Torta
    .belongsTo(Sabor,     {foreignKey: 'sabor_id'});

class TortaServices{
    tortasFindAll(){
        return new Promise((resolve, reject) => {
            Torta.findAll({
                where:{estado:1},
                include:[MasaTipo, MasaSabor, Sabor] 
            })
                .then(r => resolve({tortas: r})) 
                .catch(e => reject(e));
        });
    }
    tortasFindById(id){
        return new Promise((resolve, reject) => {
            Torta.findByPk(id, {include:[{MasaTipo, MasaSabor, Sabor}]})
                .then(r => resolve({r}))
                .catch(e => reject(e));
        });
    }
    tortasCreate(body){
        return new Promise((resolve, reject) => {
            Torta.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    tortasUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Torta.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    tortasDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Torta.update({estado: estado}, { where: {id: id}})
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
module.exports = TortaServices;
