const mongoose=require("mongoose")

const Schemass=mongoose.Schema({
   tis:String,
   depositfrom:String,
   creditin:String,
   amount:String,
   date:String,
   des:String
})
module.exports=mongoose.model("trans_log",Schemass);