function Userdisplay(props){
    return(<>
     <div className="container-fluid my-3">
                <div className="row m-2">
                       <div className="col bg-light">{props.username}</div>
                    <div className="col bg-light">{props.AccNumber}</div>
                    <div className="col bg-light">${props.amount}</div>
                    <div className="col bg-light">{props.description}</div>
                
                </div>
            </div>
    
    </>)
}
export default Userdisplay;