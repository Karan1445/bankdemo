import { useEffect, useState } from "react";
import Transaction from "./Displaylogs";
import { Link } from "react-router-dom";
import Loginapp from "./Loginlog";
import Display from "./Display";
import Userdisplay from "./users";

function Admin(){
    const[route,setr]=useState(1);
    const[trans,setTrans]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/").then(res=>res.json()).then(data=>setTrans(data))
    },[])
    const[datass,setDs]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3005/").then(res=>res.json()).then(data=>setDs(data))
    },[])
    const [fetchdata,Setfetch]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:1445/getdata").then(res=>res.json()).then((datas)=>{Setfetch(datas)})
    },[]) 
    return (<>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Central Bank of America</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" onClick={()=>{setr(1)}}>All User</a>
        <a class="nav-link" onClick={()=>{setr(2)}}>Login log</a>
        <Link class="nav-link" onClick={()=>{setr(3)}}>Transaction log</Link>
        {
           console.log(route)
        }
      </div>
    </div>
  </div>
</nav>
{ route===3?
     <div className="container-fluid  my-3   ">
        <div className="row">
           
            <div className="col text-danger fw-light fs-5">Transaction id</div>
            <div className="col text-info fw-light fs-5">Debited</div>
            <div className="col text-success fw-light fs-5">Credited</div>
            <div className="col text-warning fw-light fs-5">Amount</div>
            <div className="col text-dark fw-light fs-5">Date</div>
            <div className="col text-primary fw-light fs-5">Des</div>
        </div>
        <hr/>
    </div>:route===2?<div className="container-fluid  my-3   ">
        <div className="row">
           
            <div className="col text-danger fw-light fs-5">Login Log</div>
            <div className="col text-info fw-light fs-5">username</div>
            <div className="col text-success fw-light fs-5">Time</div>
        </div>
        <hr/></div>:<div className="container-fluid  my-3   ">
        <div className="row">
           
            <div className="col text-danger fw-light fs-5">Username</div>
            <div className="col text-info fw-light fs-5">Account Number</div>
            <div className="col text-success fw-light fs-5">Amount</div>
            <div className="col text-success fw-light fs-5">Branch</div>
        </div>
        </div>
}
 
    {route===3?
              trans.map((items)=>{
                return <Transaction {...items} />
            }):route===2?
            
            fetchdata.map((items)=>{return <Loginapp {...items}/>}):

            route===1?datass.map((items)=>{
               return <Userdisplay {...items}/>
            }):""
    }
    
    
    </>);
}
export default Admin;