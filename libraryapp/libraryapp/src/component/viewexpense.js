import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Viewexpense(props){
    const [expense,setExpense]=useState({});
    const param=useParams();
    const navigate=useNavigate();
    const url = "http://localhost:8080/api/expense/"+param.id;
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => setExpense(resp.data))
        .catch(error => console.log(error));
    }
    useEffect(() => {
        getData();
    },[])

    return(
        <div>
            <h1>View ExpenseList</h1>
            <button className = "btn btn-secondary" onClick={()=>{navigate(-1)}}>Go Back</button>
            <ul className="list-group">
                <li className="list-group-item">Id: {expense.id}</li>
                <li className="list-group-item">Name: {expense.name}</li>
                <li className="list-group-item">Remark: {expense.remark}</li>
                <li className="list-group-item">Price: {expense.price}</li>
                <li className="list-group-item">payment_type: {expense.payment_type}</li>
            </ul>
        </div>
    );
}