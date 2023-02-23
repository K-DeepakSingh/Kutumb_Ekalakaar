import React, { Component } from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "./Navbar.css";
import "./Patron.css";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit_patron_profile() {
  const [artistname, setArtistName] = useState("");
  const [artistlname, setArtistlame] = useState("");
  const [artist_email, setArtistEmail] = useState("");
  const [artist_phone, setArtistPhone] = useState("");
  const [patronnmaeofcompany , setPatronnmaeofcompany] = useState("");
  const [totaldata, setTotalData] = useState("");

  /* let [phoneError, setPhoneError] = useState(false)
  let checkPhone = (value)=> {
    let regExp = new RegExp(/[1-9]{1}[0-9]{9}/)
    let check = regExp.test(value)
    !check ? setPhoneError(true) : setPhoneError(false)   
  }

  let [nameError, setNameError] = useState(false)
  let checkName = (value)=> {
    let regExp = new RegExp(/[A-Za-z]+/)
    let check = regExp.test(value)
    !check ? setNameError(true) : setNameError(false) 
  } */

  const notify = () => toast("Edited succesfully!");
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const obj = {
      name: artistname,
      lastname: artistlname,
      email: artist_email,
      phoneno: artist_phone,
      patronnmaeofcompany
    };
    console.log('before notify');
    
     let result = await fetch(
      `http://localhost:4000/api/user/${localStorage.getItem("_id")}`,
      {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
      }
      );
    result = await result.json();
    console.log(result); 
      
    notify()
    setTimeout(() => {
      navigate('/Patron_dashboard')
    }, 1000);
  };
  useEffect(() => {
    const fetchData = async () => {
      let artistinitialpage = await fetch(
        `http://localhost:4000/api/patron/${localStorage.getItem("_id")}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      artistinitialpage = await artistinitialpage.json();
      setTotalData(artistinitialpage);

      console.log(totaldata);
    };
    fetchData().then((d) => {
      setArtistName(totaldata.name);
      setArtistlame(totaldata.lastname);
      setArtistPhone(totaldata.phoneno);
      setArtistEmail(totaldata.email);
      setPatronnmaeofcompany(totaldata.patron.name_of_company);
    });
  }, [artist_email]);
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
      <div className="edit-patron-profile">
        <div className="text-center text-danger edit-patron-profile-text">
          EDIT YOUR PROFILE
        </div>
        <div className="container patron-center">
          <div style={{ borderWidth: "1px" }} className="card">
            <div className="card-body ">
              <form
                style={{ marginLeft: "20px" }}
                //action="edit-patron-profile.html"
                onSubmit={handleSubmit}
              >
                <div className="row justify-content-start patron-profile-photo-container">
                  <div className="col">
                    <img
                      className="patron-profile-photo"
                      id="chosen-img"
                      src="assets/images/Linkb11.jpeg"
                    />

                    {/* <input type="file" id="upload-button" accept="image/*" style={{display: "none"}}
                                    value="img"/> */}

                    <label
                      className=" text-danger patron-change-profile-photo-text"
                      for="upload-button"
                      style={{ cursor: "pointer" }}
                    >
                      Change profile photo
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="row container edit-patron-profile-input-rows"
                    id="inputs"
                    style={{ marginBottom: " 10px" }}
                  >
                    <div className="col-12 text-end" style={{ margin: "2%" }}>
                      <Link
                        to=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <i className="bi bi-pen-fill "></i>
                      </Link>
                    </div>

                    <div className="col space">
                      <label
                        for="validationCustom01"
                        className="form-label edit-patron-profile-input-lable"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        value={artistname}
                        onChange={(e) => setArtistName(e.target.value)}
                        //onBlur={(e)=> checkName(e.target.value)}
                        className="form-control"
                        id="firstname"
                        required
                        pattern="[A-Za-z]+"
                        title="Only alphabet should be present"
                      />
                      {/* {nameError ? <span>Invalid name</span> : <></>} */}
                    </div>
                    <div className="col space">
                      <label
                        for="validationCustom02"
                        className="form-label edit-patron-profile-input-lable"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        value={artistlname}
                        onChange={(e) => setArtistlame(e.target.value)}
                        //onBlur={(e)=> checkName(e.target.value)}
                        className="form-control"
                        id="lastname"
                        required
                        pattern="[A-Za-z]+"
                        title="Only alphabets should be present"
                      />
                      {/* {nameError ? <span>Invalid name</span> : <></>} */}
                    </div>
                  </div>
                  <div
                    className="row container edit-patron-profile-input-rows"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="col space">
                      <label
                        for="validationCustom02"
                        className="form-label edit-patron-profile-input-lable"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        value={artist_phone}
                        onChange={(e) => setArtistPhone(e.target.value)}
                        //onBlur={(e)=> checkPhone(e.target.value)}
                        className="form-control"
                        pattern="[1-9]{1}[0-9]{9}"
                        id="phone"
                        required
                        title="10 digits should be present"
                      />
                      {/* {phoneError ? <span>Invalid Number</span> : <></>} */}
                    </div>
                    <div className="col space">
                      <label
                        for="validationCustomUsername"
                        className="form-label edit-patron-profile-input-lable"
                      >
                        Email
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                          type="text"
                          value={artist_email}
                          className="form-control"
                          id="email"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="row container edit-patron-profile-input-rows"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="col">
                      <label
                        for="validationCustom02"
                        className="form-label edit-patron-profile-input-lable"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Company-name"
                        value={patronnmaeofcompany}
                        onChange={(e)=>setPatronnmaeofcompany(e.target.value)}
                      />
                    </div>
                    {/* <div className="col space">
                      <label
                        for="validationCustomUsername"
                        className="form-label edit-patron-profile-input-lable"
                      >
                        Mostly Hire For
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          id="mostyle-hired-for"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div
                    className="position-relative edit-patron-profile-save-changes"
                    style={{ marginTop: "40px" }}
                  ><ToastContainer />
                    <input className="btn btn-danger btn-new" type="submit"></input>
                    
                    <div className="position-absolute bottom-0">
                      {/* <Link
                       // to="/Patron_dashboard"
                        className="btn btn-danger btn-new"
                        type="submit"
                        value="Submit"
                      >
                        Save Changes
                      </Link> */}
                    </div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
