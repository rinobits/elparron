const {Programacion} = require('../../lib/database');
class ProgramacionServices{
    programacionFindAll(){
        return new Promise((resolve, reject) => {
            Programacion.findAll({where:{estado:1}})
                .then(r => resolve({programacion: r})) 
                .catch(e => reject(e));
        });
    }
    programacionFindById(id){
        return new Promise((resolve, reject) => {
            Programacion.findByPk(id)
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
