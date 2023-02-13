const router = require('express').Router();
const UserModel = require('../models/User');
const {encrypt, compare} = require("../helper/handleBcrypt");
const {tokenS} = require('../helper/genToken');

//Registrar usuario
router.post("/sign", async (req, res)=> {
    try {
        const {name, email, password} = req.body;
        const passwordCryp = await encrypt(password); //Encriptamos contraseña
        const user = await UserModel.create({
            name, email, password: passwordCryp
        })
        res.send({data: user});
        //res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
});

//Ingresar usuario
router.post("/login", async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            res.status(404);
            res.send({error: "Usuario no encontrado"})
        }

        const lookPassword = await compare(password, user.password);
        const tokenSession = await tokenS(user);
        
        if(lookPassword){ //Revisamos que la contraseña es correcta 
            res.send({
                data: user,
                tokenSession,
            })
            return;
        }

        if(!lookPassword){
            res.status(409);
            res.send({ error: "Contraseña invalida" });
            return;
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;