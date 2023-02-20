const { verifyT } = require("../helper/genToken");
const userModel = require("../models/User");

const checkRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyT(token);
        const userData = await userModel.findById(tokenData._id);

        if([].concat(roles).includes(userData.role)){
            next();
        }else{
            res.status(409);
            res.send({ error: "No tiene permisos para acceder"})   
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = checkRole;
