const router = require("express").Router();
const FormModel = require("../models/Form");

//Consultar formularios
router.get("/table", async (req, res)=>{
    try {
        const tableForms = await FormModel.find();
        res.json(tableForms)
    } catch (error) {
        console.log(error);
    }
});

//Crear Formulario
router.post("/new", async (req, res)=>{
    try {
        const {type, nit_cedula, name, email, phone, destination_don, certification, aditiona, state} = req.body;
        const newForm = await FormModel.create({
            type, nit_cedula, name, email, phone, destination_don, certification, aditiona, state
        });
        res.send({data: newForm});
    } catch (error) {
        console.log(error);        
    }
});


module.exports = router;