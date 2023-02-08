const router = require('express').Router();
const UserModel = require('../models/User');

router.get("");

router.post("/new/user", async (req, res)=> {
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.create({
            name, email, password
        })
        res.send({data: user});
        //res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;