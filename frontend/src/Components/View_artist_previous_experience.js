import React from 'react'
import './Navbar.css'
import './Patron.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default function View_artist_previous_experience() {
  return (
    <div>

<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <Link className="navbar-brand "  to="/">
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

    <div className="view-artist-previous-experience">
        <div className="view-artist-previous-experience-heading text-center">
            Previous jobs of Kalakaar
        </div>
        <div className="view-artist-previous-experience-body container">
            <div className="view-artist-previous-experience-artist-rating">
                <span> Overall rating:</span>
                <span> 4
                    <span>
                        <img src="assets/images/ratingStar.png" alt=""
                            className="view-artist-previous-experience-artist-rating-starImg"/>
                    </span>
                </span>
            </div>
            <div style={{borderWidth:"1px"}} className="card view-artist-previous-experience-artist-card">
                <div className="card-body">
                    <div style={{marginLeft:"10px"}} className="row view-artist-previous-experience-artist-card-body-header">
                        <div className="col view-artist-previous-experience-artist-card-work-category">
                            Background Dancer
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-company-name">
                            Company name
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-time-duration">
                            <span
                                className="view-artist-previous-experience-artist-card-time-start-duration-title">Start
                                date:</span>
                            <span
                                className="view-artist-previous-experience-artist-card-time-start-duration-body">24/12/2021
                            </span>
                            <span className="view-artist-previous-experience-artist-card-time-end-duration-title">End
                                date:</span>
                            <span className="view-artist-previous-experience-artist-card-time-end-duration-body">
                                25/12/2021 </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-artist-rating">
                            <span> Overall rating:</span>
                            <span> 4
                                <span>
                                    <img src="assets/images/ratingStar.png" alt=""
                                        className="view-artist-previous-experience-artist-rating-starImg"/>
                                </span>
                            </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-artist-review">
                            <span className="view-artist-previous-experience-artist-card-artist-review-title">Review:
                            </span>
                            <span className="view-artist-previous-experience-artist-card-artist-review-body">Very good. Had
                                a nice time. </span>
                        </div>
                    </div>
                    <div className="row view-artist-previous-experience-artist-card-artist-location-artist-body-footer">
                        <div className="col-auto me-auto view-artist-previous-experience-artist-card-artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            Location
                        </div>
                    </div>
                </div>
            </div>
            <div style={{borderWidth:"1px"}} className="card view-artist-previous-experience-artist-card">
                <div className="card-body">
                    <div style={{marginLeft:"10px"}} className="row view-artist-previous-experience-artist-card-body-header">
                        <div className="col view-artist-previous-experience-artist-card-work-category">
                            Background Dancer
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-company-name">
                            Company name
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-time-duration">
                            <span
                                className="view-artist-previous-experience-artist-card-time-start-duration-title">Start
                                date:</span>
                            <span
                                className="view-artist-previous-experience-artist-card-time-start-duration-body">24/12/2021
                            </span>
                            <span className="view-artist-previous-experience-artist-card-time-end-duration-title">End
                                date:</span>
                            <span className="view-artist-previous-experience-artist-card-time-end-duration-body">
                                25/12/2021 </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-artist-rating">
                            <span> Overall rating:</span>
                            <span> 4
                                <span>
                                    <img src="assets/images/ratingStar.png" alt=""
                                        className="view-artist-previous-experience-artist-rating-starImg"/>
                                </span>
                            </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-artist-previous-experience-artist-card-artist-review">
                            <span className="view-artist-previous-experience-artist-card-artist-review-title">Review:
                            </span>
                            <span className="view-artist-previous-experience-artist-card-artist-review-body">Very good. Had
                                a nice time. </span>
                        </div>
                    </div>
                    <div className="row view-artist-previous-experience-artist-card-artist-location-artist-body-footer">
                        <div className="col-auto me-auto view-artist-previous-experience-artist-card-artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            Location
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-1 d-md-flex justify-content-center edit-patron-profile-save-changes">
                <button className="btn btn-danger me-md-2 btn-new" style={{"margin-bottom": "40px", "margin-top": "40px"}}>
                    Hire Artist
                </button>
            </div>
            <div className="row">
                <div className="col">
                    <div className="view-artist-previous-experience-footer-contact-artist">
                        <Link to="/Chat">
                            Contact Artist
                            <img src="assets/images/rightArrow.png"
                                className="view-artist-previous-experience-footer-arrowimg"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
