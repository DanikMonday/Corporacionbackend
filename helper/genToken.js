const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenS = async (user) => {//Genera un token firmado
    return jwt.sign(
        {
            _id: user._id, //firmamos estos tres atributos con el token
            role: user.role,
            names: user.name
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );
};

const verifyT = async (token) =>{
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error);
        return null;        
    }
}

module.exports = { tokenS, verifyT };