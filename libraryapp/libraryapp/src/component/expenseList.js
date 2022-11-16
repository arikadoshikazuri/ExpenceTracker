import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ExpenseList(props){
    const [expense,setExpense]= useState([]);
    const url= "http://localhost:8080/api/expense/";

    const navigate = useNavigate();
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => setExpense(resp.data))
        .catch(error => console.log(error));
    }

    const deleteExpense=(id)=>{
        axios.delete(url+id)
        .then(resp=>{console.log(resp); getData()})
        .catch(error=>console.log(error));
    }
    useEffect(()=>{
        getData();
    }, [])

    const tabRow = expense.map((expense,index)=>{
        return (
            <tr key={index}>
                <td>{expense.id}</td>
                <td>{expense.name}</td>
                <td>{expense.remarks}</td>
                <td>{expense.price}</td>
                <td>{expense.payment_type}</td>
                <td><button className="btn btn-outline-dark"
                    onClick={() => navigate("/viewexpense/" +expense.id)}>View</button>&nbsp;
                    <button className="btn btn-outline-dark" 
                    onClick={()=>deleteExpense(expense.id)}>Delete</button>&nbsp;
                    <button className="btn btn-outline-dark"
                    onClick={() => navigate("/editexpense/"+expense.id)}>Update</button>
                </td>
            </tr>
        )
    })
    return(
        <div>
        <center>
        
            <h1>Expense List </h1>
            <hr></hr>
            </center>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Remark</th><th>Price</th><th>Payment_type</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
            
        </div>
    )
}