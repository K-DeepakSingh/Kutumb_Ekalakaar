import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'

export default function View_contacted_artist() {
  const posted_by_email = localStorage.getItem('email');
  const [opportunityCards, setOpportunityCards] = useState([]);
  const [artistUser , setArtistUser] = useState([]);
  useEffect(()=>{
      async function fetchData(){
         let opportunityAllData = await fetch(`http://localhost:4000/api/patron/opportunity/all/${posted_by_email}`);
          opportunityAllData = await opportunityAllData.json(); 
          setOpportunityCards(opportunityAllData);
      }
      fetchData();
  },[])
  console.log(opportunityCards);
  useEffect(()=>{
    async function fetchData(){
       let opportunityAllData = await fetch("http://localhost:4000/api/getAllUsers");
        opportunityAllData = await opportunityAllData.json(); 
       const arrayrev = opportunityAllData.data;
      
      const obj = [];
       arrayrev.map((singledata , index)=>{
        if(singledata.role === 2)
        {
          obj[singledata.email] = singledata.name  + ' ' + singledata.lastname;
        }
       })
       setArtistUser(obj);
    }
    fetchData();
  },[])
  console.log(artistUser);
  return (
    <div>
<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <Link to className="navbar-brand "href="index.html">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </Link>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

<div>
  <div className="modal fade filter-popup" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                  <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Location</label>
                </div>
                <div className="col-4 patron-view-artist-filter-inputbox" id="patron-view-artist-filter-inputBoxLocation">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Mumbai, India</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row ">
                <div className="col-2" id="patron-view-artist-filter-ArtInputLabelSelect">
                  <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Art</label>
                </div>
                <div className="col" id="patron-view-artist-filter-inputBoxArt">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Dance</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Music</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Singing</label>
                  </div>
                </div>
                <div className="col">
                  <select className="form-select see-more-text" aria-label="Default select example">
                    <option selected className="text-danger">See more</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-2" id="patron-view-artist-filter-LanguageInputLabelSelect">
                  <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Language</label>
                </div>
                <div className="col" id="patron-view-artist-filter-inputBoxLanguage">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">English</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Hindi</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Kannada</label>
                  </div>
                </div>
                <div className="col">
                  <select className="form-select see-more-text" aria-label="Default select example">
                    <option selected>
                      See more
                    </option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Requirements</label>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-2" id="patron-view-artist-filter-ExperienceInputLabelSelect">
                  <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader"> Experience</label>
                </div>
                <div className="col-4 patron-view-artist-filter-inputbox" id="patron-view-artist-filter-inputBoxExperience">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>1 yr, above</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row justify-content-start">
                <div className="col-2" id="patron-view-artist-filter-AgeInputLabelSelect">
                  <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Age</label>
                </div>
                <div className="col-4 patron-view-artist-filter-inputbox" id="patron-view-artist-filter-inputBoxAge">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>&gt;35 years</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger">Apply Filters</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  <div className="view-contacted-artist container">
    <div className="view-contacted-artist-header container">
      <div className="row">
        <div className="col">
          <span className="filter" id="filter-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Filter
            <img src="assets/images/filter.png" />
          </span>
          <div className="search-data-text text-center"> Contacted artists</div>
        </div>
      </div>
    </div>
    <div className="view-contacted-artist-body container">
      {opportunityCards.map((singleoppo,index)=>(
        <>
        {console.log(singleoppo)}
        {singleoppo.hired.map((artistapplication , index)=>(
          <div className="card artist-card">
          <div className="card-body">
            <div style={{marginLeft:"7px"}} className="row view-contacted-artist-body-header">
              <div className="col artist-name">
               {artistUser[artistapplication.emailid]}
              </div>
              <div className="col-auto">
                <span className="view-contacted-artist-body-header-left-button">
                  <div className="btn-group dropstart">
                    <svg className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="#">Edit Status</Link></li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="w-100" />
              <div className="col artist-status">
                <span>Status: <span className="artist-status-in-touch">Hired</span> </span>
              </div>
              <div className="w-100" />
              <div className="col artist-category">
                {singleoppo.position}
              </div>
            </div>
            <div className="row view-contacted-artist-body-footer">
              <div className="col-auto me-auto artist-location">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                {singleoppo.location}
              </div>
              <div className="col-auto artist-details">
                <Link to="/View_artist">
                  View details
                  <img src="assets/images/rightArrow.png" style={{width: 10, height: 11}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        ))}
        </>
 
      ))}
    
    </div>
  </div>
</div>

   
    {/* <!-- JavaScript Bundle with Popper --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/Linkjax/libs/jquery/2.1.3/jquery.min.js"></script>
    


    </div>
  )
}
