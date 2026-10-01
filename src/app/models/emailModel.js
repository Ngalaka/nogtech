
import mongoose from "mongoose";
const emailSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },

    lastname: { 
    type: String,
    required: true,
    trim: true
  },

    email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
    },

     mobile: {
    type: String,
    required: true,
    trim: true
  },

    emailType:{
        type:String,
        enum:["myself", "staff"],
        default:"myself"
    }
}, {timestamps:true})

const Email=mongoose.models.email 
|| mongoose.model("email", emailSchema)

 export default Email;



















 
   
  

 
   


   
