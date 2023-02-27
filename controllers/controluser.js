const UserModel = require("../models/User");
const { encrypt } = require("../helper/handleBcrypt");

//controlador visualizar usuarios registrados
const getUser = async (req, res) =>{
    try {
        const getusers = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

//controlador de Registro de usuario
const registerUser = async (req, res) =>{
    try {
        const { name, email, password, role } = req.body;
        const passwordCryp = await encrypt(password); //Encriptamos contraseña
        const user = await UserModel.create({
            name, email, password: passwordCryp, role
        });
        res.send({ data: user });
        //res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
};

//Controlador modificar contraseña y correo
const modUser = async (req, res) =>{
    try {
        const {password, email} = req.body;
        const passwordCryp = await encrypt(password);
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {email: email, password:passwordCryp});
        res.status(200).json("Usuario actualizado")
    } catch (error) {
        console.log(error);
    }
};

module.exports = {registerUser, modUser, getUser};