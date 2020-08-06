const mysqlConnection = require('../../lib/database/database');

class SaborServices{
    saborFindAll(){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM sabor WHERE estado = 1`, (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    saborFindById(id){
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM sabor WHERE ID = ?`, [id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    saborCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            const { nombre } = body;
            var query = `
                SELECT * FROM sabor
                WHERE id = ?;
            `;
            mysqlConnection.query(query, [id], (err, row) => {
                query = `
                    SET @id     = ?;
                    SET @nombre = ?;
                    CALL addOrEditSabor(@id, @nombre);
                `;
                if(row.length == 0){
                    id = 0;
                    mysqlConnection.query(query, [id, nombre], (err, rows, fields) => {
                        if(!err){
                            resolve('Done');
                        }else{
                            reject(err);
                        }
                    });
                }else{
                    mysqlConnection.query(query, [id, nombre], (err, rows, fields) => {
                        if(!err){
                            resolve('Done');
                        }else{
                            reject(err);
                        }
                    });
                }
            });
        });
    }
    saborDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE sabor SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = SaborServices;
