const mysqlConnection = require('../../lib/database');
const bcrypt    = require('bcrypt');
class UsuarioServices{
    usuarioFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM usuario`, (e, r) => {
                if(!e){
                    resolve(r[0]);
                }
                else{
                    reject(e);
                }
            });
        })
    }
    usuarioFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM usuario WHERE id = ?`, [id], (e, r) => {
                if(!e){
                    resolve(r[0]);
                }
                else{
                    reject(e);
                }
            });
        });
    }
    usuarioCreate(body){
        return new Promise((resolve, reject) => {
            bcrypt.hash(body.userPassword, 10)
            .then(hash => {
                const password = hash;
                const user     = body.userName;
                const query = `
                    SET @id = ?;
                    SET @userName = ?;
                    SET @userPassword = ?;
                    CALL addOrEditUsuario(@id, @userName, @userPassword);
                `;
                mysqlConnection.query(query, [user, password], (e) => {
                    if(!e){
                        resolve('Done');
                    }else{
                        reject(e);
                    }
                })
            })
            .catch(e => reject(e));
        });
    }
    usuarioUpdateById(id, body){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM usuario WHERE id=?`, [id], (e, u) => {
                if(!e){
                    if(body.userPassword){
                        bcrypt.hash(body.userPassword, 10) 
                        .then(hash => body.userPassword = hash)
                        .catch(e => reject(e));
                    }
                    const { userName, userPassword }  = body;
                    const query = `
                        SET @id           = ?
                        SET @userName     = ?;
                        SET @userPassword = ?;
                        CALL addOrEditUsuario(@id, @userName, @userPassword);
                    `;
                    mysqlConnection(query, [userName, userPassword], (e) => {
                        if(!e){
                            resolve('Done');
                        }else{
                            reject(e);
                        }
                    })
                }else{
                    reject(e);
                }
            })
        });
    }
    usuarioDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            const query = `
                UPDATE usuario
                SET @estado = ?
                WHERE @id = ?;
            `
              mysqlConnection.query(query, [estado, id], (e, r) => {
                if(!e){
                    resolve(rows[0]);
                }else{
                    reject(e);
                }
            });
        });
    }
    
}
module.exports = UsuarioServices;
