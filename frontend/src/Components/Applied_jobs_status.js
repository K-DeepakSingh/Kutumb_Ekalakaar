import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Artist_Navbar from './Artist_Navbar'

export default function Applied_jobs_status() {
    const [opportunityCards, setOpportunityCards] = useState([]);
    const [patronUser , setPatronUser] = useState({});
    const [artistemailID , setArtistemailID] = useState('');
    useEffect(()=>{
        async function fetchData(){
           let opportunityAllData2 = await fetch("http://localhost:4000/api/getAllOpportunities");
            opportunityAllData2 = await opportunityAllData2.json(); 
           const arrayrev2 = opportunityAllData2.data;
            setOpportunityCards(arrayrev2.reverse());
            console.log(arrayrev2);




            let opportunityAllData = await fetch("http://localhost:4000/api/getAllUsers");
            opportunityAllData = await opportunityAllData.json(); 
           const arrayrev = opportunityAllData.data;
          const obj = {};
          const artistuser = {};
           arrayrev.map((singledata , index)=>{
            if(singledata.role === 1)
            {
              obj[singledata.email] = singledata.patron.name_of_company;
            }
            if(singledata.role === 2)
            {
              artistuser[singledata._id] = singledata.email;
            }
            


            
           })
           setPatronUser(obj);
         
         setArtistemailID(artistuser[localStorage.getItem('_id')]);
        console.log(obj);
        console.log(artistuser);

          

        

            
        }
        fetchData();
      },[])
  return (
    <div>


<div className="modal fade filter-popup" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered filter-popup-dialog">
            <div className="modal-content">
                <form action="#" id="filter-form">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            <div className="row filter-popup-header-text">
                                <div className="col filter-text">
                                    FILTERS
                                </div>
                                <div type="reset" className="col-1 clear-text text-danger" onclick="clearForm()">
                                    CLEAR ALL
                                </div>
                            </div>
                        </h1>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <div className="row justify-content-start">
                                <div className="col-2" id="patron-view-artist-filter-LocationInputLabel">
                                    <label for="exampleFormControlInput1"
                                        className="form-label patron-view-artist-filter-InputHeader">Location</label>
                                </div>
                                <div className="col-4 patron-view-artist-filter-inputbox"
                                    id="patron-view-artist-filter-inputBoxLocation">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Mumbai, India</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row ">
                                <div className="col-2" id="patron-view-artist-filter-ArtInputLabelSelect">
                                    <label for="exampleFormControlInput1"
                                        className="form-label patron-view-artist-filter-InputHeader">Art</label>
                                </div>
                                <div className="col" id="patron-view-artist-filter-inputBoxArt">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="inlineRadioOptions"
                                            id="inlineRadio1" value="option1"/>
                                        <label className="form-check-label" for="inlineRadio1">Dance</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" for="inlineRadio2">Music</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" for="inlineRadio2">Singing</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <select className="form-select see-more-text" aria-label="Default select example">
                                        <option selected className="text-danger">See more</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-2" id="patron-view-artist-filter-LanguageInputLabelSelect">
                                    <label for="exampleFormControlInput1"
                                        className="form-label patron-view-artist-filter-InputHeader">Language</label>
                                </div>
                                <div className="col" id="patron-view-artist-filter-inputBoxLanguage">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="inlineRadioOptions"
                                            id="inlineRadio1" value="option1"/>
                                        <label className="form-check-label" for="inlineRadio1">English</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" for="inlineRadio2">Hindi</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" for="inlineRadio2">Kannada</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <select className="form-select see-more-text" aria-label="Default select example">
                                        <option selected>
                                            See more
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <label for="exampleFormControlInput1"
                                        className="form-label patron-view-artist-filter-InputHeader">Requirements</label>
                                </div>
                            </div>
                            <div className="row justify-content-start">
                                <div className="col-2" id="patron-view-artist-filter-ExperienceInputLabelSelect">
                                    <label for="exampleFormControlInput1"
                                        className="form-label patron-view-artist-filter-InputHeader"> Experience</label>
                                </div>
                                <div className="col-4 patron-view-artist-filter-inputbox"
                                    id="patron-view-artist-filter-inputBoxExperience">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>1 yr, above</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row justify-content-start">
                                <div className="col-2" id="patron-view-artist-filter-AgeInputLabelSelect">
                                    <label for="exampleFormControlInput1"
                                        className="form-label patron-view-artist-filter-InputHeader">Age</label>
                                </div>
                                <div className="col-4 patron-view-artist-filter-inputbox"
                                    id="patron-view-artist-filter-inputBoxAge">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>35 years</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-new" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger btn-new">Apply Filters</button>
                    </div>
                </form>

            </div>
        </div>
    </div>


    {/* <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar/>
                <a className="navbar-brand " style={{marginLeft: '57px', position:"fixed"}} href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" style={{right:"10px",top:"10px",position:"fixed"}}>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav> */}
    
    <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand "  href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
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
    <div className="patron-search-artist">
        <div className="patron-search-artist-header container">
            <div className="row">
                <div className="col">
                    <span className="filter" id="filter-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Filter
                        <img src="assets/images/filter.png"/>
                    </span>
                    <div className="search-data-text text-center">

                        <strong className="search-data-text-category">Applied Jobs</strong>
                    </div>
                </div>
            </div>
        </div>

        <div className="patron-search-artist-body container">
           
           {opportunityCards.map((singleoppo, index)=>(
            <>
            {singleoppo.applied_by.map((appliedData, index)=>(
                <>
                {appliedData.emailid == artistemailID && appliedData.hired_status ==0? <>
                    <div className="card artist-card">
                    <div className="card-body">
                        <div style={{marginLeft:"8px"}} className="row patron-search-artist-body-header">
                            
                            <div className="col artist-name">
                               {singleoppo.position}
                            </div>
                            <div className="status-artist col-auto" style={{color: "red",fontSize: "large",fontStyle: "italic",right:"0px"}}>
                                PENNDINGS
                            </div>
                            <div className="w-100"></div>
                            <div className="col artist-category">
                                {patronUser[singleoppo.posted_by_email]}
                            </div>
                        </div>
                        <div className="row patron-search-artist-body-footer">
                            <div className="col-auto me-auto artist-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Location
                            </div>
                            <div className="col-auto artist-details">
                                {/* <Link to="view-artist.html">
                                    View details
                                    <img src="assets/images/rightArrow.png" style={{width: "10px", height: "11px"}}/>
                                </Link> */}
      
                            </div>
                        </div>
                    </div>
                </div></> : ''}
               
                </>))}
                {singleoppo.hired.map((appliedData, index)=>(
                <>
                {appliedData.emailid == artistemailID ? <>
                    <div className="card artist-card">
                    <div className="card-body">
                        <div style={{marginLeft:"8px"}} className="row patron-search-artist-body-header">
                            
                            <div className="col artist-name">
                               {singleoppo.position}
                            </div>
                            <div className="status-artist col-auto" style={{color: "green",fontSize: "large",fontStyle: "italic",right:"0px"}}>
                               HIRED
                            </div>
                            <div className="w-100"></div>
                            <div className="col artist-category">
                                {patronUser[singleoppo.posted_by_email]}
                            </div>
                        </div>
                        <div className="row patron-search-artist-body-footer">
                            <div className="col-auto me-auto artist-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Location
                            </div>
                            <div className="col-auto artist-details">
                                {/* <Link to="view-artist.html">
                                    View details
                                    <img src="assets/images/rightArrow.png" style={{width: "10px", height: "11px"}}/>
                                </Link> */}
      
                            </div>
                        </div>
                    </div>
                </div></> : ''}
               
                </>))}
                {singleoppo.shortlisted.map((appliedData, index)=>(
                <>
                {appliedData.emailid == artistemailID ? <>
                    <div className="card artist-card">
                    <div className="card-body">
                        <div style={{marginLeft:"8px"}} className="row patron-search-artist-body-header">
                            
                            <div className="col artist-name">
                               {singleoppo.position}
                            </div>
                            <div className="status-artist col-auto" style={{color: "yellow",fontSize: "large",fontStyle: "italic",right:"0px"}}>
                                IN TOUCH
                            </div>
                            <div className="w-100"></div>
                            <div className="col artist-category">
                                {patronUser[singleoppo.posted_by_email]}
                            </div>
                        </div>
                        <div className="row patron-search-artist-body-footer">
                            <div className="col-auto me-auto artist-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Location
                            </div>
                            <div className="col-auto artist-details">
                                {/* <Link to="view-artist.html">
                                    View details
                                    <img src="assets/images/rightArrow.png" style={{width: "10px", height: "11px"}}/>
                                </Link> */}
      
                            </div>
                        </div>
                    </div>
                </div></> : ''}
               
                </>))}
                {singleoppo.rejected.map((appliedData, index)=>(
                <>
                {appliedData.emailid == artistemailID ? <>
                    <div className="card artist-card">
                    <div className="card-body">
                        <div style={{marginLeft:"8px"}} className="row patron-search-artist-body-header">
                            
                            <div className="col artist-name">
                               {singleoppo.position}
                            </div>
                            <div className="status-artist col-auto" style={{color: "red",fontSize: "large",fontStyle: "italic",right:"0px"}}>
                                REJECTED
                            </div>
                            <div className="w-100"></div>
                            <div className="col artist-category">
                                {patronUser[singleoppo.posted_by_email]}
                            </div>
                        </div>
                        <div className="row patron-search-artist-body-footer">
                            <div className="col-auto me-auto artist-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Location
                            </div>
                            <div className="col-auto artist-details">
                                {/* <Link to="view-artist.html">
                                    View details
                                    <img src="assets/images/rightArrow.png" style={{width: "10px", height: "11px"}}/>
                                </Link> */}
      
                            </div>
                        </div>
                    </div>
                </div></> : ''}
               
                </>))}
            </>
             
           ))}
          
        </div>
    </div>


    </div>
  )
}