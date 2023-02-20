const FormModel = require ("../models/Form");

const getForm = async (req, res) =>{
    try {
        const tableForms = await FormModel.find();
        res.json(tableForms);
    } catch (error) {
        console.log(error);
    }
};

const modForm = async (req, res) =>{
    try {
        const updateForm = await FormModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Donación Actualizada");
    } catch (error) {
        console.log(error);
    }
};

const deleForm = async (req, res) =>{
    try {
        const deleteForm = await FormModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Donación eliminada");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getForm, modForm, deleForm}