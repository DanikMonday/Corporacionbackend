const express = require("express");
const router = express.Router();
const fs = require('fs');//fileSystem para leer el directorio en el que se encuentra

const pathRouter = `${__dirname}`;

//Toma el nombre y lo divide desde el punto volviendolo un array y con el método shift elimina el nombre pero lo retorna
const removeExten = (a) =>{
    return a.split('.').shift();
}

// Lee el  directorio en donde estoy y me filtra el archivo para hacer rutas dinamicas
fs.readdirSync(pathRouter).filter((file) =>{//Se la ruta sin extensión y así poder agregar rutas sin modificaciones
    const fileNoExt = removeExten(file);
    const noUse = ['index'].includes(fileNoExt);
    if(!noUse){
        router.use(`/${fileNoExt}`, require(`./${fileNoExt}`))
        console.log("Cargando Ruta", fileNoExt);
    }    
});

module.exports = router;