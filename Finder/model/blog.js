import mongoose from "mongoose";

const blogSchema=mongoose.Schema({
    title:{
        type: String,
        required:true,
        
    },
    category:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        required:false,

    },
    
    createdDate:{
        type:String
    }
})

const post=mongoose.model('post',blogSchema)

export default post;
