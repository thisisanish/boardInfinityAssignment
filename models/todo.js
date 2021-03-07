const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    taskName:{
        type: String,
        required: true
    },
    taskDesc :{
        type: String,
        required: true
    },
    creator :{
        type: String,
        required: true
    },
    duration :{
        type: Number,
        required: true
    },
    createdAt: { 
        type: Date,
        required: true
     },
    expiresAt:{
        type:Date,
        
    }
})

// Deletes the doc after a set expiration time (Via Duration).)
todoSchema.index( { "expiresAt": 1 }, { expireAfterSeconds: 0 } )

module.exports = mongoose.model("Todo",todoSchema)

