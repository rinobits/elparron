const {Users}                   = require('../../lib/database');
const bcrypt                    = require('bcrypt'); 
class UserServices{
    usersFindAll(){
        return new Promise((resolve, reject) => {
            Users.findAll({where:{estado:1}})
                .then(r => resolve({users: r})) 
                .catch(e => reject(e));
        });
    }
    usersFindById(id){
        return new Promise((resolve, reject) => {
            Users.findByPk(id)
                .then(r => resolve({'user':r}))
                .catch(e => reject(e));
        });
    }
    usersCreate(body){
        return new Promise((resolve, reject) => {
            bcrypt.hash(body.userPassword, 10)
            .then(hash => {
                body.userPassword = hash;
                Users.create(body)
                .then(r => resolve(r))
                .catch(e => reject(e));
                
            })
            .catch(e => reject(e));
        });
    }
    usersUpdateById(id, body){
        return new Promise((resolve, reject) => {
            if(body.userPassword){
                bcrypt.hash(body.userPassword, 10) 
                .then(hash => body.userPassword = hash)
                .catch(e => reject(e));
            }
            Users.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA:": true});
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    usersDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Users.update({estado: estado}, { where: {id: id}})
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
module.exports = UserServices;
