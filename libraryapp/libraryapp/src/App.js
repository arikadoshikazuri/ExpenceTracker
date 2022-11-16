
import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import {  ExpenseList } from './component/expenseList';

import {  Viewexpense } from './component/viewexpense';
import {  Editexpense } from './component/editexpense';
import {  Addexpense } from './component/Addexpense';




function App() {
  return (
    <div className="container">
      <BrowserRouter>
      
      <nav className="btn btn-info navbar navbar-expand-lg navheader">
      
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/Addexpense" ><b>Add Expense</b></Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/expenselist"><b>Expense List</b></Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr></hr>
      
      <Routes>
        <Route exact path="/expenselist" element={<ExpenseList/>}></Route>
        <Route exact path="/addexpense" element={<Addexpense/>}></Route>
        <Route exact path="/viewexpense/:id" element={<Viewexpense />}></Route>
        <Route exact path="/editexpense/:id" element={<Editexpense />}></Route>
      </Routes>

      </BrowserRouter>
     </div>
  );
}

export default App;
