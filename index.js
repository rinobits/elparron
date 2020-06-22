// packages
const express                             = require('express');
const cors                                = require('cors');
// imports & consts
const routes                              = require('./app/routes'); 
const {config}                            = require('./config');
const notFoundHandler                     = require('./utils/middlewares/notFoundHandler');
const {logError, wrapError, errorHandler} = require('./utils/middlewares/errorsHandlers');
const app                                 = express();

// cors
if(config.dev){
    app.use(cors());
} else{
    const whitelist = config.cors.split(';');
    const corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    };
    app.use(cors(corsOptions));
}

// bodyparser
app.use(express.json());

// routes
routes(app);

// catch errors
app.use(notFoundHandler);
app.use(logError); 
app.use(wrapError); 
app.use(errorHandler); 

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
    console.log(`Environment: ${config.dev?'development':'production'}`);
});

module.exports = app;