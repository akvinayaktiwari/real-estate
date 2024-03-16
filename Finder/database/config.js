import  mongoose from 'mongoose'


const Connection= async()=>{
    const URL=`mongodb://user:user@ac-mrcno1m-shard-00-00.3klvm7x.mongodb.net:27017,ac-mrcno1m-shard-00-01.3klvm7x.mongodb.net:27017,ac-mrcno1m-shard-00-02.3klvm7x.mongodb.net:27017/?ssl=true&replicaSet=atlas-11waab-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database connected successfull')

    }
    catch(error){
        console.log("Error while connection",error);

    }
}
export default Connection;