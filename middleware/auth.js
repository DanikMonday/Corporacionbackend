const {verifyT} = require('../helper/genToken');

const cAuth = async (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyT(token);
        console.log(tokenData);

        if (tokenData._id){
            next();
        }else{
            res.status(409)
            res.send({ messsage: "No tiene permiso para acceder"});
        }
    } catch (error) {
        console.log(error);
        res.status(409)
        res.send({ error: "No tiene permiso para acceder"});
    }
}

module.exports = cAuth;