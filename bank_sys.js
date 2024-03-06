const mongoose  = require("mongoose");
const express=require("express");
const cors = require('cors');
const schmea=require("./Schema/Schema")
const bodyParser = require("body-parser");
mongoose.connect("mongodb+srv://goheljitu164:karan8141@server1.infxf1c.mongodb.net/?retryWrites=true&w=majority&appName=server1").then(()=>{
    const app=express();
    app.use(cors());
    app.use(bodyParser.json());   
    app.get("/",async(req,res)=>{
        const data=await schmea.find();
        res.json(data);
    })
    app.get("/:account_num",async(req,res)=>{
        const data=await schmea.findOne({AccNumber :req.params.account_num });
        res.json(data);
    })
    app.delete("/:account_num",async(req,res)=>{
        const data=await schmea.deleteOne({AccNumber :req.params.account_num });
        res.json(data);
    })
    app.put("/:account_num",async(req,res)=>{
        const data=await schmea.updateOne({AccNumber :req.params.account_num},req.body);
        res.json(data);
    })
    

    app.listen(3005,()=>{
        console.log("server started")
    });
})