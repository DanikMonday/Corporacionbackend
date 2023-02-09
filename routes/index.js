const express = require("express");
const router = express.Router();
const fs = require('fs');//fileSystem para leer el directorio

const pathRouter = `${__dirname}`;

const removeExten = (a) =>{
    return a.split('.').shift();//Toma el nombre y lo divide desde el punto volviendolo un array y con el método shift elimina el nombre pero lo retorna
}

fs.readdirSync(pathRouter).filter((file) =>{
    const fileNoExt = removeExten(file);
    const noUse = ['index'].includes(fileNoExt);
    if(!noUse){
        router.use(`/${fileNoExt}`, require(`./${fileNoExt}`))
        console.log("Cargando Ruta", fileNoExt);
    }    
});

module.exports = router;