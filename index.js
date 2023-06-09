const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

const app = express();
const PORT = process.env.PORT||3030;

const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://fundacionsemillac3:1235@fundacionsemilladonacio.j2cjyrm.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

//mongoose.connect("mongodb://127.0.0.1:27017/FundacionSemillas").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/", require('./routes'));

app.listen(PORT, ()=>{
    console.log("Mi puerto es "+ PORT);
}); 