const express = require("express"),
    mongoose = require("mongoose"),
    dotenv = require("dotenv").config()


const todoRoutes = require('./routes/todo')

const app = express(),
    PORT = process.env.PORT || 5000;
    MONGO_PWD = process.env.MONGO_PASSWORD || "rYTfzatAOOqNC1Xl"


mongoose.connect("mongodb+srv://thisisanish:"+MONGO_PWD+"@cluster0.9myph.mongodb.net/todo?retryWrites=true",{
    useUnifiedTopology:true,
    useNewUrlParser:true})
    .then(()=>console.log("SUCCESS : DATABASE CONNECTED"))
    .catch((err)=>console.log(`ERROR : ${err}`))

app.use(express.json())

app.use("/",todoRoutes)


app.listen(PORT,()=>{
    console.log(`SUCCESS : Listening on PORT:${PORT}`);
})
