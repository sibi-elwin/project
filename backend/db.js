const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://sibi0elwinwp:SPEFLINM4stgVG8L@cluster0.lml90e9.mongodb.net/")

const userSchema=new mongoose.Schema(
{
    fname:String,
    lname:String,
    username:String,
    password:String

}
)
const AccountSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }

})

const User=mongoose.model("Users",userSchema)
const Account=mongoose.model("Accounts",AccountSchema)
module.exports={ User,Account}