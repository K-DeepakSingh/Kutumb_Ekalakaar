import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Navbar.css";
import "./Patron.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Patron_Registration() {
  const [name_of_company, setNameOfCompany] = useState("");
  const [pname, setPname] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [pno, setPno] = useState("");
  const [emailid, setEmailid] = useState("");
  const [youtube_link, setYoutubeLink] = useState("");
  const [instagram_link, setInstagramLink] = useState("");
  const [facebook_link, setFacebookLink] = useState("");
  const [nature_of_offering, setNatureOfOffering] = useState("");
  const [selector, setSelector] = useState("");
  const [profession, setProfession] = useState("");
  const [type_of_art, setTypeOfArt] = useState("");
  const [category, setCategory] = useState("");
  const [patronStoreData, setPatronStoreData] = useState("");
  const [renders, setRenders] = useState(0);
  const [submitMessage, setSubmitMessage] = useState("Submit");
  const [editPage, setEditPage] = useState("Edit");
  const notify = () => toast('Registration succesfull', {
    position: toast.POSITION.BOTTOM_CENTER
  })
  let navigate = useNavigate()
  const patronRegister = async (e) => {
    e.preventDefault();
    const patronData = {
      name_of_company,
      pname,
      gender,
      location,
      pno,
      emailid,
      youtube_link,
      instagram_link,
      facebook_link,
      nature_of_offering,
      selector,
      profession,
      type_of_art,
      category,
    };
    const _id = localStorage.getItem("_id");
    let result = await fetch(
      `http://localhost:4000/api/patron/register/${_id}`,
      {
        method: "PUT",
        body: JSON.stringify(patronData),
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
      navigate('/Patron_Dashboard')
    }, 1000);
  };

  const _id = localStorage.getItem("_id");
  useEffect(() => {
    async function fetchData() {
      let patronRegisterData = await fetch(
        `http://localhost:4000/api/patron/${_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      patronRegisterData = await patronRegisterData.json();
      setPatronStoreData(patronRegisterData.patron);
    }
    fetchData()
      .then((d) => {
        setNameOfCompany(patronStoreData.name_of_company);
        setPname(patronStoreData.pname);
        setGender(patronStoreData.gender);
        setLocation(patronStoreData.location);
        setPno(patronStoreData.pno);
        setEmailid(patronStoreData.emailid);
        setYoutubeLink(patronStoreData.youtube_link);
        setInstagramLink(patronStoreData.instagram_link);
        setFacebookLink(patronStoreData.facebook_link);
        setNatureOfOffering(patronStoreData.nature_of_offering);
        setSelector(patronStoreData.selector);
        setProfession(patronStoreData.profession);
        setTypeOfArt(patronStoreData.type_of_art);
        setCategory(patronStoreData.category);
        setRenders(patronStoreData.renders);
      })
      .catch((err) => console.log(err));
  }, [emailid]);
  console.log(patronStoreData);

  /* let [companyError, setCompanyError] = useState(false)
  let checkComapany = (value) => {
    let regExp = new RegExp(/[a-zA-z]+/)
    let check = regExp.test(value)
    !check ? setCompanyError(true) : setCompanyError(false)
  }

  let [nameError, setNameError] = useState(false)
  let checkName = (value) => {
    let regExp = new RegExp(/[a-zA-z]+/)
    let check = regExp.test(value)
    !check ? setNameError(true) : setNameError(false)
  }

  let [phoneError, setPhoneError] = useState(false)
  let checkPhone = (value)=> {
    let regExp = new RegExp(/[1-9]{1}[0-9]{9}/)
    let check = regExp.test(value)
    !check ? setPhoneError(true) : setPhoneError(false)   
  } */


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
                className="btn btn-outline-danger btn-search "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="patron-registration container">
        <div className="header container text-center">
          <span className="register-text">
            <span className="text-danger ">Register</span> Your self
          </span>
        </div>

        <div className="row container patron-registration-page-image-form">
          <div className="col-lg-4 col-md-12 col-12 mt-4 patron-registration-page-image">
            <div className="about-img">
              <img
                src="assets/images/patron-registrationLeftImg.jpg"
                alt=""
                style={{ boxShadow: "0 10px 40px rgba(206, 13, 13, 0.5)" }}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <form id="regForm" onSubmit={patronRegister}>
              <div id="patron-registration-page-form-fluid">
                {/* <!-- Basic details section --> */}
                <div className="row  patron-registration-page-form-basic-details ">
                  <div className="patron-registration-page-form-basic-details-header text-center">
                    Basic Details
                  </div>

                  <div className="col-11">
                    <label htmlFor="validationCustom01" className="form-label">
                      Name of Group/Company
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={name_of_company}
                      onChange={(e) => setNameOfCompany(e.target.value)}
                      //onBlur={(e)=> checkComapany(e.target.value)}
                      name="companyname"
                      id="validationCustom01"
                      pattern="^[a-zA-Z ]*$"
                      title="please do it"
                      required
                    />
                    {/* {companyError ? <span>Invalid Company name</span> : <></>} */}
                  </div>

                  <div className="col-11">
                    <label htmlFor="validationCustom01" className="form-label">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="validationCustom01"
                      value={pname}
                      onChange={(e) => setPname(e.target.value)}
                      //onBlur={(e)=> checkName(e.target.value)}
                      pattern='^[a-zA-Z ]*$'
                      title="please fill it properly"
                      required
                    />
                    {/* {nameError ? <span>Invalid Name</span> : <></>} */}
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom04" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      id="patron-reg-inputs-selection-age"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      title="Choose a gender"
                      required
                    >
                      <option selected disabled value="choose">
                        Choose...
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer Not to Say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom02" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      name="location"
                      id="validationCustom02"
                      pattern="[A-Za-z]+"
                      required
                    />
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom02" className="form-label">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="form-control phone"
                      name="phone"
                      id="phone"
                      value={pno}
                      pattern='[1-9]{1}[0-9]{9}'
                      title="Phone number must be of 10 digits"
                      onChange={(e) => setPno(e.target.value)}
                      //onBlur={(e)=> checkPhone(e.target.value)}
                      required
                    />
                    {/* {phoneError ? <span>Invalid Phone Number</span> : <></>} */}
                  </div>
                  <div className="col-11">
                    <label
                      htmlFor="validationCustomUsername"
                      className="form-label"
                    >
                      Email ID
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={localStorage.getItem("email")}
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom03" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="website"
                      id="validationCustom03"
                      required
                    />
                  </div>
                  <div className="col-11">
                    <label
                      htmlFor="validationCustomUs ername"
                      className="form-label"
                    >
                      YouTube Link  
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        value={youtube_link}
                        onChange={(e) => setYoutubeLink(e.target.value)}
                        className="form-control"
                        name="email"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-11">
                    <label
                      htmlFor="validationCustomUsername"
                      className="form-label"
                    >
                      Facebook Link
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        value={facebook_link}
                        onChange={(e) => setFacebookLink(e.target.value)}
                        name="email"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                  </div>
                  <div className="col-11">
                    <label
                      htmlFor="validationCustomUsername"
                      className="form-label"
                    >
                      Instagram Link
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        value={instagram_link}
                        onChange={(e) => setInstagramLink(e.target.value)}
                        className="form-control"
                        name="email"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-3 patron-registration-page-form-Offering ">
                  <div className="patron-registration-page-form-basic-details-header text-center">
                    Offering
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom04" className="form-label">
                      Nature of Offering
                    </label>
                    <select
                      className="form-select"
                      value={nature_of_offering}
                      onChange={(e) => setNatureOfOffering(e.target.value)}
                      name="curr_position"
                      id="patron-reg-inputs-selection-nature-offerig"
                      required
                      title="Choose Nature of offering"
                    >
                      <option selected disabled value="choose">
                        Choose...
                      </option>
                      <option value="Organise Performance">
                        Organise Performance
                      </option>
                      <option value="Grant or Sponser">Grant or Sponser</option>
                      <option value="Art Mentor/Guru">Art Mentor/Guru</option>
                      <option value="Art Promoter/Lover">
                        Art Promoter/Lover
                      </option>
                    </select>
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom04" className="form-label">
                      Selector
                    </label>
                    <select
                      className="form-select"
                      value={selector}
                      onChange={(e) => setSelector(e.target.value)}
                      name="curr_position"
                      id="patron-reg-inputs-selection-selector"
                      required
                    >
                      <option selected disabled value="choose">
                        Choose...
                      </option>
                      <option value="Song">Song</option>
                      <option value="Dance">Dance</option>
                      <option value="Music">Music</option>
                      <option value="Theatre">Theatre</option>
                      <option value="Creative">Creative</option>
                      <option value="Emerging">Emerging</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom02" className="form-label">
                      Kala/Art/Profession
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="KalaArtProfession"
                      id="validationCustom02"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                     
                      required
                      title="only alphabet should be present"
                      
                    />
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom04" className="form-label">
                      Type
                    </label>
                    <select
                      className="form-select"
                      value={type_of_art}
                      onChange={(e) => setTypeOfArt(e.target.value)}
                      name="curr_position"
                      id="patron-reg-inputs-selection-type"
                      required
                    >
                      <option selected disabled value="choose">
                        Choose...
                      </option>
                      <option value="Indiviual">Individual</option>
                      <option value="Group">Group</option>
                      <option value="Fusion">Fusion</option>
                    </select>
                  </div>
                  <div className="col-11">
                    <label htmlFor="validationCustom04" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-select"
                      name="curr_position"
                      id="patron-reg-inputs-selection-category"
                      required
                    >
                      <option selected disabled value="choose">
                        Choose...
                      </option>
                      <option value="Exper">Expert</option>
                      <option value="Professional">Professional</option>
                      <option value="Emerging">Emerging</option>
                      <option value="Child Artist">Child Artist</option>
                      <option value="Passionate">Passionate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {/* <!-- Offering section --> */}

                {/* <div className="popup center">
                  <div className="icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="title">Success!!</div>
                  <div className="description">
                    Thanks You have registered Successfully!!
                  </div>
                  <div className="dismiss-btn">
                    <button id="dismiss-popup-btn" onClick={popup_btn_dismiss}>
                      <Link to="/Patron_dashboard"> Click to continue</Link>
                    </button>
                  </div>
                </div> */}
                <ToastContainer />
                <div className="center mt-2 ">
                  <button
                    className="btn btn-danger btn-new  me-md-2"
                    id="open-popup-btn"
                    style={{marginTop: '1.5rem'}}
                    //onClick={popup_btn_open}
                  >
                    Submit
                  </button>
                </div>

                {/* <!-- Buttons --> */}
              </div>
            </form>
            {/* <div className="gap-2 d-md-flex justify-content-end patron-registration-buttons"
                            id="previous-button">
                         
                            <button className="btn btn-danger btn-new  me-md-2" onClick={popup_btn_open} type="submit" id="prevBtn" 
                                style={{"margin-bottom": "10px"}} >Submit</button>
                          
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
