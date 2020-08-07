const mysqlConnection = require('../../lib/database/database');
const bcrypt    = require('bcrypt');
class UsuarioServices{
    usuarioFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM vw_usuarioPerfil
                WHERE estado = 1
            `;
            mysqlConnection.query(query, (e, r) => {
                if(!e){
                    resolve(r);
                }
                else{
                    reject(e);
                }
            });
        })
    }
    usuarioFindById(id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM vw_usuarioPerfil
                WHERE id = ?;
            `;
            mysqlConnection.query(query, [id], (e, r) => {
                if(!e){
                    resolve(r);
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
                const id       = 0
                const userPassword = hash;
                const user     = body.userName;
                const query = `
                    SET @id = ?;
                    SET @userName = ?;
                    SET @password = ?;
                    CALL addOrEditUsuario(@id, @userName, @password);
                `;
                mysqlConnection.query(query, [id, user, userPassword], (e) => {
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
    usuarioUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM usuario WHERE id=?`, [id], (e, u) => {
                if(!e){
                    var { userName, userPassword }  = body;
                    if(userPassword){
                        bcrypt.hash(userPassword, 10) 
                        .then(hash => {
                            userPassword = hash
                            const query = `
                                SET @id           = ?;
                                SET @userName     = ?;
                                SET @password = ?;
                                CALL addOrEditUsuario(@id, @userName, @password);
                            `;
                            mysqlConnection.query(query, [id, userName, userPassword], (e) => {
                                if(!e){
                                    resolve('Done');
                                }else{
                                    reject(e);
                                }
                            })
                        })
                        .catch(e => reject(e));
                    }
                }else{
                    reject(e);
                }
            });
        });
    }
    usuarioDeleteById(id, body){
        return new Promise((resolve, reject) => {
            const query = `
                UPDATE usuario
                SET estado = ?
                WHERE id   = ?;
            `;
              mysqlConnection.query(query, [body.estado, id], (e, r) => {
                if(!e){
                    resolve(r);
                }else{
                    reject(e);
                }
            });
        });
    }
    
}
module.exports = UsuarioServices;
