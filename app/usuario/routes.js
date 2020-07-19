// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                        
const control                                = require('./responses');
const { userSchemaCreate, userSchemaUpdate } = require('./schemas');
const { idSchema, userSchemaDelete }         = require('./schemas');
const validatorHandler                       = require('../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',      verifyToken, control.usersFindAll());
router.get('/getbyid/:id', verifyToken, validatorHandler(idSchema, 'params'),        control.usersFindById());
// admin
router.post('/create',      control.usersCreate());
router.put('/update/:id',  verifyToken, validatorHandler(idSchema, 'params'),        validatorHandler(userSchemaUpdate, 'body'), control.usersUpdateById());
router.put('/delete/:id',  verifyToken, validatorHandler(idSchema, 'params'),        validatorHandler(userSchemaDelete, 'body'), control.usersDeleteById());
module.exports = router;
