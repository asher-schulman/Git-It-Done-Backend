const express = require('express')
const router = express.Router()

// Workspace model
const Workspace = require('../../models/User.model')

// GET /api/workspaces/
router.get('/', async (req, res) => {
    try {
        res.status(200).json(
            await Workspace.find({})
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// POST /api/workspaces/
router.post('/', async (req, res) => {
    try {
        const newWorkspace = new Workspace({
            title: req.body.title,
            statuses: ([req.body.statuses] || ['open']),
            users: [req.params.users],
            tasks: [req.params.tasks]
        })
        newWorkspace.save()
            .then(task => res.status(200).json(task))
    } catch (err) {
        res.status(400).json(err)
    }
})
// GET /api/workspaces/:id
router.get('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await Workspace.findById(req.params.id)
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// PUT /api/workspaces/:id
router.put('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await Workspace.findByIdAndUpdate(req.params.id, req.body, { new: true })
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// DELETE /api/workspaces/:id
router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await Workspace.findByIdAndRemove(req.params.id)
        )
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;