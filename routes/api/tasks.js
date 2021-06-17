const express = require('express')
const router = express.Router()

// Task model
const Task = require('../../models/Task.model')

// GET /api/tasks/
router.get('/', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
})

// POST /api/tasks/
router.post('/', (req, res) => {
    const newTask = new Task({
        taskId: req.body.taskId,
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories,
        parentWorkspaceID: req.body.parentWorkspaceID,
    });
    newTask.save().then(task => res.json(task))
})

// GET /api/tasks/:id
router.get('/:id', (req, res) => {
    Task.findById(req.params.id)
    .then( task => res.json(task))
    .catch( err => res.status(404).json({success: false}))
})

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
    Task.findById(req.params.id)
    .then( task => task.remove().then(() => res.json({success: true})))
    .catch( err => res.status(404).json({success: false}))
})

module.exports = router;