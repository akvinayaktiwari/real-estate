import Leads from "../model/lead.js";

export const addLead = async(request,response)=>{
    try{
        const lead = await new Leads(request.body)
        
        lead.save();
        response.status(200).json('Lead saved successfully...')
    }
    catch(error){
        response.status(500).json(error)
    }
    
}

export const getAllLeads =async(request,response)=>{
    let category = request.query.category;
    console.log(category)
    let leads;
    try{
        // if(category){
        //     posts=await Post.find({categories:category})

        // }
    //    else{
        leads=await Leads.find({});
        //}
       return response.status(200).json(leads)
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }

}