const {Armar} = require('../../lib/database');
class ArmarServices{
    armarFindAll(){
        return new Promise((resolve, reject) => {
            Armar.findAll({where:{estado:1}})
                .then(r => resolve(r))
                .catch(e => reject(e));
        });
    }
    armarFindById(id){
        return new Promise((resolve, reject) => {
            Armar.findByPk(id)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    armarCreate(body){
        return new Promise((resolve, reject) => {
            console.log(body);
            Armar.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    armarUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Armar.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA:": true});
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    armarDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Armar.update({estado: estado}, { where: {id: id}})
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
module.exports = ArmarServices;
