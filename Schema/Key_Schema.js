const mongoose=require("mongoose")

const Schemass=mongoose.Schema({
    username:String,
    key:String
})
module.exports=mongoose.model("keys_data",Schemass);