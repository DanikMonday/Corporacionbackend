const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({//Creamos el esquema 
    type: { type:String},
    nit_cedula: {type: Number},
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    destination_dona: {type: String},
    certification: {type: String},
    aditional: {type: String} 
}, {
        timestamps: true,
        versionKey: false
});

module.exports = mongoose.model('Form', FormSchema); //Importamos como un modelo