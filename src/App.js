import React  from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

import emailjs from 'emailjs-com';

function App(props) {
  
  const [request1_list,setRequest1_list]=useState([]);
  

 
 
  
  
  useEffect(()=>{
   
    Axios.get('https://appointment0backend.herokuapp.com/requests5').then((res)=>{
      setRequest1_list(res.data);
      console.log(res.data);
      
    }
    )
  },[]);
  const approve=(id)=>{
    Axios.put("https://appointment0backend.herokuapp.com/approve",{
      id:id,
      approve:"Approved",
      email_send:"Elligible",
      
    });
    Axios.put("https://appointment0backend.herokuapp.com/email_sending",{
      id:id,
      email_send:"Elligible",
    });
    
  }
  const reject=(id)=>{
    Axios.put("https://appointment0backend.herokuapp.com/approve",{
      id:id,
      approve:"Rejected",
      email_send:"Elligible",
    });
    Axios.put("https://appointment0backend.herokuapp.com/email_sending",{
      id:id,
      email_send:"Elligible",
    });
    
  }
    
    return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-primary">

  
<div className="container-fluid">
  <a className="navbar-brand" href="#">PCCOE</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
      <div className="requests">
        <h4 id="time">4pm to 5pm</h4>
      <div className="list-group">
        {request1_list.map((val,key)=>{
          return(
            <div className="list-group-item list-group-item-action list-group-item-danger" >Name : {val.userName}   Email : {val.email} Reason : {val.reason} <a href="/send_email_accepted"><button type="submit" id ="btn_req" onClick={()=>approve(val._id)} className="btn btn-success btn-sm">Approve</button></a>
            <a href="/send_email"><button type="submit" id ="btn_req1" onClick={()=>reject(val._id)} className="btn btn-danger btn-sm">Reject</button></a>
            </div>
          );
        })}
        
      {/* <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div> */}
      
    </div>
    </div>
    <div className="footer_custom">
        <h6 id="footer_text">This website is created for 
        official purpose only
        </h6>
      </div>
    </>
    );
  }
  export default App;
  