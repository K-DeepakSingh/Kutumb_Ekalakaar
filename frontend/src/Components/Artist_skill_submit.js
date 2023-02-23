import React, { Component } from 'react'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'
import './Artist.css'
export class Artist_submit extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand " href="/">
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

        <div className ="container " style= {{height: "80vh",display: "flex",justifyContent:" center",alignItems: "center"}}>

    <div className="card border-primary mb-3 " style={{height: "40vh", width: "50rem"}}>
        <div className="card-header fw-bold p-5 fs-4" style={{textAlign: "center"}}>Your Application has been submitted!</div>
        <div className="card-body text-primary" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
           
            <div className=" btn_skill  mx-auto ">
               <Link to="/Artist_relevantskill"> <button className="btn btn-danger btn-lg p-lg-4 fw-light btn-new" type="button">Go to Skill Training</button></Link>
               
              </div>
        </div>
      </div>
    </div>  
    



</div>
 

    )
  }
}

export default Artist_submit
