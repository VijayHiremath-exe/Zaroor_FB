const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');
const FoodDataModel = require('./models/FoodData');
const GroceriesDataModel = require('./models/GroceriesData');
const MedicinesDataModel = require('./models/MedicinesData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/user_log_data');

app.post('/register', (req, res)=>{
    // To post / insert data into database.


    const {email, password} = req.body; 
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

//app.post('/land',(req,gres))

//   Food Api
app.post('/food/add', (req, res)=>{
    FoodDataModel.insertMany(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

app.get('/food', (req, res)=>{
    FoodDataModel.find({})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

//   Groceries Api
app.post('/groceries/add', (req, res)=>{
    GroceriesDataModel.insertMany(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

app.get('/groceries', (req, res)=>{
    GroceriesDataModel.find({})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

//   Medicines Api
app.post('/medicines/add', (req, res)=>{
    MedicinesDataModel.insertMany(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

app.get('/medicines', (req, res)=>{
    MedicinesDataModel.find({})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001"); 

}); 