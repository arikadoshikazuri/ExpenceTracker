import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Addexpense(){
    const navigate=useNavigate();
    const [expense,setExpense]=useState({id:"",name:"",remarks:"",price:"",payment_type:""})
    const url = "http://localhost:8080/api/expense";
    
    const inputHandler=(e)=>{
        setExpense((expense)=>({
            ...expense,
            [e.target.id]:e.target.value
        }))
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const data=axios.post(url,expense);
        data.then(resp=>{
            // if(resp.status===201)
            navigate('/expenseList')
        })
        .catch(error=>console.log(error));
    }

    return(
        <div>
        
        <center> <h1>Add Expenses</h1></center>
        <hr></hr>
            
            <div className="row">
                <div className="col-md-6 offset-3">
                    <form className="form" onSubmit={submitHandler}>
                        <label>Id</label>
                        <input type = "number" id="id" placeholder="Enter Id"
                        value={expense.id} className="form-control" onChange={inputHandler}/>
                        <label>Name</label>
                        <input type = "text" id="name" placeholder="Enter Name"
                        value={expense.name} className="form-control" onChange={inputHandler}/>
                        <label>Remark</label>
                        <input type = "text" id="remarks" placeholder="Enter Remark"
                        value={expense.remarks} className="form-control" onChange={inputHandler}/>
                        <label>Price</label>
                        <input type = "number" id="price" placeholder="Enter Price"
                        value={expense.price} className="form-control" onChange={inputHandler}/>
                        <label>Payment_type</label>
                        <input type = "text" id="payment_type" placeholder="Enter Payment Type"
                        value={expense.payment_type} className="form-control" onChange={inputHandler}/>
                        <br/>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
   
        </div>
    )

}