const express = require('express')
const router = express.Router()

// Workspace model
const Workspace = require('../../models/Workspace.model')

// GET /api/workspaces/
router.get('/', async (req, res) => {

    try {
        //console.log(await Workspace.find({}).populate("tasks"))
        res.status(200).json(
            await Workspace.find({}).populate("tasks")
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
router.post('/:id/add', async (req, res)=> {
    try {
        const modifiedWorkspace = (await Workspace.findById(req.params.id))
        //console.log(modifiedWorkspace)
        modifiedWorkspace.tasks.push(req.body.taskId)
        await modifiedWorkspace.save()
        res.status(200).json(
            {modifiedWorkspace}
            
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// POST /api/workspaces/
router.post('/', async (req, res) => {
    // Workspace.find({ title: req.body.tasks }, (err,founded)=>{
    //     console.log(founded)
    // })
    // if(req.body.tasks)
    try {
        const newWorkspace = new Workspace({
            title: req.body.title,
            statuses: ([req.body.statuses] || ['open']),
            userId: [req.body.userId],
            tasks: [req.body.tasks]
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