function Transaction(props){
return(<>

<div className="container-fluid my-3">
        <div className="row m-2">
               <div className="col bg-light">{props._id}</div>
            <div className="col bg-light">{props.depositfrom}</div>
            <div className="col bg-light">{props.creditin}</div>
            <div className="col bg-light">{props.amount}</div>
            <div className="col bg-light">{props.date}</div>
            <div className="col bg-light">{props.des}</div>
        </div>
    </div>

</>)

}
export default Transaction;