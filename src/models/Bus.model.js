import {mongoose} from "mongoose";

const busSchema= mongoose.Schema(
    {
        busNumber: {
            type:String,
            required:true,
            unique:true
        },    
        from:{
         type: String,
         required:true
        },  
        to:{ 
            type:String,
            required:true
        } ,   
        totalSeats:{

          type: Number,
          required:true

        }  
    },
    {timestamps:true}
)
const Bus= mongoose.model("Bus",busSchema)
export default Bus