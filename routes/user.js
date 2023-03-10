// Permite utilizar el manejador de las rutas 
const router = require('express').Router();
const { encrypt } = require("../helper/handleBcrypt");
const UserModel = require('../models/User');
const { registerUser } = require('../controllers/controluser');
const cAuth = require("../middleware/auth");
const cRole = require("../middleware/role");
const { compare } = require("../helper/handleBcrypt");
const { tokenS } = require('../helper/genToken');
const { recoveryMail } = require('../mail/configmail');

//Registrar usuario como Administrador
router.post("/sign", /*cAuth, cRole(['admin']), */registerUser);

//Ingresar usuario
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.send({ message: "Usuario no encontrado" })
            res.status(404);
        }else{
        
        const lookPassword = await compare(password, user.password);
        const tokenSession = await tokenS(user);

        if (lookPassword) { //Revisamos que la contraseña es correcta y retornamos los siguientes datos
            res.send({
                data: user,
                token: tokenSession,
                message: "Bienvenido"
            })                      
        }

        if (!lookPassword) {
            res.send({message: "Contraseña inválida"});
            res.status(409);
            return;
        }}

    } catch (error) {
        console.log(error);
    }
});

//Correo recuperar contraseña
router.post("/recovery", async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        let pass = 1254636548 * Math.random(5);
        pass = "a" + Math.floor(Math.random() * pass);
        console.log(pass);
        const passwordCryp = await encrypt(pass);
        const newPass = await UserModel.findByIdAndUpdate(user.id, { password: passwordCryp });
        recoveryMail(user, pass);
        res.send({message:"Correo enviado"});
    } else {
        res.send({ error: "No se encuentra registrado el correo ingresado" });
    };
});

module.exports = router;