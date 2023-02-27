const  mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email:{type: String, required: true, unique: true},
    role: {type: String, enum:['user', 'admin'], default: 'admin'},
    password:{type: String, required: true}
},{
    versionKey : false
});

module.exports = mongoose.model('Users', UserSchema);