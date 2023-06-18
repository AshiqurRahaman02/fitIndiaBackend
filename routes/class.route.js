const express = require('express')
const {ClassModel} = require("../models/class.model")

const classRouter = express.Router()

//all classes
classRouter.get('/', async (req, res) => {
    const products = await ClassModel.find()
    res.status(200).send(products)
})

classRouter.get('/classId/:id', async (req, res) => {
    const Class = await ClassModel.findById(req.params.id)
    res.status(200).send(Class)
})

classRouter.get('/trainerName',async (req,res)=>{
    try {
        const name = req.query.n
        const products = await ClassModel.find({trainerName: { $regex: new RegExp(name, "i") }})
        res.status(200).send(products);
    } catch (error) {
        console.log("error");
        res.status(500).send({ message: error.message });
    }
})

classRouter.post("/addClass",async (req,res)=>{
    try {
        const Class = await ClassModel.create(req.body)
        res.status(201).send({massage:"Class added successfully"})
    } catch (error) {
        res.status(500).send({massage:error.message})
    }
})

module.exports = {
    classRouter
}