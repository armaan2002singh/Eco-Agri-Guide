import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }

});

const UserModel = mongoose.model("Users",UserSchema);

export default UserModel