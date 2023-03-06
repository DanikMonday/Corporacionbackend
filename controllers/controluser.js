const UserModel = require("../models/User");
const { encrypt } = require("../helper/handleBcrypt");

//controlador visualizar usuarios registrados
const getUser = async (req, res) => {
    try {
        const getusers = await UserModel.find();
        res.json(getusers);
    } catch (error) {
        console.log(error);
    }
};

//controlador de Registro de usuario
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.send({ error: "Ya hay un usuario registrado con ese correo" })
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
        //res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
};

//Controlador modificar contraseña
const modUser = async (req, res) => {
    try {
        const { password } = req.body;
        const passwordCryp = await encrypt(password);
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, { password: passwordCryp });
        res.status(201).json("Contraseña actualizada");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { registerUser, modUser, getUser };