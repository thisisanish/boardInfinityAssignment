const Todo = require("../models/todo")


exports.listTask =(req,res)=>{
    Todo.find()
    .then((tasks)=>res.json(tasks))
    .catch((err)=>res.json({"err":err}).status(400))
}

exports.addTask = async (req,res,next)=>{
    const {taskName, taskDesc, creator, duration} = req.body
    const createdAt = new Date()
    const expiresAt = new Date()
    try {
        if(parseInt(duration)){ // to check if the duration field is parsable in Int or not
            // duration (in minutes)is added to current date time to get the expiration date-time
            expiresAt.setMinutes(expiresAt.getMinutes()+parseInt(duration))
        }
        else{
            throw("Invalid Duration. Make Sure that the Duration is a number")
        }
        let result =await Todo.create({taskName:taskName,taskDesc: taskDesc,creator:creator ,duration:duration, createdAt:createdAt, expiresAt:expiresAt})
        res.json(result).status(200)
    } catch (error) {
        res.json({err: error}).status(400)
        next()
    }
    

    
 
}
