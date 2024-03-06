function Display(props){
    
    return(<>
    <div className="col-3 m-3">
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-primary">Username :{props.username}</li>
            <li class="list-group-item ">Account No: {props.AccNumber}</li>
            <li class="list-group-item bg-primary ">Avilable Balance : ${props.amount}</li>
            <li class="list-group-item">Branch Name: {props.description}</li>
            
        </ul>
       
        </div>
        <button class="btn btn-warning mt-5" onClick={props.transaction}>for transaction: </button>   
        <button class="btn btn-warning mt-5" onClick={props.logout}>for Logout: </button>   
        </div>
    </>)

}
export default Display;