
  import React from 'react'
  import { useState, useEffect } from 'react';
  import Artist_Navbar from './Artist_Navbar'
  import { Link } from 'react-router-dom';
  import './css_new.css'
  import { useNavigate } from 'react-router-dom';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  export default function Artist_edit_profile() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [pno, setPno] = useState('');
    const [emailid, setEmailid] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [caste, setCaste] = useState('');
    const [religion, setReligion] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [language, setLanguage] = useState('');
    const [education , setEducation] = useState('');
    const [skils, setSkill] = useState('');
    const [category, setCategory] = useState('');
    const [experince , setExperience] = useState('');
    const [url, setUrl] = useState('');
    const [photo, setPhoto] = useState('');
    const [artistStoreData, setArtistStoreData] = useState('');
    let navigate = useNavigate()
    const notify = () => toast('Edited succesfully', {
      position: toast.POSITION.TOP_CENTER
    })


 const artistRegister = async(e)=>{
      e.preventDefault();
      const artistData = {
        fname,
        lname,
        pno,
        emailid,
        age,
        gender,
        caste,
        religion,
        height,
        weight,
        language,
        education,
        skills : skils ,
        category,
        experince,
        url,
        photo
      }
      
      const _id = localStorage.getItem('_id');
      let result = await fetch(`http://localhost:4000/api/users/register/${_id}`,{
        method : 'PUT',
        body : JSON.stringify(artistData),
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        }
      })
      result = await result.json();
      
