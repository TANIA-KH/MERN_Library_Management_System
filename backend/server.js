const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());

const port = 9000;
const MONGODB_URL = "mongodb+srv://mernproject0:1!mernpro@cluster0.bcm4dwl.mongodb.net/library?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URL).then(() => {
    console.log("Database is connected.");
}, (err) => {
    console.log("Database not connected ",err);

});

app.listen(port, () =>{
    console.log("server running on port ",port);
});
