import { Link } from 'react-router-dom'
  import React from 'react'
  import Artist_Navbar from './Artist_Navbar'
  import Navbar from './Navbar'
  import './stylesheet.css'
  import './css_new.css'
  export default function Applications_collab() {
  return (
  <div>
    {/* Modal */}
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
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader"> Mode:
                    </label>
                  </div>
                  <div className="col" id="patron-view-artist-filter-inputBoxArt">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">Online</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">offline </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Hybrid</label>
                    </div>
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
                 
                </div>
              </div>
            
              <div className="mb-3">
                <div className="row justify-content-start">
                  <div className="col-2" id="patron-view-artist-filter-AgeInputLabelSelect">
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Age</label>
                  </div>
                  <div className="col-4 patron-view-artist-filter-inputbox" id="patron-view-artist-filter-inputBoxAge">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>30 years above</option>
                      <option value={1}>20 years above</option>
                      {/* <option value="2">Two</option>
                                  <option value="3">Three</option> */}
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
    <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Navbar className="nav_artist" />
                <a className="navbar-brand"  href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
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
              <img src="assets/images/filter.png" />
            </span>
            <div className="search-data-text text-center">
              <strong className="search-data-text-category">23 Applications for Collaborations</strong>
            </div>
          </div>
        </div>
      </div>
      
      <div className="patron-search-artist-body container">
        
      <div style={{margin:"20px",fontWeight:"bold",fontSize:"24px"}}>For collab opportunity 1</div>
        <div className="card artist-card">
          <div className="card-body">
            <div style={{marginLeft:"5px"}} className="row patron-search-artist-body-header">
              <div className="col artist-name">
               Name
              </div>
              <div className="w-100" />
              <div className="col artist-category collab_margin_below">
                <span>Dancer</span>
              </div>
            </div>
            <div className="row patron-search-artist-body-footer">
              <div className="col-auto me-auto artist-location">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Location
              </div>
              <div className="col-auto artist-details">
                <Link to="/Artist_viewdetailopp">
                  View details
                  <img src="assets/images/rightArrow.png" style={{width: 10, height: 11}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card artist-card">
          <div className="card-body">
            <div style={{marginLeft:"5px"}} className="row patron-search-artist-body-header">
              <div className="col artist-name">
                Name
              </div>
              <div className="w-100" />
              <div className="col artist-category collab_margin_below">
              <span>Dancer</span>
              </div>
            </div>
            <div className="row patron-search-artist-body-footer">
              <div className="col-auto me-auto artist-location">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Location
              </div>
              <div className="col-auto artist-details">
                <Link to="/Artist_viewdetailopp">
                  View details
                  <img src="assets/images/rightArrow.png" style={{width: 10, height: 11}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
     }
