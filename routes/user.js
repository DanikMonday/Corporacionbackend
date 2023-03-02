// Permite utilizar el manejador de las rutas 
const router = require('express').Router();
const { encrypt } = require("../helper/handleBcrypt");
const UserModel = require('../models/User');
const { registerUser, modUser, getUser } = require('../controllers/controluser');
const cAuth = require("../middleware/auth");
const { compare } = require("../helper/handleBcrypt");
const { tokenS } = require('../helper/genToken');
const { recoveryMail } = require('../mail/configmail');


//Mostrar usuarios registrados
router.get("/users", /* cAuth,*/ getUser);

//Registrar usuario como Administrador
router.post("/sign",/* cAuth,*/ registerUser);

//Ingresar usuario
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.send({ error: "Usuario no encontrado" })
            res.status(404);
        }

        const lookPassword = await compare(password, user.password);
        const tokenSession = await tokenS(user);

        if (lookPassword) { //Revisamos que la contraseña es correcta 
            res.send({
                data: user,
                tokenSession,
            })
            return;
        }

        if (!lookPassword) {
            res.send({ error: "Contraseña invalida" });
            res.status(409);
            return;
        }

    } catch (error) {
        console.log(error);
    }
});

//Modificar Contraseña 
router.put("/usermod/:id", /*cAuth,*/ modUser);

//Correo recuperar contraseña
router.post("/recovery", async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        let a = 1254636548 * Math.random(5);
        a = "a" + Math.floor(Math.random() * a);
        console.log(a);
        const passwordCryp = await encrypt(a);
        const newPass = await UserModel.findByIdAndUpdate(user.id, { password: passwordCryp });
        recoveryMail(a);
        res.send("Correo enviado");
    } else {
        res.send({ error: "No se encuentra registrado el correo" });
    };
});

module.exports = router;