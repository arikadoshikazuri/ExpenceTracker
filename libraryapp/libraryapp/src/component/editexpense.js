import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Editexpense(){
    const params=useParams();
    const [expense,setExpense]=useState({})
    const url = "http://localhost:8080/api/expense/"+ params.id;

    const navigate=useNavigate();
        const getData = () => {
            const data = axios.get(url);
            data.then(resp => {setExpense(resp.data);console.log(expense)})
            .catch(error => console.log(error));
        }
        useEffect(() =>{
            getData();
        },[])
    
        const inputHandler=(e)=>{
            setExpense((expense)=>({
                ...expense,
                [e.target.id]:e.target.value
            }))
        }

        const submitHandler=(e)=>{
            e.preventDefault();
            const data=axios.put(url,expense);
            data.then(resp=>{
                // if(resp.status===200)
                navigate('/expenseList')
            })
            .catch(error=>console.log(error));
        }

        return(
            <div>
                <h1>Update Expense</h1>
                <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Go Back</button>
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
                        <label>Payment Type</label>
                        <input type = "text" id="payment_type" placeholder="Enter Payment Type"
                        value={expense.payment_type} className="form-control" onChange={inputHandler}/>
                        <br/>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );


    }