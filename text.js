const mongoose = require('mongoose');

const r = new mongoose.Schema({
    amount:{
        type:Number,
    },
    category:{
        type:String,
    },
    date:{
        type:String,
    }
})
const Exp = mongoose.model('Exp',r);

const userDetails = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
})
const User = mongoose.model('User',userDetails);    

module.exports = {Exp,User};
