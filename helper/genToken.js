const jwt = require("jsonwebtoken");

const tokenS = async (user) => {//Genera un token firmado
    return jwt.sign(
        {
            _id: user._id, //firmamos estos dos atributos con el token
            role: user.role
        },
        JWT_SECRET = (12345),
        {
            expiresIn: "1h"
        }
    );
};

const verifyT = async (token) =>{
    try {
        return jwt.verify(token, JWT_SECRET = (12345));
    } catch (error) {
        return null;
    }
}

module.exports = { tokenS };