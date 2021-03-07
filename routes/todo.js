const router = require('express').Router()
const {listTask,addTask} = require('../controllers/todo')

router.get("/list",listTask)

router.post("/add",addTask)

module.exports = router