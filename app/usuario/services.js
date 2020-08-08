const mysqlConnection = require('../../lib/database/database');
const bcrypt    = require('bcrypt');
class UsuarioServices{
    usuarioFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    usuario.id,
                    usuario.userName  AS usuario_userName, 
                    usuario.createdAt AS usuario_creadoEl,
                    perfil.id         AS perfil_id,
                    perfil.nombre     AS perfil_nombre,
                    usuario.estado    AS estado
                FROM usuario
                    INNER JOIN perfil
                        ON usuario.perfil_id  = perfil.id
            WHERE usuario.estado=1;
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
                SELECT
                    usuario.id,
                    usuario.userName  AS usuario_userName, 
                    usuario.createdAt AS usuario_creadoEl,
                    perfil.id         AS perfil_id,
                    perfil.nombre     AS perfil_nombre,
                    usuario.estado    AS estado
                FROM usuario
                    INNER JOIN perfil
                        ON usuario.perfil_id  = perfil.id
                WHERE usuario.id = ?;
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
            bcrypt.hash(body.password, 10)
            .then(hash => {
                const id           = 0
                const userPassword = hash;
                const user         = body.userName;
                const perfil_id    = body.perfil_id;
                const query = `
                    SET @id = ?;
                    SET @userName  = ?;
                    SET @password  = ?;
                    SET @perfil_id = ?;
                    CALL addOrEditUsuario(@id, @userName, @password, @perfil_id);
                `;
                mysqlConnection.query(query, [id, user, userPassword, perfil_id], (e) => {
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
                    var { userName, password, perfil_id }  = body;
                    if(password){
                        bcrypt.hash(password, 10) 
                        .then(hash => {
                            password = hash
                            const query = `
                                SET @id           = ?;
                                SET @userName     = ?;
                                SET @password     = ?;
                                SET @perfil_id    = ?;
                                CALL addOrEditUsuario(@id, @userName, @password, @perfil_id);
                            `;
                            mysqlConnection.query(query, [id, userName, password, perfil_id], (e) => {
                                if(!e){
                                    resolve('Done');
                                }else{
                                    reject(e);
                                }
                            })
                        })
                        .catch(e => reject(e));
                    }else{
                        password = "";
                        const query = `
                            SET @id           = ?;
                            SET @userName     = ?;
                            SET @password     = ?;
                            SET @perfil_id    = ?;
                            CALL addOrEditUsuario(@id, @userName, @password, @perfil_id);
                        `;
                        mysqlConnection.query(query, [id, userName, password, perfil_id], (e) => {
                            if(!e){
                                resolve('Done');
                            }else{
                                reject(e);
                            }
                        })
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
