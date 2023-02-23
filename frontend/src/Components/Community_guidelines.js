import React from 'react'
import './Navbar.css'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'
import './Patron.css'
export default function Community_guidelines() {
    const popup_btn_open=()=>{
        document.getElementById("open-popup-btn").style.display = "none";
         document.getElementsByClassName("popup")[0].classList.add("active");
    }
    const popup_btn_dismiss=()=>{
        document.getElementById("open-popup-btn").style.display = "block";
        document.getElementsByClassName("popup")[0].classList.remove("active");
    }
  return (
    <div>
<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist" />
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

    <div className="view-artist">
        <div className="view-artist-header">
            <div className="text-center">
                <div className="view-artist-top-text">
                    Community guidelines
                </div>
            </div>
        </div>
        <div className="view-artist-body">
            <div className="card artist-card mx-auto">
                    <div style={{marginLeft:"10px"}} className="card-body">
                        <div className="card-body-content">
                            {/* <!-- About community --> */}
                            <div  className="row">
                                <div className="col view-artist-info-title" style={{fontSize:"25px"}}>
                                    Dancer community
                                </div>
                                <div className="w-100"></div>
                                
                            </div>
                            {/* <!-- Artist resume--> */}
                            <div style={{marginTop:"15px"}} className="row">
                                {/* <div className="col view-artist-info-title">
                                   Admin
                                </div>
                                <div className="w-100"></div>
                                <div className="col view-artist-info-body">
                                    Name
                                </div> */}
                                <span style={{width:"50%",fontSize:"20px"}}>
                                    Admin:Name
                                </span>
                                <span style={{width:"50%",fontSize:"20px"}}>
                                    Moderators: Name  , and 3 others
                                </span>
                            </div>
                            {/* <!-- Artist gudelines--> */}
                            <div style={{marginTop:"15px"}}className="row">
                                <div className="col view-artist-info-title" style={{fontSize:"23px"}}>
                                    Guidelines
                                </div>
                                <div style={{marginTop:"15px"}}className="w-100"></div>
                                <div className="col view-artist-info-body">
                                    <div className="row">
                                        <div className="col">
                                            1. Lorem ipsum dolor sit amet.
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col">
                                            2. Lorem ipsum dolor sit.
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col">
                                            3. Cumque sint dolore eius delectus reiciendis repellat molestiae!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Artist age--> */}
                            <div style={{marginTop:"15px"}}className="row">
                                <div className="col view-artist-info-title"style={{fontSize:"23px"}}>
                                    Age limit
                                </div>
                                <div className="w-100"></div>
                                <div className="col view-artist-info-body"style={{fontSize:"20px"}}>
                                    21 yrs and above
                                </div>
                            </div>
                        </div>
                        <div className="popup center" >
            {/* <div className="icon">
                <i className="fa fa-check"></i>
            </div> */}
            <div className="title">
            Success!!    
            </div>
            <div className="description" style={{fontSize:"18px"}}>
                <div>Thankyou for requesting to join our community.</div>
            <div>Our community moderators will be reviewing your request shortly.</div>
            </div>
            <div className="dismiss-btn">
                <button id="dismiss-popup-btn" onClick={popup_btn_dismiss}>
                  <Link to="/Community_listing">  Click to continue </Link>
                </button>
            </div>
        </div>
        <div className="center">
            <button id="open-popup-btn" className='btn-danger' onClick={popup_btn_open} style={{borderRadius:"10px"}}>
                Join Community
            </button>
        </div>
                    </div>
               
            </div>
        </div>
    </div>

    </div>
  )
}
