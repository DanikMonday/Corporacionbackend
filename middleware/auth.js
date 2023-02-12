const {verifyT} = require('../helper/genToken');

const cAuth = async (req, res, next) =>{
    try {
        const token = req.headers.autorization.split(' ').pop();
        const tokenData = await verifyT(token);

        if (tokenData._id){
            next();
        }else{
            res.status(409)
            res.send({ error: "No tiene permiso para acceder"});
        }
    } catch (error) {
        
    }
}