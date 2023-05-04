const User = require('../models/user');


class UserRepository {

    async createUser(data){

        try {
            const user = await User.create({Email : data.Email, Password : data.Password});
            return user;
        } catch (error) {
            console.log('Something went wrong in creating a user');
            throw error;
        }
    } 

    async getByEmail(Email){
        try {
            const user = await User.findOne({ Email: Email });
        return user;
        } 
        catch (error) {
            console.log('Something went wrong in getting user email');
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await User.findOne({userId});
            return user;
        } catch (error) {
            console.log("Something went wrong in rep layer of getByEmail repo function");
            throw error;
        }        
    }
}

module.exports  = UserRepository; 