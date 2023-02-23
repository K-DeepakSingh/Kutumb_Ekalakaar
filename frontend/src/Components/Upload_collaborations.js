import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'
import './css_new.css'
export default function Upload_collaborations() {
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

    <div className="patron-upload-opportunity container">
        <div className="patron-upload-opportunity-heading text-center">
            Upload new collaboration
        </div>
        <div style={{borderWidth:"1px"}} className="card">
            <div className="card-body">
                <form action="uploaded-opportunities.html" >
                    <div className="mb-3 row">
                        <label for="position" ><b>Artist : </b></label>
                        <div className="col-sm-10">
                            <input type="text" 
                            className="form-control patron-upload-opportunity-inputPosition"
                                id="position" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="row_cont_community">
                            <div className="sector_comm comm_head ">
                                <label htmlFor="event_name_collab" className='comm_label'><b>Event name :</b></label>
                                <input type="text" className=" community_inputs" id='event_name_collab'/>
                            </div>
                            <div className="sector_comm comm_head ">
                                <label htmlFor="loc_collab" className='comm_label'><b>Location :</b></label>
                                <input type="text" className=" community_inputs" id='loc_collab'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="aboutCommunity" c><b>About
                            Event :</b></label>
                        <textarea className="form-control"   id="aboutCommunity" rows="3"></textarea>
                    </div> 
                    <div className="mb-3">
                        <label for="aboutCommunity" c><b>Requirements :</b></label>
                        <textarea className="form-control"   id="aboutCommunity" rows="3"></textarea>
                    </div> 
                    <div className="d-grid gap-1 d-md-flex justify-content-center patron-upload-opportunity-upload-button">
                    {/* <button className="btn btn-danger me-md-2 btn-new" type="submit" value="Submit" style={{marginTop:"15px",marginBottom:"15px"}}>
                          <Link to="/Collaborations_serach"> Create Collaboration</Link> 
                         </button> */}
                         <div style ={{textAlign: "center"}}>
        <Link to="/Collaborations_search"><button type="button" className="btn btn-danger btn-lg btn-new"  > Upload</button></Link>

    </div> 
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}