   
  import React from 'react'
  import {Link, useParams} from 'react-router-dom'
//   import './Artist.css'
  import Artist_Navbar from './Artist_Navbar'
  export default function Artist_application_submit() {
    let params = useParams();
    console.log(params);
   
  return (
  <div>
    {/* navBar */}
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
                    <button className="btn btn-outline-danger btn-search "  type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    {/* OpportuityFinding */}
    <div className="container " style={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="card border-primary mb-3 " style={{height: '40vh', width: '50rem'}}>
        <div className="card-header fw-bold p-5 fs-4" style={{textAlign: 'center'}}>Your Application has submitted</div>
        <div className="card-body text-primary" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="d-grid gap-2 mx-auto ">
            <Link to="/Artist_search_opportunity"> <button className="btn btn-danger btn-new btn-lg p-lg-4 fw-light" type="button">Go to Opportunities</button></Link>
          </div>
        </div>
      </div>
    </div>  
  </div>
  )
  }
