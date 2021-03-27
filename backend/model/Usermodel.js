import mongoose from 'mongoose';
// var Sequelize = require('sequelize');

const SignUp_Data=new mongoose.Schema(
    {
        UserName:{type:String},
        email:{type:String},
        password:{type:String},
        confirm_Password:{type:String},
    },
    {
        timestamp:true,
    }
)

const User_Data=mongoose.model('User',SignUp_Data);
export default User_Data;