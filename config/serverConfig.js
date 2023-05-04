const dotenv   = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

module.exports = {

    PORT : process.env.PORT,
    SERVER : process.env.SERVER,
    SALT : bcrypt.genSaltSync(10),
    JWT_KEY : process.env.JWT_KEY
}