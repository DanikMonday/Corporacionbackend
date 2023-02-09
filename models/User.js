const  mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email:{type: String},
    role: {type: String, default: 'admin'},
    password:{type: String}
},{
    versionKey : false
});

module.exports = mongoose.model('Users', UserSchema);