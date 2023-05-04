const express  = require('express');
const app  = express();
const connect  = require('../config/database');
const {PORT}  = require('../config/serverConfig');
const bodyParser = require('body-parser');

const apiRoutes = require('../routes/index');

const startServer  = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);

    app.listen(PORT,async () =>{
        console.log(`Server Started at ${PORT}`);
        await connect();
        console.log('Mongo Server connected');
    })
}

startServer();