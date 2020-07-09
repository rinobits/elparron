const {Sucursal} = require('../../lib/database');

class SucursalServices{
    sucursalesFindAll(){
        return new Promise((resolve, reject) => {
            Sucursal.findAll({where:{estado:1}})
                .then(r => resolve({sucursales: r})) 
                .catch(e => reject(e));
        });
    }
    sucursalesFindById(id){
        return new Promise((resolve, reject) => {
            Sucursal.findByPk(id)
                .then(r => resolve({'sucursal':r}))
                .catch(e => reject(e));
        });
    }
    sucursalesCreate(body){
        return new Promise((resolve, reject) => {
            Sucursal.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    sucursalesUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Sucursal.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA:": true});
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    sucursalesDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Sucursal.update({estado: estado}, { where: {id: id}})
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
module.exports = SucursalServices;
