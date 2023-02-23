import React, { Component } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import './Patron.css'
import './stylesheet.css'
import { Link } from 'react-router-dom'


export class Application extends Component {
  render() {
    return (
      <div>
     <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist"/>
                <Link to className="navbar-brand " href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </Link>
            </div>
            <div className="right-component">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


    <div className="patron-view-application">
        <div className="patron-view-application-heading text-center">
            Application
        </div>
        <div className="container patron-view-application-body-container">
            <div className="horizontal-design container" style={{marginLeft:"-12.5px", backgroundColor:'lightblue'}}>
                <div className="patron-view-application-artist-name-profession">
                    <div className="patron-view-application-artist-name">
                        NAME
                    </div>
                    <div className="patron-view-application-artist-profession">
                        Profession
                    </div>
                </div>
            </div>

            <div className="vertical-design" style={{backgroundColor:"#CC9767"}}>
                <img src="assets/images/abt1.jpg" className="patron-view-application-artist-image"/>
            </div>
            <div className="patron-view-application-artist-details">
                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">EDUCATION</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Abc University
                </div>
                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">SKILLS & EXPERIENCE</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Dancer
                </div>
                <div className="patron-view-application-artist-details-body">
                    5 years in x academy
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head"> PERSONAL DETAILS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Religion
                </div>
                <div className="patron-view-application-artist-details-body">
                    Caste
                </div>
                <div className="patron-view-application-artist-details-body">
                    Height
                </div>
                <div className="patron-view-application-artist-details-body">
                    Weight
                </div>
                <div className="patron-view-application-artist-details-body">
                    Language
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head"> SOCIAL MEDIA LINKS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    link1
                </div>
                <div className="patron-view-application-artist-details-body">
                    link2
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">CONTACT DETAILS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    9876352789
                </div>
                <div className="patron-view-application-artist-details-body">
                    name@email.com
                </div>
            </div>
        </div>
        <div className="container patron-view-application-footer-container">
            <div className="row">
                <div className="col patron-view-application-footer-container-hire-question">
                    Why you should be hired?
                </div>
                <div className="w-100"></div>
                <div className="col patron-view-application-footer-container-hire-ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat omnis, esse laudantium dolorem
                    perferendis sed cumque quo iure fugit veritatis error quos perspiciatis distinctio. Nisi neque
                    molestias iste ab fugit eveniet quae alias. Dolorum libero adipisci, provident cumque sequi at dolor
                    laborum deserunt corporis maiores tempora velit nemo iusto harum.
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="patron-view-application-footer-container-contact-artist">
                        <Link to="/Chat">
                            Contact Artist
                            <img src="assets/images/rightArrow.png"
                                className="patron-view-application-footer-container-arrowimg"/>
                        </Link>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col">
                    <div className="patron-view-application-footer-container-contact-artist-previous-experience">
                        <Link to="/View_artist_previous_experience">
                            Previous Experience
                            <img src="assets/images/rightArrow.png"
                                className="patron-view-application-footer-container-arrowimg"/>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    </div>
      </div>
    )
  }
}

export default Application
