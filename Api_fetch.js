import { useEffect,useState} from 'react';
import Display from './Display';
import { useNavigate, useParams } from 'react-router-dom';
function Actual_display(){
    let flags=false;
    const {acc,key}=useParams();
    const [data,setDatas]=useState({});
    const navigator=useNavigate();
    const [fetchdata,Setfetch]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:1445/getdata").then(res=>res.json()).then((datas)=>{Setfetch(datas)})
    },[]) 

   
    useEffect(()=>{

        fetch("http://localhost:3005/"+acc).then(res=>res.json()).then((data)=>{setDatas(data);ndisplay()});
        },[])

    function onTrans(){
        navigator("/Trans/"+data.AccNumber+"/"+key)
    }
    function ndisplay(){
        fetchdata.map((items)=>{
       
        if(items.username===data.username && items.key===key){
            console.log(items.key +"    "+key)
            flags=true;
        }
        
}
        )
    }
    return(
        <>
       <div className='container'>
        <div className='row'>
            {ndisplay()}
           <Display {...data} transaction={onTrans} logout={()=>{navigator("/")}}/>
        </div></div>
            
        </>
    )
}
export default Actual_display;