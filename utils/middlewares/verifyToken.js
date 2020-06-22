// packages
const jwt  = require('jsonwebtoken');
const boom = require('@hapi/boom');

// imports & conts
const {config:{authJwtSecret}}  = require('../../config');

module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader != undefined){ 
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, authJwtSecret, (e, auth) => {
            if(e){
                e = boom.unauthorized(e);
                next(e);
            }else{
                next();
            }
        })
    }else{
        let e = boom.unauthorized('Unauthorized');
        next(e.output.payload);
    }
}


