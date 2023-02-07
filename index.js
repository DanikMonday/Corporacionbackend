const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT||3030;

//Routes

const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/FundationSemillas").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

//Llamar las rutas

app.listen(PORT, ()=>{
    console.log("Mi puerto es "+ PORT);
});