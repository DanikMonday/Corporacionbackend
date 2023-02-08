const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT||3030;

//const routes = require("./routes");
const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/FundacionSemillas").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/", require('./routes'));

app.listen(PORT, ()=>{
    console.log("Mi puerto es "+ PORT);
});