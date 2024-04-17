const bp = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const {Exp,User} = require('./text.js');
const r = express();
async function conectToDB(){
    try{
        await mongoose.connect('mongodb+srv://vidyadharank:kvd2000@cluster0.1ezfxjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            r.listen(3000, function(){
            console.log("server is connected");
        });
    }
    catch(err){
        console.log("err");
    }
}
conectToDB();
r.post('/add_expense',function(req,res){
    try{
        Exp.create({
            "amount": req.body.amount,
            "category": req.body.category,
            "date": req.body.date
        })
        response.status(201).json({
            "status":"success",
            "message":"entry successfully added"
        })
    }catch(error){
        console.log("Failed!!");
        response.status(404).json({
            "status":"failed",
            "message":"entry not added",
            "error" : error
        })
    }
})