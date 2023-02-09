/*const lookOrigin = (req, res, next) =>{
    const token = req.headers.authorization.split(' ').pop();
    if(toke === 'aquivalacontraseña'){
        next();
    }else{
        res.status(409);
        res.send({error: "Acesso Denegado"});
    }
}

module.exports = lookOrigin;*/

//COLOCAR EN LAS RUTAS QUE UNO QUIERE PROTEGER