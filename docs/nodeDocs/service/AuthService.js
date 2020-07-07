'use strict';


/**
 * Autenticación
 * Obtención de privilegios
 *
 * body Users Usuario input (optional)
 * returns tokenResponse
 **/
exports.authenticate = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTksMzYwNjE0LCJleHAiOjE1OTIzNjQyMTR9.20VU1mS7WO3j87QsG_K36JHBCSoFsflITLzbJ6XW-XU"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

