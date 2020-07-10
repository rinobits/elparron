const {Sabor} = require('../../lib/database');
class SaborServices{
    saboresFindAll(){
        return new Promise((resolve, reject) => {
            Sabor.findAll({where:{estado:1}})
                .then(r => resolve({sabores: r})) 
                .catch(e => reject(e));
        });
    }
    saboresFindById(id){
        return new Promise((resolve, reject) => {
            Sabor.findByPk(id)
                .then(r => resolve({r}))
                .catch(e => reject(e));
        });
    }
    saboresCreate(body){
        return new Promise((resolve, reject) => {
            Sabor.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    saboresUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Sabor.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    saboresDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Sabor.update({estado: estado}, { where: {id: id}})
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
module.exports = SaborServices;
