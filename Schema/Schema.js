const mongoose=require("mongoose");

const schema=mongoose.Schema(
{
   username :String,
   password:String,
   amount:Number
}
)
module.exports=mongoose.model("demodata",schema); 