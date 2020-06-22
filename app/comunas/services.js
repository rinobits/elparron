const {Comuna}                  = require('../../lib/database');
const bcrypt                    = require('bcrypt'); 

class ComunaServices{
    comunaFindAll(){
        return new Promise((resolve, reject) => {
            Comuna.findAll({where:{estado:1}})
                .then(r => resolve({comuna: r})) 
                .catch(e => reject(e));
        });
    }
    comunaFindById(id){
        return new Promise((resolve, reject) => {
            Comuna.findByPk(id)
                .then(r => resolve({'cargo':r}))
                .catch(e => reject(e));
        });
    }
    comunaCreate(body){
        return new Promise((resolve, reject) => {
            Comuna.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    comunaUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Comuna.update(body, { where: {id: id}})
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
            Comuna.update({estado: estado}, { where: {id: id}})
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
module.exports = ComunaServices;
