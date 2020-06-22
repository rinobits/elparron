const {Sucursales} = require('../../lib/database');
const bcrypt  = require('bcrypt'); 

class SucursalServices{
    sucursalesFindAll(){
        return new Promise((resolve, reject) => {
            Sucursales.findAll({where:{estado:1}})
                .then(r => resolve({sucursales: r})) 
                .catch(e => reject(e));
        });
    }
    sucursalesFindById(id){
        return new Promise((resolve, reject) => {
            Sucursales.findByPk(id)
                .then(r => resolve({'sucursal':r}))
                .catch(e => reject(e));
        });
    }
    sucursalesCreate(body){
        return new Promise((resolve, reject) => {
            Sucursales.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    sucursalesUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Sucursales.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA:": true});
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    sucursalesDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Sucursales.update({estado: estado}, { where: {id: id}})
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
