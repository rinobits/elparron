const mysqlConnection = require('../../../lib/database/database');
const bcrypt    = require('bcrypt'); 
const jwt       = require('jsonwebtoken');
const {config: { authJwtSecret }} = require('../../../config');

class AuthServices{
    auth(username, password){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM usuario WHERE userName = ?`, [username], (err, usuario) => {
                if(!err){
                    bcrypt.compare(password, usuario[0].userPassword)
                        .then(r => {
                            if(r == true){
                                const payload = { check: true, id: usuario[0].id, nombre: username };
                                const token   = jwt.sign(payload, authJwtSecret, {expiresIn:'1h'});
                                resolve(token);
                            }else{
                                reject("can't authenticate") 
                            }
                        })
                        .catch(e => {
                            reject("can't authenticate");
                        })
                }
                else{
                    reject("can't authenticate");
                }
            });
                    
        });
    }
}
module.exports = AuthServices;