const {Empleados}               = require('../../lib/database');
const Op                        = require('sequelize');
const bcrypt                    = require('bcrypt'); 
class EmpleadoServices{
    empleadosFindAll(){
        return new Promise((resolve, reject) => {
            Empleados.findAll({where:{estado:1}})
                .then(r => resolve({empleados: r})) 
                .catch(e => reject(e));
        });
    }
    empleadosFindById(id){
        return new Promise((resolve, reject) => {
            Empleados.findByPk(id)
                .then(r => resolve({'empleado':r}))
                .catch(e => reject(e));
        });
    }
    empleadosCreate(body){
        return new Promise((resolve, reject) => {
            Empleados.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    empleadosUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Empleados.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    empleadosDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Empleados.update({estado: estado}, { where: {id: id}})
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
module.exports = EmpleadoServices;
