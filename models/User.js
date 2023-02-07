const  mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email:{type: String},
    password:{type: String}
},{
    versionKey : false
});

module.exports = mongoose.model('Users', UserSchema);