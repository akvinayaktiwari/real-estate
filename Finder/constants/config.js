
export const API_NOTIFICATION_MESSEGE={
    loading:{
        title: 'Loading...',
        messege:'Data is being loaded, Please wait'
    },
    success:{
        title:'Success',
        messege:'Data successfully loaded'
    },
    reponseFailure:{
        title: 'Error',
        messege:'An error occured while fetching the response from the server'
    },
    requestFailure:{
        title:'Error',
        messege:'An error occured while parsing the data'
    },
    networkError:{
        title:'Error',
        messege:'Unable to connect with the server. Please try again..'
    }
}

// API SERVICE URL
// Sample request
//Need SERVICE CALL :{url:'/',method: [post or get, put,delete],params:true ot false}

export const SERVICE_URL={
    adminSignin:{url:"login",method:'POST'},
    createBlog:{url:"create",method:'POST'},
    getAllPosts:{url: "posts",method:'GET'},
    getPostById:{url: "post",method:'GET',query:true},
    deletePost: { url: '/delete', method: 'DELETE', query: true },
    updatePost:{url:"/update",method:'PUT',query:true},
    uploadFile:{url:"/upload", method:'POST'},
    
    getAllProperty:{url: "properties",method:'GET'},
    createProperty:{url:"/addproperty",method:'POST'},
    deleteProperty:{ url: '/deleteproperty', method: 'DELETE', query: true },
    editProperty:{url:"/editproperty",method:'PUT',query:true},
    
    getPropertyById:{url: "property",method:'GET',query:true},
    createLead: {url:"/addlead", method:'POST'},
    getAllLeads:{url: "leads",method:'GET'},
}