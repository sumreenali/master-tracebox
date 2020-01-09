const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierScehma = new Schema({
    id:{
        type:Number
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
});

module.exports = Supplier = mongoose.modal('supplier', SupplierSchema);