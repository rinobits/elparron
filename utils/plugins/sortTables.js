const sortTables = (tables) => {
    const tableLen = tables.length;
    for(let i = 0; i < tableLen - 1; i++){
        for(let j = i+1; j < tableLen; j++){
            if(tables[i].torta_id > tables[j].torta_id){
                let swap = tables[i].torta_id;
                tables[i].torta_id = tables[j].torta_id;
                tables[j].torta_id = swap;
            }
        }
    }
    for(let i = 0; i < tableLen; i+=4){
        let tmp = [tables[i], tables[i+1], tables[i+2], tables[i+3]];
        for(let j = 0; j < 3; j++){
            for(let k = j + 1; k < 4; k++){
                if(tmp[i] > tmp[j]){
                    let swap = tmp[i];
                    tmp[i]   = tmp[j];
                    tmp[j]   = swap;
                }
            }
        }
        tables[i]   = tmp[0];
        tables[i+1] = tmp[1];
        tables[i+2] = tmp[2];
        tables[i+3] = tmp[3];
    }
}

module.exports = sortTables;