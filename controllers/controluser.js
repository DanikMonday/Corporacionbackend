const UserModel = require("../models/User");
const { encrypt } = require("../helper/handleBcrypt");

//controlador de Registro de usuario
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.send({ message: "Ya hay un usuario registrado con ese correo" })
            res.status(406);
        } else {
            const passwordCryp = await encrypt(password); //Encriptamos contraseña
            const ruser = await UserModel.create({
                name, email, password: passwordCryp, role
            });
            res.send({
                data: ruser,
                message: "Usuario Registrado"
            });
        }        
    } catch (error) {
        console.log(error);
    }
};

module.exports = { registerUser};