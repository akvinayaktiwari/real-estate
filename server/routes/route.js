import express from "express";
import {signinAdmin} from '../controller/admin-controller.js'
// import { uploadImage,getImage } from "../controller/image-controller.js";
// import { authenticateToken } from "../controller/jwt-controller.js";
import { createPost,getAllPost,getPost,updatePost,deletePost } from "../controller/blog-controller.js";
import {upload,uploadImage,uploadGallery} from "../controller/image-controller.js"

import {addProperty,editProperty,deleteProperty,properties, getProperty} from '../controller/property-controller.js'
import {addLead, getAllLeads} from '../controller/lead-controller.js'



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

router.post('/addlead',addLead)
router.get('/leads',getAllLeads)



const cities = [
    {
      href: '/real-estate/catalog?category=sale',
      img: '/images/real-estate/city/new-york.jpg',
      city: 'New York',
      forSale: [893, 20],
      forRent: [3756, 80]
    },
    {
      href: '/real-estate/catalog?category=rent',
      img: '/images/real-estate/city/chicago.jpg',
      city: 'Chicago',
      forSale: [268, 15],
      forRent: [1540, 85]
    },
    {
      href: '/real-estate/catalog?category=sale',
      img: '/images/real-estate/city/los-angeles.jpg',
      city: 'Los Angeles',
      forSale: [2750, 80],
      forRent: [692, 20]
    },
    {
      href: '/real-estate/catalog?category=rent',
      img: '/images/real-estate/city/san-diego.jpg',
      city: 'San Diego',
      forSale: [1739, 48],
      forRent: [1854, 52]
    },
    {
      href: '/real-estate/catalog?category=sale',
      img: '/images/real-estate/city/dallas.jpg',
      city: 'Dallas',
      forSale: [2567, 68],
      forRent: [1204, 32]
    }
  ]

router.get('/cities', async (req, res) => {
    res.send(cities);
});

const recent = [
    {
      img: {
        src: '/images/real-estate/recent/01.jpg',
        alt: 'Background image'
      },
      href: '/real-estate/single-v1',
      title: 'Luxury Rental Villa',
      category: 'For rental',
      location: '118-11 Sutphin Blvd Jamaica, NY 11434',
      overlayBadges: [['success', 'Verified'], ['info', 'New']],
      button: {
        href: '/real-estate/single-v1',
        title: 'From $3,850',
        variant: 'primary',
      }
    },
    {
      img: {
        src: '/images/real-estate/recent/02.jpg',
        alt: 'Background image'
      },
      href: '/real-estate/single-v2',
      title: 'Luxury Rental Villa',
      category: 'For sale',
      location: '21 Pulaski Road Kings Park, NY 11754',
      overlayBadges: [['info', 'New']],
      button: {
        href: '/real-estate/single-v2',
        title: 'From $200,550',
        variant: 'primary',
      }
    },
    {
      img: {
        src: '/images/real-estate/recent/03.jpg',
        alt: 'Background image'
      },
      href: '/real-estate/single-v1',
      title: 'Country House',
      category: 'For sale',
      location: '6954 Grand AveMaspeth, NY 11378',
      overlayBadges: [['info', 'New']],
      button: {
        href: '/real-estate/single-v2',
        title: 'From $162,000',
        variant: 'primary',
      }
    }

  ]

router.get('/recent', async (req, res) => {
    res.send(recent);
});


export default router;