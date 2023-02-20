const router = require("express").Router();
const FormModel = require("../models/Form");
const {getList} = require("../controllers/controlform");
const cAuth = require("../middleware/auth");

//Consultar Formularios
router.get("/table", cAuth, getList);

//Crear Formulario
router.post("/new", async (req, res)=>{
    try {
        const {type, nit_cedula, name, email, phone, destination_don, certification, aditional, state} = req.body;
        const newForm = await FormModel.create({
            type, nit_cedula, name, email, phone, destination_don, certification, aditional, state
        });
        res.send({data: newForm});
    } catch (error) {
        res.json("Error al crear formulario")        
    }
});

//Modificar Formulario
router.put("/modify/:id", async (req, res)=>{
    try {
        const updateForm = await FormModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Donación Actualizada");
    } catch (error) {
        console.log(error);
    }
});

//Eliminar Formulario
router.delete("/delete/:id", async (req, res)=>{
    try {
        const deleteForm = await FormModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Donación eliminada");
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;