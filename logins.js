import { useState,useEffect } from "react";
import { Form, json, useNavigate } from "react-router-dom";

function Login(){
    const date=new Date();
    const navigator=useNavigate();
    const [checkdatas,setCheckdatas]=useState({});
    const [api_data,setApiData]=useState();
    const[flags,setFlage]=useState(false);
    useEffect(()=>{
        fetch("http://localhost:3005").then(res=>res.json()).then(data=>setApiData(data));
    },[])
    function onchanges(e){
        setCheckdatas({ ...checkdatas,[e.target.name]:e.target.value});

    }
    function onSubs(e){
        let keys=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()+"-"+ date.getHours() 
                    + ':' + date.getMinutes() 
                    + ":" + date.getSeconds()
        e.preventDefault();
        if(checkdatas.username=="admin" && checkdatas.password=="admin"){
            navigator("/admin")
        }
        else{ if(checkdatas.username!="" && checkdatas.password!=""){
            api_data.map((item)=>{
             if(item.username===checkdatas.username && item.password===checkdatas.password){
                
                 fetch("http://localhost:1445/",
                 {method:"post",headers:{
                     'Content-Type': 'application/json',
                 },
                 body:JSON.stringify({username:item.username,key:keys})
             }
                 
                 ).then(navigator("/Accnumber/"+item.AccNumber+"/"+keys));
                
             }
             else{
                 setFlage(true);
             }
            })
         }}
       
    }
    return (<>
    <form onSubmit={(e)=>{onSubs(e)}}>
        <input type="text" name="username" placeholder="Enter Username" onChange={(e)=>{onchanges(e)}}/>
        <input type="text" name="password" placeholder="Enter Password"  onChange={(e)=>{onchanges(e)}} />
        <input type="submit" />
    </form>
    {flags?<h6 className="text-danger">Wrong password</h6>:""}
    </>)
}
export default Login;