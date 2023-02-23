import React, { Component } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import './Patron.css'
import { Link } from 'react-router-dom'

export class Previously_hired_artists extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <a className="navbar-brand " href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


    <div className="view-previously-hired-artists">
        <div className="view-previously-hired-artists-heading text-center">
            Previously hired artists
        </div>
        <div className="view-previously-hired-artists-body container">
            <div style={{borderWidth:"1px"}} className="card view-previously-hired-artists-artist-card">
                <div className="card-body">
                    <div style={{marginLeft:"7px"}} className="row view-previously-hired-artists-artist-card-body-header">
                        <div className="col view-previously-hired-artists-artist-card-work-category">
                            Background Dancer
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-company-name">
                            Company name
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-time-duration">
                            <span className="view-previously-hired-artists-artist-card-time-start-duration-title">Start
                                date:</span>
                            <span
                                className="view-previously-hired-artists-artist-card-time-start-duration-body">24/12/2021
                            </span>
                            <span className=" view-previously-hired-artists-artist-card-time-end-duration-title">End
                                date:</span>
                            <span className="view-previously-hired-artists-artist-card-time-end-duration-body">
                                25/12/2021 </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-salaryAndstatus">
                            <span className="view-previously-hired-artists-artist-card-salary-title">Salary:<span
                                    className="view-previously-hired-artists-artist-card-salary-body"> Paid</span>
                            </span>
                            <span className="view-previously-hired-artists-artist-card-status-title">Status:<span
                                    className="view-previously-hired-artists-artist-card-status-body">
                                    Duration completed </span></span>
                        </div>
                    </div>
                    <div className="row view-previously-hired-artists-artist-card-artist-location-artist-body-footer">
                        <div className="col-auto me-auto view-previously-hired-artists-artist-card-artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            Location
                        </div>
                        <div className="col-auto view-previously-hired-artists-artist-card-rate-artist">
                            <Link to="/Rate_previously_hired_artist">
                                Rate Artist
                                <img src="assets/images/rightArrow.png" style={{width: "10px", height: "11px"}}/>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{borderWidth:"1px"}} className="card view-previously-hired-artists-artist-card">
                <div className="card-body">
                    <div style={{marginLeft:"7px"}} className="row view-previously-hired-artists-artist-card-body-header">
                        <div className="col view-previously-hired-artists-artist-card-work-category">
                            Background Dancer
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-company-name">
                            Company name
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-time-duration">
                            <span className="view-previously-hired-artists-artist-card-time-start-duration-title">Start
                                date:</span>
                            <span
                                className="view-previously-hired-artists-artist-card-time-start-duration-body">24/12/2021
                            </span>
                            <span className="view-previously-hired-artists-artist-card-time-end-duration-title">End
                                date:</span>
                            <span className="view-previously-hired-artists-artist-card-time-end-duration-body">
                                25/12/2021 </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-salaryAndstatus">
                            <span className="view-previously-hired-artists-artist-card-salary-title">Salary:<span
                                    className="view-previously-hired-artists-artist-card-salary-body"> Paid</span>
                            </span>
                            <span className="view-previously-hired-artists-artist-card-status-title">Status:<span
                                    className="view-previously-hired-artists-artist-card-status-body">
                                    Duration completed </span></span>
                        </div>
                    </div>
                    <div className="row view-previously-hired-artists-artist-card-artist-location-artist-body-footer">
                        <div className="col-auto me-auto view-previously-hired-artists-artist-card-artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            Location
                        </div>
                        <div className="col-auto view-previously-hired-artists-artist-card-rate-artist">
                            <Link to="/Rate_previously_hired_artist">
                                Rate Artist
                                <img src="assets/images/rightArrow.png" style={{width: "10px", height: "11px"}}/>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{borderWidth:"1px"}} className="card view-previously-hired-artists-artist-card">
                <div className="card-body">
                    <div style={{marginLeft:"7px"}} className="row view-previously-hired-artists-artist-card-body-header">
                        <div className="col view-previously-hired-artists-artist-card-work-category">
                            Background Dancer
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-company-name">
                            Company name
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-time-duration">
                            <span className=" view-previously-hired-artists-artist-card-time-start-duration-title">Start
                                date:</span>
                            <span
                                className="view-previously-hired-artists-artist-card-time-start-duration-body">24/12/2021
                            </span>
                            <span className="view-previously-hired-artists-artist-card-time-end-duration-title">End
                                date:</span>
                            <span className="view-previously-hired-artists-artist-card-time-end-duration-body">
                                25/12/2021 </span>
                        </div>
                        <div className="w-100"></div>
                        <div className="col view-previously-hired-artists-artist-card-salaryAndstatus">
                            <span className="view-previously-hired-artists-artist-card-salary-title">Salary:<span
                                    className="view-previously-hired-artists-artist-card-salary-body"> Paid</span>
                            </span>
                            <span className="view-previously-hired-artists-artist-card-status-title">Status:<span
                                    className="view-previously-hired-artists-artist-card-status-body">
                                    Working</span></span>
                        </div>
                    </div>
                    <div className="row view-previously-hired-artists-artist-card-artist-location-artist-body-footer">
                        <div className="col-auto me-auto view-previously-hired-artists-artist-card-artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            Location
                        </div>
                        <div className="col-auto view-previously-hired-artists-artist-card-rate-artist">
                            <Link to="/Rate_previously_hired_artist">
                                Rate Artist
                                <img src="assets/images/rightArrow.png" style={{width:" 10px", height:" 11px"}}/>
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
}

export default Previously_hired_artists
