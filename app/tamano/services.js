const {Tamano}  = require('../../lib/database');

class TamanoServices{
    tamanosFindAll(){
        return new Promise((resolve, reject) => {
            Tamano.findAll({where:{estado:1}})
                .then(r => resolve({tamanos: r})) 
                .catch(e => reject(e));
        });
    }
    tamanosFindById(id){
        return new Promise((resolve, reject) => {
            Tamano.findByPk(id)
                .then(r => resolve({r}))
                .catch(e => reject(e));
        });
    }
    tamanosCreate(body){
        return new Promise((resolve, reject) => {
            Tamano.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    tamanosUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Tamano.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    tamanosDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Tamano.update({estado: estado}, { where: {id: id}})
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
module.exports = TamanoServices;
