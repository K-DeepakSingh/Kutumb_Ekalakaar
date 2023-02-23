import React, { Component, useEffect, useState } from 'react'
import Artist_Navbar from './Artist_Navbar'
import { Link, useParams } from 'react-router-dom'
import './stylesheet.css'

export default function Artist_application() {
    let params = useParams();
    console.log(params);
    let token = localStorage.getItem('token')
    let id = localStorage.getItem('_id')


    //arbaz code....
    let [artist, setArtist] = useState({})
    console.log(id);
    useEffect(()=> {
        let getArtist = async()=> {
            let data = await fetch(`http://localhost:4000/api/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            
            })
            let json = await data.json();
            setArtist(json)
        }
        getArtist()
    }, [])
    console.log(artist);

  return (
    <div>


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
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="patron-view-application">
        <div className="patron-view-application-heading text-center">
            Application
        </div>
        <div className="container patron-view-application-body-container">
            <div style={{marginLeft:"-13px",backgroundColor:"lightblue"}} className="horizontal-design container">
                <div className="patron-view-application-artist-name-profession">
                    <div className="patron-view-application-artist-name">
                        NAME {artist?.name} {artist?.middlename} {artist?.lastname}
                    </div>
                    <div className="patron-view-application-artist-profession">
                        Profession
                    </div>
                </div>
            </div>

            <div className="vertical-design" style={{backgroundColor:"#CC9767"}}>
                <img src="./assets/images/Linkb11.jpeg" className="patron-view-application-artist-image"/>
            </div>
            <div className="patron-view-application-artist-details">
                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">EDUCATION</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Abc University {artist?.artist?.education}
                </div>
                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">SKILLS & EXPERIENCE</span>
                </div>
              {/*<div className="patron-view-application-artist-details-body">
                     {artist?.artist?.skils.map(each=> {
                        return <>
                            <li>{each}</li>
                        </>
                    })}
                </div> */}  
                <div className="patron-view-application-artist-details-body">
                    {/* 5  in x academy  */}{artist?.artist?.experince} years
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head"> PERSONAL DETAILS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Religion: {artist?.artist?.religion}
                </div>
                <div className="patron-view-application-artist-details-body">
                    Caste: {artist?.artist?.caste}
                </div>
                <div className="patron-view-application-artist-details-body">
                    Height: {artist?.artist?.height}
                </div>
                <div className="patron-view-application-artist-details-body">
                    Weight: {artist?.artist?.weight}
                </div>
                <div className="patron-view-application-artist-details-body">
                    Language: {artist?.artist?.language}
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head"> SOCIAL MEDIA LINKS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Link1 <a href={artist?.artist?.url}>{artist?.artist?.url}</a>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Link2
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">CONTACT DETAILS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    {/* 9876352789 */} {artist?.phoneno}
                </div>
                <div className="patron-view-application-artist-details-body">
                    {/* name@email.com */} {artist?.email}
                </div>
            </div>
        </div>
        <div className="container patron-view-application-footer-container">
            <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                <Link to="/Artist_edit_profile" className="btn btn-lg btn-danger mx-5 btn-new">Edit Profile</Link>
          
                <Link to={`/Artist_Application2/${params.id}`}className="btn btn-lg btn-danger btn-new " >Apply</Link>
            </div>


        </div>
    </div>
    </div>
  )
}