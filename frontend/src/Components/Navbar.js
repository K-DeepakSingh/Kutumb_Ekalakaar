import React, { Component } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)



    const navigate = useNavigate();
    const handleLogout = async () => {
        console.log("Logging out");

        localStorage.clear();
        navigate('/Login')
    }


    return (
      <div>
        <div className="navbar">
                {/* <FaIcons.FaBars onClick={showSidebar}/> */}
                <div className="menu-bars"><i class="fa-solid fa-bars" onClick={showSidebar}></i></div>
        </div>
        <nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
            <ul className="nav-menu-items list-group list-group-flush" onClick={showSidebar}>

                <li className="navbar-toggle ">
                    <div className="menu-bars">
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                </li>
                <li className="nav-text list-group-item">
                <Link to="/Patron_dashboard" className="menu-bar-options">
                 Dashboard
                 </Link></li>
                <li className="nav-text list-group-item">
                <Link to="/Patron_Registration" className="menu-bar-options">
                 Patron registration
                 </Link></li>
                 <li className="nav-text list-group-item">
                <Link to="/Edit_patron_profile" className="menu-bar-options">
                 Edit profile
                 </Link></li>
                <li className="nav-text list-group-item">
                <Link to="/Patron_search_artist" className="menu-bar-options">Search artists</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/Applied_artist_application" className="menu-bar-options">View applications</Link>
                    </li>
                    {/* <li className="nav-text list-group-item">
                    <Link to="/Application" className="menu-bar-options">View applications</Link>
                    </li> */}
                    <li className="nav-text list-group-item">
                    <Link to="/Upload_Opportunity" className="menu-bar-options">Upload opportunity</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/Uploaded_opportunities" className="menu-bar-options">View uploaded opportunities</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/view_shortlisted_artist" className="menu-bar-options">Shortlisted artists</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/View_contacted_artist" className="menu-bar-options">Hired artists</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/Previously_hired_artist" className="menu-bar-options">Previously hired artists</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/Community_listing" className="menu-bar-options">Community</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/chat" className="menu-bar-options">Chat</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/Login" onClick={handleLogout} type="submit"className="menu-bar-options">Logout</Link>
                    </li>
                    

             
            </ul>
        </nav>
      </div>
    )
  }

export default Navbar
