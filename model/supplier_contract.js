const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierContractScehma = new Schema({
    id:{
        type:Number
    },
    supplier_name:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    },
    product:{
        type:String,
        required:true,
        value:[String]
    }

    product: [{
        decription: {
            type: String,
            required:true,
        },
        category : {
            type: String,
            required:true,
        },
        quantity: {
            type: String,
            required:true,
        },
        price: {
            type: Boolean,
            required:true,
        }
    },] 

    from_location:{
        type:String,
        required: true
    },
    to_location:{
        type:String,
        required: true
    },
    total_amount:{
        type: Decimal128,
    },
    paid_status:{
        type:Boolean,
        required:true
    },
    store_url:{
        type: String,
        required: true
    },
    contact_number:{
        type: Number,
        required: true

    },
    email:{
        type:String,
        required:true
    },

});


module.exports = SupplierContract = mongoose.modal('supplier_contract', SupplierContractSchema);