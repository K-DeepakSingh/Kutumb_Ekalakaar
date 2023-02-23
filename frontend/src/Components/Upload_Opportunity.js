import React from "react";
import { useState, useEffect } from "react";
import Script from "./Script";
import Navbar from "./Navbar";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import "./Patron.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Upload_Opportunity() {
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [requirements, setRequirements] = useState("");
  const [budget , setBudget] = useState("");
  const [type , setType] = useState("");
  const [language, setLanguage] = useState("");
  const [mode , setMode] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState(0);
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [link_of_documents, setLinkOfDocuments] = useState("");
  
  
  const notify = () => toast("uploaded succesfully", {
    position: toast.POSITION.BOTTOM_CENTER
  });
  /* let [positionError, setPositionError] = useState(false)
  let checkPosition = (value) => {
    let regExp = new RegExp(/[a-zA-z0-9]/)
    let check = regExp.test(value)
    !check ? setPositionError(true) : setPositionError(false)
  }

  let [aboutError, setAboutError] = useState(false)
  let checkAbout = (value) => {
      value.length < 1 ? setAboutError(true) : setAboutError(false)
  }

  let [reqError, setReqError] = useState(false)
  let checkReq = (value) => {
      value.length < 1 ? setReqError(true) : setReqError(false)

  } */


  const posted_by_email = localStorage.getItem("email");
  let navigate = useNavigate()
  let [showPopup, setShowPopup] = useState(false)
  const handleopportunity = async (e) => {
    e.preventDefault();
    const opportunityData = {
      posted_by_email,
      position,
      about,
      requirements,
      duration: startdate + " || " + enddate,
      number,
      budget,
      type,
      language,
      mode,
      location,
      link_of_documents,
    };
    const _id = localStorage.getItem("_id");
    console.log(opportunityData);
    let result = await fetch(
      `http://localhost:4000/api/patron/create/opportunity/${_id}`,
      {
        method: "POST",
        body: JSON.stringify(opportunityData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    result = await result.json();
    console.log(result);
    notify()
    setTimeout(() => {
      navigate('/Uploaded_opportunities')
    }, 1000);
    
  };
  const popup_btn_open = () => {
    document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  };
  const popup_btn_dismiss = () => {
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
  };

    

  return (
    <div>
      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            <Navbar className="nav_artist" />
            <a className="navbar-brand " href="/">
              <span className="text-danger text">
                {" "}
                <strong>ekala</strong>
              </span>
              kaar
            </a>
          </div>
          <div className="right-component">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search artist"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger btn-search"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="patron-upload-opportunity container">
        <div className="patron-upload-opportunity-heading text-center">
          Upload new opportunity
        </div>
        <div style={{ borderWidth: "1px" }} className="card">
          <div className="card-body">
            <form
              //action="uploaded-opportunities.html"
              onSubmit={handleopportunity}
            >
              <div className="mb-3 row">
                <label
                  htmlFor="position"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                >
                  Position
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    //onBlur={e => checkPosition(e.target.value)}
                    className="form-control patron-upload-opportunity-inputPosition"
                    id="position"
                    pattern="^[a-zA-Z ]*$"
                    title="only alphabet should be present"
                    required
                  />
                  {/* {positionError ? <span>please fill form properly </span> : <></>} */}
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="aboutCompany"
                  className="form-label patron-upload-opportunity-form-label"
                >
                  About Company
                </label>
                <textarea
                  className="form-control"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  //onBlur = {e=> {checkAbout(e.target.value)}}
                  id="aboutCompany"
                  rows="3"
                  title="only alphabets should be present"
                  required
                ></textarea>
                {/* {aboutError ? <span>Please Fill the field</span> : <></>} */}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="Requirements"
                  className="form-label patron-upload-opportunity-form-label"
                >
                  Requirements
                </label>
                <textarea
                  className="form-control"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  //onBlur={e => checkReq(e.target.value)}
                  id="requirements"
                  rows="3"
                  required
                  pattern='^[a-zA-Z ]*$'
                  title="only alphabet should be present"
                ></textarea>
                {/* {reqError ? <span>please fill the field</span> : <></>} */}
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="position"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                >
                  Duration
                </label>
                {/* <div className="col-sm-10">
                            <div className="input-group mb-3 patron-upload-opportunity-inputDuration">
                                <input type="text" className="form-control patron-upload-opportunity-inputDuration-num"
                                    aria-describedby="basic-addon2" id="duration"/>
                                <select className="form-select patron-upload-opportunity-inputDuration-text" required>
                                    <option selected disabled value="choose">Choose</option>
                                    <option>Days</option>
                                    <option>Months</option>
                                    <option>Year</option>
                                </select>
                            </div>
                        </div> */}
                <div className="col-sm-10">
                  <div>
                    <label
                      htmlFor="StartDate"
                      className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                    >
                      Start Date
                      <input
                        type="date"
                        name="startdate"
                        value={startdate}
                        onChange={(e) => setStartDate(e.target.value)}
                        id="startdate"
                        style={{ border: "1px solid 	#B2BEB5" }}
                        title='Please fill the form properly'
                        required
                      />
                    </label>
                  </div>
                  <label
                    htmlFor="EndDate"
                    className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                  >
                    End Date
                    <input
                      type="date"
                      name="enddate"
                      value={enddate}
                      onChange={(e) => setEndDate(e.target.value)}
                      id="enddate"
                      style={{ border: "1px solid 	#B2BEB5" }}
                      required
                      title="Please the form properly"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="position"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box"
                >
                  Number
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="form-control patron-upload-opportunity-inputNumber"
                    id="number"
                    required
                  />
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
                  <select className="form-select" name="Upload_type" value={type} onChange={(e)=>setType(e.target.type)} required>
                    <option selected  value="choose">
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
                        <select className="form-select" value={language} onChange={(e)=>setLanguage(e.target.value)}  name="Upload_type"
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
                        <select className="form-select" value={mode} onChange={(e)=>setMode(e.target.value)} name="Upload_type"
                                    required>
                                    <option selected  value="choose">Choose Mode</option>
                                    <option  value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                        </div>
                    </div>

                    {/* <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Art</label>
                        <div className="col-sm-5">
                        <select className="form-select"   name="Upload_type"
                                    required>
                                    <option selected  value="choose">Choose Art</option>
                                    <option  value="Dance">Dance</option>
                                    <option value="Music">Music</option>
                                    <option value="Singing">Singing</option>
                                </select>
                        </di5
                    </div> */}

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
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    //onBlur={e => checkLocation(e.target.value)}
                    className="form-control patron-upload-opportunity-inputNumber"
                    id="location"
                    title="Please fill the input properly"
                    required

                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="link-to-document"
                  className="col-sm-2 col-form-label patron-upload-opportunity-form-label"
                >
                  Link to document
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={link_of_documents}
                    onChange={(e) => setLinkOfDocuments(e.target.value)}
                    className="form-control"
                    id="link-to-document"
                  />
                </div>
              </div>
              {/* {showPopup ? <div className="popup center" style={{ left: "350px" }}>
                <div className="icon">
                  <i className="fa fa-check"></i>
                </div>
                <div className="title">Success!!</div>
                <div className="description">
                  Thankyou for your opportunity is uploaded Successfully!!
                </div>
                <div className="dismiss-btn">
                  <button id="dismiss-popup-btn" onClick={popup_btn_dismiss}>
                    <Link to="/Uploaded_opportunities">Click to continue</Link>
                  </button>
                </div>
              </div> : <></>} */}
              <div className="d-grid gap-1 d-md-flex justify-content-center patron-upload-opportunity-upload-button">
                <input
                  className="btn btn-danger me-md-2 btn-new"
                  id="open-popup-btn"
                  //onClick={popup_btn_open}
                  type="submit"
                  value="Upload"
                />
                {/* <input type={'submit'} value={'Submit'}/> */}
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