console.log(result);
notify()
setTimeout(() => {
  navigate('/Artist_Dashboard')
}, 1000);  
      
    }
    const _id = localStorage.getItem('_id');
    useEffect(()=>{
      async function fetchData(){
        let artistRegisterData = await fetch(`http://localhost:4000/api/user/${_id}`,{
          method: 'GET',
          headers :{
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        })
        artistRegisterData = await artistRegisterData.json();
        setArtistStoreData(artistRegisterData.artist);
        console.log(artistRegisterData.artist);
        console.log(artistRegisterData.name);
       console.log(artistRegisterData);

      }
      fetchData().then((data)=>{
        setFname(artistStoreData.fname);
        setLname(artistStoreData.lname);
        setPno(artistStoreData.pno);
        setEmailid(artistStoreData.emailid);
        setAge(artistStoreData.age);
        setGender(artistStoreData.gender);
        setCaste(artistStoreData.caste);
        setReligion(artistStoreData.religion);
        setHeight(artistStoreData.height);
        setWeight(artistStoreData.weight);
        setLanguage(artistStoreData.language);
        setEducation(artistStoreData.education);
        setSkill(artistStoreData.skils);
        setCategory(artistStoreData.category);
        setExperience(artistStoreData.experince);
        setUrl(artistStoreData.url);
        
      }).catch(err=>console.error(err));
    },[emailid]);
    
    const popup_btn_open=()=>{
    document.getElementById("open-popup-btn").style.display = "none";
     document.getElementsByClassName("popup")[0].classList.add("active");
}
const popup_btn_dismiss=()=>{
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
}
  return (
  <div>
     
    
     <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand"  href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search"  />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    {/* editUser */}
    <div className="mb-5" style={{width: '60%', margin: 'auto',marginTop:"75px"}}>
      <div className="col-md-12 ">
        <div className="section-header text-center pb-5 mt-5">
          <h2 className="shadow p-3 mb-5 bg-body rounded">
            <span className="text-danger">EDIT YOUR PROFILE</span> </h2>
        </div>
      </div>
      {/* photo */}
      <div className="mx-4">
        <img style={{width: 145}} className="rounded-circle" src="./assets/images/Linkb11.jpeg" alt />
        <div>
          <a href><span style={{fontWeight: 'bolder'}} className="text-danger h4">Change profile photo</span></a>
        </div>
      </div>
      <form action='' onSubmit={artistRegister}>
      <div className="p-4 row">
        <div className="p-2 col-md-6">
          {/* first Name */}
          <div>
            <label htmlFor="validationCustom01" className="form-label">First name</label>
            <input type="text" className="form-control" value={fname} onChange={(e)=>setFname(e.target.value)} name="firstname" id="validationCustom01" required />
          </div>
          {/* Phonenumber */}
          <div>
            <label htmlFor="validationCustom01" className="form-label"> Phone Number</label>
            <input type="text" className="form-control" value={pno} onChange={(e)=>setPno(e.target.value)} name="firstname" id="validationCustom01" required />
          </div>
          {/* Age */}
          <div>
            <label htmlFor="validationCustom02" className="form-label">Age</label>
            <input type="number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}  name="age" id="validationCustom02" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          {/* Caste */}
          <div>
            <label htmlFor="validationCustom04" className="form-label">Caste</label>
            <select className="form-select" value={caste} onChange={(e)=>setCaste(e.target.value)} id="validationCustom04" name="caste" required>
              <option selected value>Choose...</option>
              <option value="OBC">OBC</option>
              <option value="General">General</option>
              <option value="ST/SC">ST/SC</option>
            </select>
            <div className="invalid-feedback">
              Please select your Caste
            </div>
          </div>
          {/* Height */}
          <div>
            <label htmlFor="validationCustom05" className="form-label">Height</label>
            <input type="text" className="form-control" value={height} onChange={(e)=>setHeight(e.target.value)} name="height" id="validationCustom05" required />
            <div className="invalid-feedback">
              Please provide Your height
            </div>
          </div>
          {/* Language */}
          <div>
            <label htmlFor="validationCustom05" className="form-label">Language</label>
            <input type="text" className="form-control" value={language} onChange={(e)=>setLanguage(e.target.value)} name="language" id="validationCustom05" required />
            <div className="invalid-feedback">
              Please provide your Education
            </div>
          </div>
          {/* Skills */}
          <div>
            <label htmlFor="validationCustom05" className="form-label">Skills</label>
            <input type="text" className="form-control" value={skils} onChange={(e)=>setSkill(e.target.value)} name="skils" id="validationCustom05" required />
            <div className="invalid-feedback">
              Please provide your Skills
            </div>
          </div>
        </div>
        <div className="p-2 col-md-6">
          {/* lastName */}
          <div>
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
            <input type="text" className="form-control" value={lname} onChange={(e)=>setLname(e.target.value)} name="lastname" id="validationCustom02" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          {/* Email - id */}
          <div>
            <label htmlFor="validationCustomUsername" className="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control"value={localStorage.getItem('email')}  name="email" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please enter your valid email id
              </div>
            </div>
          </div>
          {/* Gender   */}
          <div>
            <label htmlFor="validationCustom04" className="form-label">Gender</label>
            <select className="form-select" id="validationCustom04" name="gender" required>
              <option selected disabled value>Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer Not TO Say">Prefer not to say</option>
            </select>
            <div className="invalid-feedback">
              Please select a Gender.
            </div>
          </div>
         
          {/* Religion */}
          <div>
            <label htmlFor="validationCustom03" className="form-label">Religion</label>
            <input type="text" className="form-control" value={religion} onChange={(e)=>setReligion(e.target.value)}  name="religion" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          {/* Weight */}
          <div>
            <label htmlFor="validationCustom05" className="form-label">Weight</label>
            <input type="number" className="form-control" value={weight} onChange={(e)=>setWeight(e.target.value)} name="weight" id="validationCustom05" required />
            <div className="invalid-feedback">
              Please provide your Weight.
            </div>
          </div>
          {/* Education */}
          <div>
            <label htmlFor="validationCustom03" className="form-label">Education</label>
            <input type="text" className="form-control" value={education} onChange={(e)=>setEducation(e.target.value)} name="education" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide your Education
            </div>
          </div>
           {/** Category */}
          <div>
            <label htmlFor="validationCustom03" className="form-label">Category</label>
            <input type="text" className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}  name="religion" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          {/* Experience */}
          <div>
            <label htmlFor="validationCustom05" className="form-label">Experience</label>
            <input type="number" className="form-control" value={experince} onChange={(e)=>setExperience(e.target.value)} name="experience" id="validationCustom05" required />
            <div className="invalid-feedback">
              Please provide your Experience.
            </div>
          </div>
        </div>
      </div>
      <div className="px-4" style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span className="mb-2">Url for any video link (Social Media Link such as Youtube / Insta / Facebook ) </span>
          <input type="text"value={url} onChange={(e)=>setUrl(e.target.value)} style={{width: '50%'}} />
        </div>
        <div>
          <label className="mb-2 mt-4" htmlFor="exampleFormControlFile1">Example file input</label>
          <br />
          <input type="file" style={{width: '50%'}} value={photo} onChange={(e)=>setPhoto(e.target.value)} className="form-control-file" id="exampleFormControlFile1"  />
        </div>
      </div>

      
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
     {/* <input type ='submit' id="open-popup-btn" onClick={popup_btn_open} /> */}
      </form>
    </div>
  </div>
  )
  }
