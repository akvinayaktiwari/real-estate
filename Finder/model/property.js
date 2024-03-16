import mongoose from 'mongoose';


const PropertiesSchema = mongoose.Schema({
    thumbnails: {
        type: Array,
        // required: true,
    },
    amenities: {
        type: Array,
        //required: true,
    },
    href: {
        type: String,
        //required: true,
    },
    images: {
        type: Array,
        // required: true
    },
    title: {
        type: String,
       // required: true,
    },
    area: {
        type: Number,
        //required: true,
    },
    category: {
        type: String,
        //required: true,
    },
    address: {
        type: String,
        //required: true,
    },
    city: {
        type: String,
        //required: true,
    },
    price: {
        type: String,
        //required: true,
    },
    description: {
        type: String,
        //required: true,
    },
    footer: {
        type: Array,
        //required: true,
    },
    featured:{
        type: Boolean,
        //default: false,
    },
    propertyType:{
        type: String,
        //required: true
    }

});



const property= mongoose.models.Property ||mongoose.model('Property', PropertiesSchema)


export default property;

