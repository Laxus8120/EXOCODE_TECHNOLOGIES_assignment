const mongoose  = require('mongoose');
const {SERVER}  = require('./serverConfig');

const connect  = async () =>{

    await mongoose.connect(SERVER);
} 
module.exports  = connect;