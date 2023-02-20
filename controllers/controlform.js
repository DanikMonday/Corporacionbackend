const FormModel = require ("../models/Form");

const getList = async (req, res) =>{
    try {
        const tableForms = await FormModel.find();
        res.json(tableForms);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getList}