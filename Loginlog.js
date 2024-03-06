
 function Loginapp(props){
    return(<>

        <div className="container-fluid my-3">
                <div className="row m-2">
                       <div className="col bg-light">{props._id}</div>
                    <div className="col bg-light">{props.username}</div>
                    <div className="col bg-light">{props.key}</div>
                
                </div>
            </div>
        
        </>)
}
export default Loginapp;
