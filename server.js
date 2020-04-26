const express = require('express');
const Ddos = new require('ddos')({burst: 10, limit: 15});
const logger = require('log4js').configure({
    appenders: {errors: {type: 'file', filename: 'errors.log' }},
    categories: {default: {appenders: ['errors'], level: 'error'}}
}).getLogger('errors');
 
const app = express();

app.use(express.json());
app.use(require('cors')());
app.use(require('helmet')());
app.use(Ddos.express);
app.use('/api', require('./routes/routerIndex'));

app.use((error, req, res, next) =>{
    logger.error(error);
    return res.status(500).json({
        message: "There was an internal server error."
    })
});


module.exports = app;