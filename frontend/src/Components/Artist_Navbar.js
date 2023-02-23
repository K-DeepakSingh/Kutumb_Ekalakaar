import React, { Component } from 'react'
import { useState } from 'react'

import { useNavigate } from'react-router-dom'
import { Link } from 'react-router-dom'

function Artist_Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)


  const navigate = useNavigate();
  const handleLogout = async () => {
      console.log("Logging out");

      localStorage.clear();
      
      navigate('/Login')
  }

  return (
    <div className='navofart'>
      <div className="navbar">
        {/* <FaIcons.FaBars onClick={showSidebar}/> */}
        <div className="menu-bars"><i class="fa-solid fa-bars" onClick={showSidebar}></i></div>
      </div>
      <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
        <ul className="nav-menu-items list-group list-group-flush" onClick={showSidebar}>

          <li className="navbar-toggle ">
            <div className="menu-bars">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Artist_dashboard" className="menu-bar-options">
              Dashboard
            </Link></li>
          <li className="nav-text list-group-item">
            <Link to="/Artist_edit_profile" className="menu-bar-options">
              Edit profile
            </Link></li>
          <li className="nav-text list-group-item">
            <Link to="/Artist_search_opportunity" className="menu-bar-options">Search opportunities</Link>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Applied_jobs_status" className="menu-bar-options">Applied job status</Link>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Previousjobs" className="menu-bar-options">Previous hirings</Link>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Artist_relevantskill" className="menu-bar-options">Find courses</Link>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Artist_chat" className="menu-bar-options">Chat</Link>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Collaborations_search" className="menu-bar-options">Collab</Link>
          </li>
          <li className="nav-text list-group-item">
            <Link to="/Login" onClick={handleLogout} type="submit"className="menu-bar-options">Logout</Link>
          </li>
        

 {/* <li className="nav-text list-group-item">
                    <Link to="/view_shortlisted_artist" className="menu-bar-options">Shortlisted artists</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/View_contacted_artist" className="menu-bar-options">Contacted artists</Link>
                    </li>
                    <li className="nav-text list-group-item">
                    <Link to="/Previously_hired_artist" className="menu-bar-options">Previously hired artists</Link>
                    </li> */}


        </ul>
      </nav>
    </div>
  )
}

export default Artist_Navbar