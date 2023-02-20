const router = require("express").Router();
const FormModel = require("../models/Form");

//Consultar Formularios
router.get("/table", async (req, res)=>{
    try {
        const tableForms = await FormModel.find();
        res.json(tableForms);
    } catch (error) {
        console.log(error);
    }
});

//Crear Formulario
router.post("/new", async (req, res)=>{
    try {
        
        const {type, nit_cedula, name, email, phone, destination_don, certification, aditional, state} = req.body;
        const newForm = await FormModel.create({
            type, nit_cedula, name, email, phone, destination_don, certification, aditional, state
        });
        res.send({data: newForm});
    } catch (error) {
        console.log(error);        
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