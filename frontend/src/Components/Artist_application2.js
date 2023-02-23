import React, { Component, useState } from 'react'
import { useParams } from'react-router-dom'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'

export default function Artist_application2() {
    let params = useParams();
    console.log(params);
    const [reasontohired , setReasontohired] = useState('');
    const [opportunityCards, setOpportunityCards] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        async function fetchData(){
            let opportunityAllData = await fetch("http://localhost:4000/api/getAllOpportunities");
             opportunityAllData = await opportunityAllData.json(); 
            const arrayrev = opportunityAllData.data;
            let singleobj = arrayrev.find(each=>each._id === params.id);
             
             console.log(singleobj.applied_by);
             const currentEmail = localStorage.getItem('email');
             const applied_by = {
                emailid : currentEmail,
                hired_status : 0
             }
             console.log(applied_by);
             
             let appliedoppo = await fetch(`http://localhost:4000/api/user/apply/opportunity/${params.id}`,{
                method: 'PUT',
                body :JSON.stringify(applied_by),
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
        
                },
                
              
             })
             appliedoppo = await appliedoppo.json();
             console.log(appliedoppo);
         }
         fetchData();  
    }
   

  return (
    

<div>
        <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand "  href="/">
                    <span className="text-danger text" > <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search Opportunities
                    " aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
        <div className="responsive"  style= {{ height: "90vh ", display: "flex", alignItems: "center",  justifyContent: "center"}} >
        
        <div className=" mt-4 " style={{width:" 100%"}}>
            <h4 style={{textAlign : "center"}}>Application </h4>
            <span style={{textAlign: "center", display: "block"}}>Step2</span>
            <form id="algin-form" className="p-4" >
                <div className="form-group">
                    <h4>Why should you be hired ? </h4>
           
                    <textarea name="msg"  cols="40" rows="10" value={reasontohired} onChange={(e)=>setReasontohired(e.target.value)} className="form-control"  style={{resize: "none", scrollBehavior:" smooth",backgroundColor: "white"}}></textarea>
                </div>
            
            </form> 


            <div style={{width: "100%",textAlign: "center"}}>
        <button type="button" onClick={handleSubmit} className="btn btn-danger btn-lg btn-new" > <Link to ="/Artist_application_submit">Submit </Link> </button> 
                  
            </div>
        </div>
    </div>

    </div>
  )
}