const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT||3030;

const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

//mongodb+srv://fundacionsemillac3:pHTR88Zb1xg4K1aR@fundacionsemilladonacio.j2cjyrm.mongodb.net/?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/FundacionSemillas

mongoose.connect("mongodb://127.0.0.1:27017/FundacionSemillas").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/", require('./routes'));

app.listen(PORT, ()=>{
    console.log("Mi puerto es "+ PORT);
}); 