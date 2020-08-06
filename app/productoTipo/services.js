const mysqlConnection = require('../../lib/database/database');

class ProductoTipoServices{
    productoTipoFindAll(){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM productoTipo WHERE estado = 1`
            mysqlConnection.query(query, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    productoTipoFindById(id){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM productoTipo WHERE id  = ?`;
            mysqlConnection.query(query, [id], (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            });
        });
    }
    productoTipoCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            if(!id) id = 0;
            var query = `
                SELECT * FROM productoTipo
                where id = ?;
            `
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query      = `
                        SET @id              = ?;
                        SET @nombre          = ?;
                        CALL addOrEditProductoTipo(@id, @nombre);
                    `;
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, nombre], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, nombre], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }
                }else{
                    reject(err);
                }
            })
        });
    }
    productoTipoDeleteById(id, body){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE productoTipo SET estado = ? WHERE id = ?`, [body.estado, id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = ProductoTipoServices;
