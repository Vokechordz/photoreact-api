const express= require('express')
const router= express.Router()
const photosController= require('../controllers/photosController') 

router.route('/')
    .get(photosController.getAllPhotos)
    .post(photosController.createNewPhoto)
    .patch()
    .delete()


    module.exports= router