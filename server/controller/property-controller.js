import Property from '../model/property.js'


// export const addProperty= async (req, res) => {
//    console.log(req.body);
//    try {
//     await Property.create({
//         amenities: req.body.amenities,
//         href: req.body.href,
//         title: req.body.title,
//         area: req.body.area,
//         category: req.body.category,
//         location: req.body.location,
//         // city: req.body.city,
//         price: req.body.price,
//         description: req.body.description,
//         footer: req.body.footer
//     })
//    } catch (error) {
//     console.log(error);
//    }



// }

export const addProperty=async(request,response)=>{
    try{
        const property= await new Property(request.body)
        
        property.save();
        response.status(200).json('Property saved successfully...')
    }
    catch(error){
        response.status(500).json(error)
    }
    
}


export const deleteProperty = async (request, response) => {
    try {
        
        const property = await Property.findById(request.params.id);
        
        if(!property) {

            return response.status(404).json({msg:'property not found'})
            
        }
        
        await Property.findByIdAndDelete(request.params.id);

        response.status(200).json('property deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const editProperty= async(request, response)=>{
    console.log('hello')
    console.log(request.params.id)
    try{
        
        const property=await Property.findById(request.params.id)
        if(!property){
            return response.status(404).json({msg:'property not found'})
        }
        await Property.findByIdAndUpdate(request.params.id,{$set:request.body})
        return response.status(200).json({msg:'property updated succesfully'})
    }
    catch(error){

        return response.status(500).json({msg:error.message});
    }
}



export const properties=async(request,response)=>{
        let category= request.query.category;
        let properties;
        try{
            // if(category){
            //     posts=await Post.find({categories:category})

            // }
        //    else{
            properties=await Property.find({});
            //}
           return response.status(200).json(properties)
        }
        catch(error){
            return response.status(500).json({msg:error.message});
        }

}

export const getProperty=async(request,response)=>{

    try{
        const property=await Property.findById(request.params.id) 
        
        return response.status(200).json(property)
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }

}