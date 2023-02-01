require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const route = require("D:/Broadcast/broadcast/src/routes/route.js");
const app = express();

app.use(express.json());
app.use(multer().any());


mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://Anish_Tiwari1531:SINGH1531@cluster0.40jpapr.mongodb.net/broaddcast", { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => console.log("Database Connected successfully..."))
    .catch((error) => console.log(error));

app.use("/", route);

app.listen(process.env.PORT, function () {
    console.log("Express app running on Port 4000")
})
