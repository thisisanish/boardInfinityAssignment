const router = require('express').Router()

// importing Controller for this route
const {listTask,addTask} = require('../controllers/todo')


router.get("/list",listTask)

router.post("/add",addTask)

//  exporting the module
module.exports = router