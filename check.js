const mongoose=require("mongoose");
const express=require("express");
const schms=require("./Schema/Key_Schema")
const cors=require("cors");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://goheljitu164:karan8141@server1.infxf1c.mongodb.net/?retryWrites=true&w=majority&appName=server1").then(()=>{
    const app=express();
    app.use(cors());
    app.use(bodyParser.json());
    app.get("/getdata",async(req,res)=>{
        const data=await schms.find();
        res.json(data);
    })
    app.delete("/:acc",async(req,res)=>{
        const data=await schms.deleteOne({AccNumber:req.params.acc});
    })
    app.post("/",async(req,res)=>{
        const ress=new schms(req.body);
        const dts=await ress.save();
         res.json(dts)
    })
    app.listen(1445)
})