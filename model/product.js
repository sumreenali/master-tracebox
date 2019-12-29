const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id:{
        type:Number
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
   
    
});

module.exports = Product = mongoose.model('product', ProductSchema);