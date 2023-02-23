import React, { Component } from 'react'
import './Artist.css'
import { Link } from 'react-router-dom'
import Artist_Navbar from './Artist_Navbar'
export class View_collabs extends Component {
  render() {
    return (
      <div>

<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand "  href="/">
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

    
    <div className="container" style={{marginTop: "100px"}}>
    
        <div style={{textAlign: "center"}} className="m-3 ">
            <h1 
               style={{fontWeight: "800 !important"}}
            >Classical Dancer for Event Name , Location</h1>
        </div>


      
    <div style={{backgroundColor: "white"}} className="p-4" >
<div>
          {/* <!-- Company Name  --> */}
    {/* <!-- Background Dancer --> */}
    <div style={{display:" flex", justifyContent:" space-between ",margin: "0 2rem"}} >
<div><h4>Classical Dancer</h4>
<p>Company Name</p></div>
<div>
    <img src="" alt="company_pic"  />
</div>

    </div>

 {/* <!-- image --> */}
    <div>
<img src="" alt=""/>
    </div> 
</div>

        <div className="card p-3 m-2">
            <div className="card-header " style={{display:"flex "}} >
              <div  style ={{width:" 50%"}}>
                <h2>
                <i class="fa-solid fa-location-dot"></i> <i className="bi bi-geo-alt-fill" style={{color: "red"}}></i> Location
                </h2>
              </div>

              <div  style={{ display: "flex", width: "50%", justifyContent: "right"}}>
                <a  href="" id="cardheaderimg" style={{fontSize:" 1.5rem", marginRight: "1rem",  color: "black"}}>
                    <i className="bi bi-bookmark h-25" ></i>
                </a>
                <Link to="" id="cardheaderimg" style={{fontSize: "1.5rem",  color:" black"}}>
                    <i className="bi bi-send"></i>
                </Link>
              </div>


            </div>


    
            <div className="p-3">
                 {/* <!-- location --> */}
                <div>
    <h4
    style={{fontWeight:" 700 !important"}}
    > About Event</h4>
    <p style={{color:"black"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatem, tempora beatae dignissimos suscipit sequi necessitatibus velit dolor et doloribus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestias, voluptatem labore laborum libero asperiores iste ullam ipsa illo ab. </p>

                </div>

{/* 
                <!-- About Company --> */}
                <div>
    <h4 
    style={{fontWeight:" 700 !important"}}
    > About the Course </h4>  
    <h5
    > Requirements</h5>
    <div>
        <ol type="1">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ol>
    </div>
    
    <div>
        <h5>Duration</h5>
        <p style={{color:"black"}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati incidunt praesentium repellendus eaque temporibus minus porro officia. Autem aut architecto voluptatem</p>
    </div>
   
    </div>
   
            </div>
    <div style ={{textAlign: "center"}}>
        <Link to="/Collaboration_submission"><button type="button" className="btn btn-danger btn-lg btn-new"  > Request Now</button></Link>

    </div> 
          </div>     
    </div> 
    </div>
      </div>
    )
  }
}

export default View_collabs