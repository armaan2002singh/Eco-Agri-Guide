import { RegisterModel } from "../models/Regandlogin";
import {UserModel} from "../models/User";

export const Register= async (req,res)=>{   //...............................Register function
    try {
        const user = await RegisterModel.findOne({email : req.body.email
        });

        if(user){
            res.status(404).send({
                message : "user already created with this email"
            });
            return;
        }
        let userInfo = await RegisterModel.create({
            ...req.body,
        });
        if(userInfo) res.status(202).send({
            message : "user created"
        });
        else res.status(404).send({
            message : "unable to created user"
        });
        } 
    catch (e) {
        res.status(404).send({error : e?.message});
    }
};

export const Login = async(req,res)=>{
    try {
        let user = await RegisterModel.findOne({
            email : req.body.email,
            password : req.body.password
        });

        if(user) res.status(200).send({
            id : user._id, 
            email : user.email
        });
        else res.status(404).send({
            message : "Wrong user or password"
        });
    } catch (e) {
        res.status(404).send({error : e?.message});

    }
};



//user operations


// export const CreateUser  = async(req,res)=>{ 
//     try{
//         const userData = await RegisterModel.create(req.body);
//         if(userData) res.status(201).send({message:"User Created"});
//         else res.status(404).send({message:"Unable to create user"});
//     }
//     catch(e){
//         res.status(404).send({error:e?.message});
//     }
// };
// export const UpdateUser  = async(req,res)=>{
//     try{
//         const userData = await RegisterModel.findByIdAndUpdate({_id:req.body._id},{firstname:req.body.firstname,lastname:req.body.lastname,address:req.body.address,email:req.body.email});
//         if(userData) res.status(200).send({message:"User Updated"});
//         else res.status(404).send({message:"Unable to update user"});
//     }
//     catch(e){
//         res.status(404).send({error:e?.message});
//     }
// };
// export const DeleteUser  = async(req,res)=>{
//     try{
//         const userData = await RegisterModel.deleteOne({_id:req.body.id});
//         if(userData?.deletedCount==1) res.status(200).send({message:"User Deleted"});
//         else res.status(404).send({message:"Unable to delete user"});
//     }
//     catch(e){
//         res.status(404).send({error:e?.message});
//     }
// };
// export const GetUsers = async(req,res)=>{
//     try{
//         const userData = await RegisterModel.find();
//         res.status(200).send({userData});
        
//     }
//     catch(e){
//         res.status(404).send({error:e?.message});
//     }
// } ;