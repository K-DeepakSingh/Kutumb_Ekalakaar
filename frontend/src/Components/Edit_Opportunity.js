import React, { Component, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, Navigate, useParams } from 'react-router-dom'
import './Navbar.css'
import './Patron.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Edit_Opportunity() {
    let oppoId = useParams();
    console.log(oppoId);
    const [opportunityData,setOppotunityData] = useState('');



    const [position, setPosition] = useState("");
    const [about, setAbout] = useState("");
    const [requirements, setRequirements] = useState("");
    const [budget , setBudget] = useState("");
    const [type , setType] = useState("");
    const [language, setLanguage] = useState("");
    const [mode , setMode] = useState("");
    const [location, setLocation] = useState("");
    const [number, setNumber] = useState(0);
    const [duration , setDuration] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const [link_of_documents, setLinkOfDocuments] = useState("");
    const [dummy, setDummy] = useState("1");


    
    const notify = () => toast("Edited succesfully", {
        position: toast.POSITION.BOTTOM_CENTER
      });

    useEffect(()=>{
        async function fetchData(){
            let opportunities = await fetch(`http://localhost:4000/api//user/getOpportunity/${oppoId.id}`);
            opportunities = await opportunities.json();
            setOppotunityData(opportunities.data);

        }
        fetchData().then((d)=>{
            setDummy("2");
            setPosition(opportunityData.position);
            setAbout(opportunityData.about);
            setRequirements(opportunityData.requirements);
            setBudget(opportunityData.budget);
            setType(opportunityData.type);
            setLanguage(opportunityData.language);
            setMode(opportunityData.mode);
            setLocation(opportunityData.location);
            setNumber(opportunityData.number);
            setDuration(opportunityData.duration);
            setStartDate(opportunityData.duration);
            setEndDate(opportunityData.duration);
            setLinkOfDocuments(opportunityData.link_of_documents);
            
        }).catch((err)=>console.log(err));
    },[dummy])
    let navigate = useNavigate()
    const posted_by_email = localStorage.getItem("email");
    const handleupdateoppo = async(e)=>{
        e.preventDefault();
        const opportunityDataww = {
            posted_by_email,
            position,
            about,
            requirements,
            
            number,
            budget,
            type,
            language,
            mode,
            location,
            link_of_documents,
          };
          console.log(opportunityDataww);
          const id = oppoId.id;
          let result = await fetch(`http://localhost:4000/api/patron/update/opportunity/${id}`,{
            method:"PUT",
            body : JSON.stringify(opportunityDataww),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          });
          result = await result.json();
          console.log(result);
    notify()
    setTimeout(() => {
      navigate('/Uploaded_opportunities')
    }, 1000);
        
    } 
    
  return (
    <div>


<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <a className="navbar-brand "  href="/">
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

    <div className="patron-upload-opportunity container">
        <div className="patron-upload-opportunity-heading text-center">
            Edit opportunity
        </div>
        <div style={{borderWidth:"1px"}} className="card">
            <div className="card-body">
                <form action="uploaded-opportunities.html" onsubmit="return(validateEditOpportunity());">
                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Position</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control patron-upload-opportunity-inputPosition"
                               value={position} onChange={(e)=>setPosition(e.target.value)} id="position"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="aboutCompany" className="form-label patron-upload-opportunity-form-label">About
                            Company</label>
                        <textarea className="form-control" id="aboutCompany" value={about} onChange={(e)=>setAbout(e.target.value)} rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="Requirements"
                            className="form-label patron-upload-opportunity-form-label">Requirements</label>
                        <textarea className="form-control" id="requirements" value={requirements} onChange={(e)=>setRequirements(e.target.value)} rows="3"></textarea>
                    </div>
                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Duration</label>
                        {/* <div className="col-sm-10">
                            <div className="input-group mb-3 patron-upload-opportunity-inputDuration">
                                <input type="text" className="form-control patron-upload-opportunity-inputDuration-num"
                                    id="duration" aria-describedby="basic-addon2"/>
                                <select className="form-select patron-upload-opportunity-inputDuration-text" required>
                                    <option selected disabled value="choose">Choose</option>
                                    <option>Days</option>
                                    <option>Months</option>
                                    <option>Year</option>
                                </select>
                            </div>
                        </div> */}
                        <div>
                        <div className="col-sm-10">
                        <label for="StartDate"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Start Date
                        <input  type="date" name="startdate" id="startdate"  style={{border:"1px solid 	#B2BEB5"}} /></label>
                        </div>
                        <label for="EndDate"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">End Date
                        <input type="date" name="enddate" id="enddate"  style={{border:"1px solid 	#B2BEB5"}} /></label>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control patron-upload-opportunity-inputNumber" value={number} onChange={(e)=>setNumber(e.target.value)} id="number"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                <label
                  htmlFor="position"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                >
                  Budget
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control patron-upload-opportunity-inputNumber"
                    id="budget" 
                    value={budget}
                    onChange={(e)=>setBudget(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="position"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                >
                  Choose Type
                </label>
                <div className="col-sm-5">
                  <select className="form-select" name="Upload_type" value={type} onChange={(e)=>setType(e.target.value)} required>
                    <option selected value="choose">
                      Choose...
                    </option>
                    <option value="Solo">Solo</option>
                    <option value="Group">Group</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Language</label>
                        <div className="col-sm-5">
                        <select className="form-select"   name="Upload_type" value={language} onChange={(e)=>setLanguage(e.target.value)}
                                    required>
                                    <option selected  value="choose">Choose language</option>
                                    <option  value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Kannada">Kannada</option>
                                </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Mode</label>
                        <div className="col-sm-5">
                        <select className="form-select"   name="Upload_type" value={mode} onChange={(e)=>setMode(e.target.value)}
                                    required>
                                    <option selected  value="choose">Choose Mode</option>
                                    <option  value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                <label
                  htmlFor="position"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                >
                  Location
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control patron-upload-opportunity-inputNumber"
                    id="location"
                    title="Please fill the input properly"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    required

                  />
                </div>
              </div>
                    <div className="mb-3">
                        <label for="link-to-document"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label">Link
                            to
                            document</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" /*value={link_of_documents} onChange={(e)=>setLinkOfDocuments(e.target.value)}*/ id="link-to-document"/>
                        </div>
                    </div>
                    <div className="d-grid gap-1 d-md-flex justify-content-center patron-upload-opportunity-upload-button">
                        
                        <button className="btn btn-danger me-md-2 btn-new" onClick={handleupdateoppo} type="submit" value="Submit">
                            Save changes
                         </button>
                         
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}