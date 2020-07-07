const {Comunas} = require('../../lib/database');

class ComunasServices{
    comunaFindAll(){
        return new Promise((resolve, reject) => {
            Comunas.findAll({where:{estado:1}})
                .then(r => resolve(r)) 
                .catch(e => reject(e));
        });
    }
    comunaFindById(id){
        return new Promise((resolve, reject) => {
            Comunas.findByPk(id)
                .then(r => resolve({r}))
                .catch(e => reject(e));
        });
    }
    comunaCreate(body){
        return new Promise((resolve, reject) => {
            Comunas.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    comunaUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Comunas.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    comunaDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Comunas.update({estado: estado}, { where: {id: id}})
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
module.exports = ComunasServices;
