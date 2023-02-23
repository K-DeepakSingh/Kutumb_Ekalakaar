import React from 'react'
import Script from './Script'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'
import Navbar from './Navbar' 


export default function Rate_previously_hired_artist() {
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



    <div className="rate-previously-hired-artist">
        <div className="rate-previously-hired-artist-header1 text-center">
            How was your experience?
        </div>
        <div className="rate-previously-hired-artist-header2 text-center">
            Let us know by rating the artist!
        </div>
        <div className="rate-previously-hired-artist-body container">
            <form action="#" onsubmit="return(validateRatePreviouslyHiredArtist());">
                <div className="rate-previously-hired-artist-body-artist-rating">
                    <div className="row">
                        <label for="staticEmail"
                            className="col-sm-2 col-form-label rate-previously-hired-artist-body-artist-rating-text">Rating:</label>
                        <div className="col-sm-10">
                            <fieldset className="rate-previously-hired-artist-body-artist-rating-fieldset">
                                <span className="star-cb-group">
                                    <input type="radio" id="rating-5" name="rating" value="5" />
                                    <label for="rating-5" style={{"font-size":"26px"}}>5</label>
                                    <input type="radio" id="rating-4" name="rating" value="4" />
                                    <label for="rating-4" style={{"font-size":"26px"}}>4</label>
                                    <input type="radio" id="rating-3" name="rating" value="3" />
                                    <label for="rating-3" style={{"font-size":"26px"}}>3</label>
                                    <input type="radio" id="rating-2" name="rating" value="2" />
                                    <label for="rating-2" style={{"font-size":"26px"}}>2</label>
                                    <input type="radio" id="rating-1" name="rating" value="1" />
                                    <label for="rating-1" style={{"font-size":"26px"}}>1</label>
                                </span>
                            </fieldset>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-sm-10 rate-previously-hired-artist-body-artist-rating-number">

                        </div>
                    </div>
                </div>
                <div className="rate-previously-hired-artist-body-artist-feedback">
                    <div className="mb-3">
                        <label for="feedback"
                            className="form-label rate-previously-hired-artist-body-artist-feedback-text">Feedback:</label>
                        <textarea className="form-control" id="feedback" rows="5"></textarea>
                    </div>
                </div>
                <div className="d-grid gap-1 d-md-flex justify-content-center edit-patron-profile-save-changes">
                    <button className="btn btn-danger me-md-2 btn-new" style={{ "margin-top": "10px"}}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  


    </div>
  )
}
