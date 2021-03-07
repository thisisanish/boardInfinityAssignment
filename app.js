//  node module imports 
const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    dotenv = require("dotenv").config()

// file imports
const todoRoutes = require('./routes/todo')

// other variables
const PORT = process.env.PORT || 5000,
    MONGO_PWD = process.env.MONGO_PASSWORD || "rYTfzatAOOqNC1Xl"

// connection with the database
mongoose.connect("mongodb+srv://thisisanish:"+MONGO_PWD+"@cluster0.9myph.mongodb.net/todo?retryWrites=true",{
    useUnifiedTopology:true,
    useNewUrlParser:true})
    .then(()=>console.log("SUCCESS : DATABASE CONNECTED"))
    .catch((err)=>console.log(`ERROR : ${err}`))

app.use(express.json())

// All routing is handled by todoRoutes
app.use("/",todoRoutes)

// listening on PORTw
app.listen(PORT,()=>{
    console.log(`SUCCESS : Listening on PORT:${PORT}`);
})
