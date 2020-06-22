const {Tamanos}                  = require('../../lib/database');
const bcrypt                     = require('bcrypt'); 

class TamanoServices{
    tamanosFindAll(){
        return new Promise((resolve, reject) => {
            Tamanos.findAll({where:{estado:1}})
                .then(r => resolve({tamanos: r})) 
                .catch(e => reject(e));
        });
    }
    tamanosFindById(id){
        return new Promise((resolve, reject) => {
            Tamanos.findByPk(id)
                .then(r => resolve({'cargo':r}))
                .catch(e => reject(e));
        });
    }
    tamanosCreate(body){
        return new Promise((resolve, reject) => {
            Tamanos.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    tamanosUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Tamanos.update(body, { where: {id: id}})
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
            Tamanos.update({estado: estado}, { where: {id: id}})
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
