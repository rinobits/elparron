const {Tortas}                  = require('../../lib/database');
const bcrypt                     = require('bcrypt'); 

class TortasServices{
    tortasFindAll(){
        return new Promise((resolve, reject) => {
            Tortas.findAll({where:{estado:1}})
                .then(r => resolve({tortas: r})) 
                .catch(e => reject(e));
        });
    }
    tortasFindById(id){
        return new Promise((resolve, reject) => {
            Tortas.findByPk(id)
                .then(r => resolve({'cargo':r}))
                .catch(e => reject(e));
        });
    }
    tortasCreate(body){
        return new Promise((resolve, reject) => {
            Tortas.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    tortasUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Tortas.update(body, { where: {id: id}})
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
            Tortas.update({estado: estado}, { where: {id: id}})
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
module.exports = TortasServices;
