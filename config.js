require('dotenv').config();
const config = {
    db:                   process.env.DB_NAME,
    user:                 process.env.DB_USER,
    password:             process.env.DB_PASSWORD,
    _host:                process.env.DB_HOST,
    port:                 process.env.PORT,
    dbPort:               process.env.DB_PORT,
    defaultAdminName:     process.env.DEFAULT_ADMIN_USER,
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
    authJwtSecret:        process.env.AUTH_JWT_SECRET,
    cors:                 process.env.CORS,
    dev:                  process.env.NODE_ENV !== 'production'
};

module.exports = {config};

