import mongoose from 'mongoose';

const currentTimeUTC = Date.now();


const offsetIST = 5.5 * 60 * 60 * 1000; 
const currentTimeIST = new Date(currentTimeUTC + offsetIST);


const LeadsSchema = mongoose.Schema({
    name: {
        type: String,
        //required: true,
    },

    number: {
        type: Number,
        //required: true,
    },
    
    email: {
        type: String,
        //required: true,
    },

    message: {
        type: String,
        //required: true,
    },
    id: {
        type: String,
        //required: true
    },
    title: {
        type: String,
        //required: true,
    },
    address: {
        type: String,
        //required: true,
    },
    date:{
        type:Date,
        required: true,
        default: currentTimeIST
    }

});



const Leads = mongoose.model('Leads', LeadsSchema)


export default Leads;