import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Navbar.css'
import './Patron.css'

export default function Uploaded_Opportunities() {
    const [position,setPosition] = useState('');
    const [about,setAbout] = useState('');
    const [requirements,setRequirements] = useState('');
    const [duration,setDuration] = useState(0);
    const [link_of_documents,setLinkOfDocuments] = useState('');
    const posted_by_email = localStorage.getItem('email');
    const [opportunityCards, setOpportunityCards] = useState([]);
    useEffect(()=>{
        async function fetchData(){
           let opportunityAllData = await fetch(`http://localhost:4000/api/patron/opportunity/all/${posted_by_email}`);
            opportunityAllData = await opportunityAllData.json(); 
            setOpportunityCards(opportunityAllData);
            
            

        }
        fetchData();
    },[opportunityCards])
    
  async function handledeleteoppo(id){
    console.log(id);
    let result = await fetch(`http://localhost:4000/api/user/delete/getOpportunity/${id}`,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
    });
    result = await result.json();
    const newooppotunityCards = opportunityCards.filter((oppo)=>oppo.id !== id);
    setOpportunityCards(newooppotunityCards);
    console.log(result);
    
  }


    console.log(opportunityCards);
  return (
    <div>

<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
                
                <Navbar className="nav_artist" />
                <Link className="navbar-brand " href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </Link>
            </div>
            <div className="right-component">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="patron-uploaded-opportunities">
        <div className="patron-uploaded-opportunities-heading text-center">
            Uploaded opportunities

        </div>

        <div className="patron-uploaded-opportunities-body container">
           
        {opportunityCards.map((singleData, index)=>(
            
            <div className="card patron-uploaded-opportunities-card">
            <div className="card-body">
                <div style={{marginLeft:"5px"}} className="row patron-uploaded-opportunities-body-header">
                    <div className="col patron-uploaded-opportunities-opportunityName">
                        Opportunity {index +1} - {singleData.position}
                    </div>
                    <div className="w-100"></div>
                    <div className="col patron-uploaded-opportunities-opportunityNumber">
                        {singleData.number} Requirements
                    </div>
                    <div className="w-100"></div>
                    <div className="col patron-uploaded-opportunities-opportunityDuration">
                        {singleData.duration}
                    </div>
                </div>
                <div className="row patron-uploaded-opportunities-body-footer">
                    <div className="col-auto me-auto patron-uploaded-opportunities-opportunityLocation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        {singleData.location}
                    </div>
                    <div className="col-auto patron-uploaded-opportunities-opportunityEdit">
                        <Link to={`/Edit_opportunity/${singleData._id}`}>
                            Edit
                            <img src="assets/images/rightArrow.png" style={{"width": "10px", "height": "11px"}} />
                        </Link>
                    

                    </div>
                    <div className="col-auto patron-uploaded-opportunities-opportunityEdit">
                        <button style={{backgroundColor:"white", color:"red"}} onClick={()=>handledeleteoppo(`${singleData._id}`)}>
                            Remove
                            <img src="assets/images/rightArrow.png" style={{"width": "10px", "height": "11px"}} />
                        </button>
                    
                    </div>
                </div>
            </div>
        </div>
           ))}
            <div className="position-relative edit-patron-profile-save-changes">
                <div className="position-absolute bottom-0 end-0">
                    <Link to="/Upload_Opportunity" className="btn btn-danger btn-new">
                        Upload new
                    </Link>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}


