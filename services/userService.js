const UserRepository = require('../repository/userRepo');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcrypt')

const {JWT_KEY} = require('../config/serverConfig');

class UserService  {

    constructor(){
        this.userRepository  = new UserRepository();
    }

    async create(data){

        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log('something went wrong in creating user in service layer');
            throw(error);
        }
    }


    async signIn(Email,Password){
        try {
            // step 1 --> fetch the user using the email
            const user = await this.userRepository.getByEmail(Email);
            // step 2--> compare incoming plain password with store encrypted password
            const passwordMatch = this.checkPassword(Password,user.Password);
            if(!passwordMatch){
                console.log("Password does't match");
                throw { error : " Incorrect Password"};
            }
            // step 3 --> if password match then create a token and send it to the user 
            const newJWT = this.createToken({Email: user.Email, id : user._id});
            return newJWT;
        } catch (error) {
            console.log('something went wrong in SignIn user in service layer');
            throw(error);
        }
    }

    async isAuthenticated(token) {   
        try {
            
            const response = this.verifyToken(token);
            if(!response){
                throw { error : 'Invalid Token '};
            }
            const user =  this.userRepository.getById(response.id);
            if(!user){
                throw {error : "No user with the corresponding token exist"}
            }
            return user.id;
        } catch (error) {
            console.log("something went wrong in authentication process");
            throw error;
        }
    }



    checkPassword(userInputPlainPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparission");
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn : '1d'});
            return result;

        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }
}

module.exports  = UserService;