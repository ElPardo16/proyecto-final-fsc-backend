const Collaborator = require("../models/Collaborator");

const getCollaborator = async (req, res) => {
    try {
        const collaborator = await Collaborator.find({})
        return res.status(200).send(collaborator)
    } catch (error) {
        return res.status(400).send(error)
    }
} 

    const getEditCollab = async (req, res) => {
        try {
            const collaborator = await Collaborator.findById(req.params.id)
            return res.status(200).send(collaborator)
        } catch (error) {
            return res.status(400).send(error)
        }
    }

const saveCollaborator = async (req, res) => {
    console.log(req.body)
    try {
        // const collaborator = new Collaborator(req.body)
        // const saved = await collaborator.save()
        const saved = await Collaborator.insertMany(req.body)
        return res.status(201).send(saved)
    } catch (error) {
        return res.status(400).json({
            msg: `Error: ${error.message}`
        })
    }
    
}

const deleteCollaborator = async (req, res) => {
    try {
        const collaborator = await Collaborator.findByIdAndDelete(req.params.id)
        return res.status(200).send(collaborator)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const updateCollaborator = async (req, res) => {
    try {
        const collaborator = await Collaborator.findByIdAndUpdate(req.params.id, req.body,{new:true})
        return res.status(200).send(collaborator)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = {
    getCollaborator,
    saveCollaborator,
    deleteCollaborator,
    updateCollaborator,
    getEditCollab
}