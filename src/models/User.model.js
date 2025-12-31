import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim:true

        },
        email:{
            type: String,
            required:true,
            lowercase: true,
            trim:true,
            unique:true
        },
        password:{
            type: String,
            required: true,
            select:false
        }
    },
    {
        timestamps:true
    }
);

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(19);
    this.password = await bcrypt.hash(this.password, salt);
    next;
});

userSchema.methods.isPasswordValid = async function (enteredPassword){
    return bcrypt.compare(enteredPassword, this.password);
};
 const User = mongoose.model("User", userSchema) 
 export default User