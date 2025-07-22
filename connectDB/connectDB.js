import mongoose from "mongoose";
const connectDB = async()=>{
   const connect = await mongoose.connect('mongodb://0.0.0.0:27017/CRUD_App');
   if(connect){
    console.log('connection successfull...')
   }else{
    console.log("connection failed...")
   }
}


export default connectDB;