const bcrypt = require('bcryptjs');//Usamos la libreria que instalamos

//encriptamos
const encrypt = async (contraPlane) =>{//Recibimos la contraseña plana
    const hash = await bcrypt.hash(contraPlane, 10);//La pasamos y usamos un algoritmo de aleatoriedad para ser más dificil predecir
    return hash;
};

//Comparamos
const compare = async (passwordPlain, hashPassword) =>{
    return await bcrypt.compare(passwordPlain, hashPassword);
}

module.exports = {encrypt, compare};