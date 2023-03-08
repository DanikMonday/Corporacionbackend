// declarar la dependencia 
const mongoose = require("mongoose");

// se crea un esquema(estructura de datos del modelo) para poder crear un modelo en mongoose
const FormSchema = mongoose.Schema({
    type: {type:String},
    nit_cedula: {type: String},
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    destination_don: {type: String},
    certification: {type: String, default: 'Si'},
    aditional: {type: String},
    state: {type: String, default: 'Verificando'}
}, {
    // Para generar la fecha y hora en que se generó el registro
        timestamps: true,
    // muestra la versión del dato
        versionKey: false
});

// Exportamos el modelo de mongoose y establecemos el nombre que va a tener la coleccion en
//  la base de datos y el esquema que va a seguir
module.exports = mongoose.model('Form', FormSchema); 
