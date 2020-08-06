const mysqlConnection = require('../../lib/database/database');

class TortaServices{
    tortaFindAll(){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    torta.id,
                    torta.masaTipo_id, masaTipo.nombre AS masaTipo_nombre,
                    torta.masaSabor_id, masaSabor.nombre AS masaSabor_nombre, 
                    torta.sabor_id, sabor.nombre AS sabor_nombre,
                    torta.estado
                FROM torta
                    INNER JOIN masaTipo
                        ON torta.masaTipo_id  = masaTipo.id
                    INNER JOIN masaSabor
                        ON torta.masaSabor_id = masaSabor.id
                    INNER JOIN sabor
                        ON torta.sabor_id     = sabor.id
                    AND torta.estado = 1;
            `;
            mysqlConnection.query(query, (err, rows) => {
                if(!err){
                    resolve(rows);
                }else{
                    reject(err);
                }
            })
        });
    }
    tortaFindById(id){
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    torta.id,
                    torta.masaTipo_id, masaTipo.nombre AS masaTipo_nombre,
                    torta.masaSabor_id, masaSabor.nombre AS masaSabor_nombre, 
                    torta.sabor_id, sabor.nombre AS sabor_nombre,
                    torta.estado
                FROM torta
                    INNER JOIN masaTipo
                        ON torta.masaTipo_id  = masaTipo.id
                    INNER JOIN masaSabor
                        ON torta.masaSabor_id = masaSabor.id
                    INNER JOIN sabor
                        ON torta.sabor_id     = sabor.id
                    AND torta.id = ?;
            `;
            mysqlConnection.query(query, [id], (err, rows) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    tortaCreateOrUpdateById(id = 0, body){
        return new Promise((resolve, reject) => {
            var query = `
                SELECT * FROM torta
                WHERE id = ?;
            `;
            mysqlConnection.query(query, [id], (err, row) => {
                if(!err){
                    query = `
                        SET @id = ?;
                        SET @masaTipo_id = ?;
                        SET @masaSabor_id = ?;
                        SET @sabor_id = ?;
                        CALL addOrEditTorta(@id, @masaTipo_id, @masaSabor_id, @sabor_id);
                    `;
                    if(row.length == 0){
                        id = 0;
                        mysqlConnection.query(query, [id, body.masaTipo_id, body.masaSabor_id, body.sabor_id], (err) => {
                            if(!err){
                                resolve('Done');
                            }else{
                                reject(err);
                            }
                        });
                    }else{
                        mysqlConnection.query(query, [id, body.masaTipo_id, body.masaSabor_id, body.sabor_id], (err) => {
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
    tortaDeleteById(id, body){
        return new Promise((resolve, reject) => {
            if(!body) var estado = 0;
            else      var estado = body.estado;
            mysqlConnection.query(`UPDATE torta  SET estado = ? WHERE id = ?`, [estado, id], (err, rows, fields) => {
                if(!err){
                    resolve(rows[0]);
                }else{
                    reject(err);
                }
            });
        });
    }
    
}
module.exports = TortaServices;
