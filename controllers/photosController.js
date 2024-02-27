const Photo = require('../models/Photo')
const User= require('../models/Photo')
const asyncHandler= require('express-async-handler')

const getAllPhotos= asyncHandler (async (req, res) => {
    const photos= await Photo.find().lean()
    if (!photos?.length) {
        return res.status(400).json({message: 'No photos found'})
    }
    res.json(photos)
})

const createNewPhoto= asyncHandler (async (req, res) => {
    const { key, date, title, author, sku  }= req.body

    //confirm data
    if (!key || !date || !title || !author || !sku) {
        return res.status(400).json({message: 'All fields are required'})
    }

    //check for duplicates
    const duplicate= await User.findOne({key}).collation({ locale: 'en', strength: 2 }).lean().exec()
    if (duplicate) {
        return res.status(409).json({message: 'Duplicate photo'})
    }


    const photoObject= { key, date, title, author, sku }

    //create and store new photo
    const photo= await Photo.create(photoObject)

    if (photo) { //created
        res.status(201).json({ message: `photo ${key} has been created` })
    } else {
        res.status(400).json({message: 'Invalid photo data received'})
    }
})



module.exports= {
    getAllPhotos,
    createNewPhoto

}