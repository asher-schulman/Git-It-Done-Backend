const express = require('express')
const router = express.Router()

// Task model
const Task = require('../../models/Task.model')

// GET /api/tasks/
router.get('/', async (req, res) => {
    try {
        res.status(200).json(
            await Task.find({})
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// POST /api/tasks/
router.post('/', async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            //add createdby User object on creation of new task
            userId: req.body.userId,
        })
        newTask.save()
            .then(task => res.status(200).json(task))
    } catch (err) {
        res.status(400).json(err)
    }
})
// GET /api/tasks/:id
router.get('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await Task.findById(req.params.id)
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await Task.findByIdAndRemove(req.params.id)
        )
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;