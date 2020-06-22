const {MasaSabor}                  = require('../../lib/database');
const bcrypt                    = require('bcrypt'); 

class MasaSaborServices{
    masaSaborFindAll(){
        return new Promise((resolve, reject) => {
            MasaSabor.findAll({where:{estado:1}})
                .then(r => resolve({masaSabor: r})) 
                .catch(e => reject(e));
        });
    }
    masaSaborFindById(id){
        return new Promise((resolve, reject) => {
            MasaSabor.findByPk(id)
                .then(r => resolve({'cargo':r}))
                .catch(e => reject(e));
        });
    }
    masaSaborCreate(body){
        return new Promise((resolve, reject) => {
            MasaSabor.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    masaSaborUpdateById(id, body){
        return new Promise((resolve, reject) => {
            MasaSabor.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    masaSaborDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            MasaSabor.update({estado: estado}, { where: {id: id}})
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
module.exports = MasaSaborServices;
