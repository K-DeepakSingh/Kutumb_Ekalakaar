import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'
import './css_new.css'
export default function Create_community() {
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
            Create your new Community
        </div>
        <div style={{borderWidth:"1px"}} className="card">
            <div className="card-body">
                <form action="uploaded-opportunities.html" >
                    <div className="mb-3 row">
                        <label for="position" ><b>Name</b>(Upto 40 characters)</label>
                        <div className="col-sm-10">
                            <input type="text" 
                            className="form-control patron-upload-opportunity-inputPosition"
                                id="position" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="aboutCommunity" c><b>About
                            Community</b></label>
                        <textarea className="form-control"   id="aboutCommunity" rows="3"></textarea>
                    </div>    
                    <div className="mb-3 row">
                        <div className="row_cont_community">
                            <div className="sector_comm comm_head ">
                                <label htmlFor="sector" className='comm_label'><b>Sector</b></label>
                                <input type="text" className=" community_inputs" id='sector'/>
                            </div>
                            <div className="art_comm comm_head s">
                                <label htmlFor="artcomm" className='comm_label'><b>Art</b></label>
                                <select className=" community_inputs" required>
                                    <option selected disabled value="choose">Select</option>
                                    <option>Odissi</option>
                                    <option>Malyali</option>
                                    <option>Kannad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="row_cont_community">
                            <div className="subgroup comm_head">
                                <label htmlFor="Sub-group" className='comm_label'><b>Sub-group</b> (if any)</label>
                                <input type="text" className="community_inputs" id='Sub-group' />
                            </div>
                            <div className="participant_limit s comm_head">
                                <label htmlFor="partic_limit" className='comm_label'> <b>Participant limit</b></label>
                                <input type="text" className="community_inputs" id='partic_limit' />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="row_cont_community">
                            <div className="min_age comm_head">
                                <label htmlFor="minage" className='comm_label'> <b>Min. age</b></label>
                                <select className="community_inputs" required>
                                    <option selected disabled value="choose">Select</option>
                                    <option>21yrs and above</option>
                                    <option>18 yrs and above</option>
                                    <option>25 yrs and above</option>
                                </select>
                            </div>
                            <div className="expertise comm_head s">
                                <label htmlFor="expertise" className='comm_label'> <b>Expertise</b></label>
                                <select className="community_inputs" required>
                                    <option selected disabled value="choose">Select</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Expert</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div className="d-grid gap-1 d-md-flex justify-content-center patron-upload-opportunity-upload-button">
                    <button className="btn btn-danger me-md-2 btn-new" type="submit" value="Submit" style={{marginTop:"15px",marginBottom:"15px"}}>
                        <Link to="/Community_listing">   Create Community  </Link>
                         </button>
                        
                    </div> */}

                    
    <div style ={{textAlign: "center"}}>
        <Link to="/Community_listing"><button type="button"  className="btn btn-danger btn-lg btn-new"  > Create community</button></Link>

    </div> 
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
