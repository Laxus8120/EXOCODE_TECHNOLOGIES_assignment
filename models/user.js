const  mongoose = require('mongoose');
const {isEmail } = require('validator');
const {SALT} = require('../config/serverConfig');
const  bcrypt = require('bcrypt');

const userSchema  = new mongoose.Schema({
    Email : {
        type : String,
        required : true,
        unique: true,
        validate : [isEmail,'Invalid email format'] 
    },
    Password :{
        type : String,
        required : true
    }
},{timestamps:true});

userSchema.pre('save', async function (next){
try {
        const user = this;
        const encryptedPassword =  bcrypt.hashSync(user.Password, SALT);
        user.Password = encryptedPassword;
        return next();
} catch (error) {
    console.log(error);
    next(error)
}
})

const User  = mongoose.model('User', userSchema);
module.exports  = User;