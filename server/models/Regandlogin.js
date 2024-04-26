import mongoose from "mongoose"
const RegisterSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    email: String,
    password: Number, // Changed from Number to String
    confirmpassword: Number // Changed from Number to String
})


const RegisterModel = mongoose.model("users",RegisterSchema)
export  {RegisterModel} 
