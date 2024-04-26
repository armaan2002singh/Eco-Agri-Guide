import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import axios from 'axios'
import { CreateUser, DeleteUser, GetUsers, UpdateUser, login } from './controllers/User.js';
import {RegisterModel} from './models/Regandlogin.js'
dotenv.config();
// const express = require('express');
// const axios = require('axios');
var app = express();
app.use(express.json());
app.use(cors());


// user operations 
app.post('/user',CreateUser);
app.put('/user',UpdateUser);
app.delete('/user',DeleteUser);
app.get('/user',GetUsers);
app.post("/login", login)

app.post('/register', async (req, res) => {
    const { email, password, confirmpassword } = req.body;
  
    try {
      // Check if user with the same email already exists
      const existingUser = await RegisterModel.findOne({ email });
  
      if (existingUser) {
        // User with the same email already exists, return an error response
        return res.status(400).json({ error: 'User with this email already exists' });
      }
  
      // Check if password and confirm password match
      if (password !== confirmpassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
  
      // Create a new user if validation passes
      const newUser = await RegisterModel.create(req.body);
      res.json(newUser);
    } catch (error) {
      // Log the error for debugging purposes
      console.error(error);
  
      // Return a generic error message to the client
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// app.post('/login',(req, res)=>{
//     const {email, password} = req.body;
//     RegisterModel.findOne({ email : email})
//     .then(user =>{
//         if(user){
//             if(user.password == password){
//                 res.json("success")
//             }
//             else{
//                 res.json("the password is incorrect")
//             }
//         }
//         else{
//             res.json("no record existed")
//         }
//     })
// });

mongoose.connect(process.env.DB_URL)
.then((d)=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log('Server running at port : '+process.env.PORT);
    });
})
.catch((e)=>{
    console.log("Database connection error");
});


