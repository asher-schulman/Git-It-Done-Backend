const express = require('express')
const router = express.Router()

// User model
const User = require('../../models/User.model')

// GET /api/users/
router.get('/', async (req, res) => {
    try {
        res.status(200).json(
            await User.find({})
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// POST /api/users/
router.post('/', async (req, res) => {
    try {
        const newUser = new User({
            googleId: req.body.googleId,
            // maybe set mongoDB _id to the googleId?
            // _id: req.body.progileObj.googleId,
            tokenId: req.body.tokenId,
            displayName: req.body.displayName,
        })
        // const newUser = new User({
        //     googleId: req.body.profileObj.googleId,
        //     // maybe set mongoDB _id to the googleId?
        //     // _id: req.body.progileObj.googleId,
        //     tokenId: req.body.tokenObj.id_token,
        //     displayName: req.body.profileObj.name,
        //     image: req.body.profileObj.imageUrl,
        // })
        newUser.save()
            .then(task => res.status(200).json(task))
    } catch (err) {
        res.status(400).json(err)
    }
})
// GET /api/users/:id
router.get('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await User.findById(req.params.id)
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// PUT /api/users/:id
router.put('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        )
    } catch (err) {
        res.status(400).json(err)
    }
})
// DELETE /api/users/:id
router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await User.findByIdAndRemove(req.params.id)
        )
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;