const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
    type: { type:String},
    nit_cedula: {type: Number},
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    donation_name: {type: String},
    aditional: {type: String} 
}, {
        timestamps: true,
        versionKey: false
});

module.exports = mongoose.model('Form', FormSchema);