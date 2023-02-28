const router = require("express").Router();
const FormModel = require("../models/Form");
const {getForm, modForm, deleForm} = require("../controllers/controlform");
const cAuth = require("../middleware/auth");
const cRole = require("../middleware/role");

//Consultar Formularios
router.get("/table"/*, cAuth, cRole(['admin'])*/, getForm);

//Crear Formulario
router.post("/new", async (req, res)=>{
    try {
        const {type, nit_cedula, name, email, phone, destination_don, certification, aditional} = req.body;
        const newForm = await FormModel.create({
            type, nit_cedula, name, email, phone, destination_don, certification, aditional
        });
        res.send({data: newForm});
    } catch (error) {
        res.json("Error al crear formulario")        
    }
});

//Modificar Formulario
router.put("/modify/:id",/* cAuth,*/ modForm);

//Eliminar Formulario
router.delete("/delete/:id", /*cAuth,*/ deleForm);

module.exports = router;