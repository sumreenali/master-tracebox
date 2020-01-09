const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManufacturerScehma = new Schema({
    id:{
        type:Number
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
});

module.exports = Manufacturer = mongoose.modal('manufacturer', ManufacturerSchema);