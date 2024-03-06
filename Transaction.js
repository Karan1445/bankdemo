import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

function Transaction(){
    const [datas,setDatas]=useState({});
    const [rest,setRest]=useState([]);
    const {acc,key}=useParams();
    const [ams,setAms]=useState({});
    let amounts=0;
    const date=new Date();  
    let keys=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()+"-"+ date.getHours() 
    + ':' + date.getMinutes() 
    + ":" + date.getSeconds()
    function oNcngs(e){
        setDatas({...datas,[e.target.name]:e.target.value})
    }
    const navigator=useNavigate();
    useEffect(()=>{
        
        
        fetch('http://localhost:3005/').then(res=>res.json()).then(data=>setRest(data));
        
    },[])
    
    function onSubs(e){
        e.preventDefault();
//         fetch("http://localhost:3005/"+acc,
//         {method:"put",
//     headers:{'Content-Type': 'application/json'},
//     body:JSON.stringify({amount:1021212121212})
// }).then(console.log("we"))
        if(datas.amount!=undefined && datas.username!=undefined){
            
            rest.map((item)=>{
                if(item.AccNumber===acc){
                    amounts=item.amount
                }
                if(datas.username===item.username){
                    if(amounts-datas.amount>=0){
                   if(datas.amount<=amounts){
                        fetch("http://localhost:3005/"+acc,{
                            method:"put",
                            headers:{ 
                                'Content-Type': 'application/json',
                            },  
                            body:JSON.stringify({amount:amounts-datas.amount})
                        }
                        ).then(
                        ()=>{
                            fetch("http://localhost:3005/"+item.AccNumber,{
                                method:"put",
                                headers:{ 
                                    'Content-Type': 'application/json',
                                },  
                                body:JSON.stringify({amount:Number(datas.amount)+Number(item.amount)})
                            }
                            ).then(
                                fetch("http://localhost:4000/",{method:"post",
                                headers:{'Content-Type': 'application/json'},
                                body:JSON.stringify({tis:Math.random()*10000.00589,depositfrom:(acc),creditin:(item.AccNumber),amount:(datas.amount),date:date,des:("amount is treansferd")})
                            }).then(navigator("/Accnumber/"+acc+"/"+key))

                            )

                        }
                           
                        );
                   }
                }
                }
            })
        }
        
    }

    return (<>
    <form onSubmit={(e)=>{onSubs(e)}}>
        <input name="username" type="text" onChange={(e)=>oNcngs(e)}/>
        <input name="amount" type="text" onChange={(e)=>oNcngs(e)} />
        <button className="btn btn-danger">Transer money</button>
        </form>
    </>)
}
export default Transaction;