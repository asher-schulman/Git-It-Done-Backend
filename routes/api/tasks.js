const express = require('express')
const Workspace = require('../../models/Workspace.model')
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
            status: req.body.status,
            userId: req.body.userId,
            workspaceId: req.body.workspaceId
        })
        const found_workspace = await Workspace.findById(req.body.workspaceId).exec()
        found_workspace.tasks.push(newTask);
        await found_workspace.save()
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