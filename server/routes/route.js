import express from "express";
import {signinAdmin} from '../controller/admin-controller.js'
// import { uploadImage,getImage } from "../controller/image-controller.js";
// import { authenticateToken } from "../controller/jwt-controller.js";
import { createPost,getAllPost,getPost,updatePost,deletePost } from "../controller/blog-controller.js";
import {upload,uploadImage,uploadGallery} from "../controller/image-controller.js"

import {addProperty,editProperty,deleteProperty,properties, getProperty} from '../controller/property-controller.js'



const router=express.Router();

  //router.post takes three arguments 2nd is middlewere and 3rd is function
router.post('/login',signinAdmin);
router.post('/create',createPost);
router.get('/posts',getAllPost)
router.get('/post/:id',getPost)
router.delete('/delete/:id', deletePost);
router.put('/update/:id',updatePost)
router.post('/upload',upload.single('file'),uploadImage)
router.post('/uploadgallery',upload.array('files', 10),uploadGallery)

router.post('/addproperty',addProperty)
router.delete('/deleteproperty/:id',deleteProperty)
router.put('/editproperty/:id',editProperty)
router.get('/properties',properties)
router.get('/property/:id',getProperty)


export default router;