
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Frontpage from './Frontpage'
import Patrondesc from './Patrondesc'
import Partnerdesc from './Partnersdesc'
import Artistdesc from './Artistdesc'
import Artloversdesc from './Artloversdesc'
import Clients from './Clients'
import Contact from './Contact'


import React, { useState } from "react";

import { Login } from "./Login";
import { Register } from "./Register";

import Patron_dashboard from './Patron_dashboard';
import Chat from "./Chat";

import Application from "./Application";
import Edit_Opportunity from "./Edit_Opportunity";
import Edit_patron_profile from "./Edit_patron_profile";

import Patron_search_artist from "./Patron_search_artist";
import Patron_view_application from "./Patron_view_application";
import Previously_hired_artists from "./Previously_hired_artists";
import Rate_previously_hired_artist from "./Rate_previously_hired_artist";

import Ratepatron from "./Ratepatron";
import Uploaded_Opportunities from "./Uploaded_Opportunities";
import Upload_Opportunity from "./Upload_Opportunity";
import View_artist_previous_experience from "./View_artist_previous_experience";
import Artist_edit_profile from './Artist_edit_profile'

import View_artist from "./View_artist";
import View_contacted_artist from './View_contacted_artist';
import View_shortlisted_artist from './View_shortlisted_artist';
import Patron_Registration from './Patron_Registration';
import Navbar from './Navbar';



import Navbar_frontpage from "./Navbar_frontpage";
import Artist_Navbar from "./Artist_Navbar";
import Artist_dashboard from "./Artist_dashboard";
import Applied_jobs_status from "./Applied_jobs_status";
import PreviousJobs from './PreviousJobs';
import Artist_application from "./Artist_application";
import Artist_feedback from "./Artist_feedback";
import Artist_application2 from "./Artist_application2";
import Artist_relevantskill from "./Artist_relevantskill";
import Artist_search_opportunity from "./Artist_search_opportunity";
import Artist_viewdetailopp from './Artist_viewdetailopp';
import Artist_application_submit from './Artist_application_submit';
import Artist_chat from './Artist_chat';
import View_skill_details from './View_skill_details';
import Artist_registration from './Artist_registration';
import Artist_skill_submit from './Artist_skill_submit';
import Terms_and_conditions from './Terms_and_conditions'

import Findingjobs from './Findingjobs';
import FindingTalent from './FindingTalent';
//import Community_listing from './Community_listing'
//import Community_guidelines from './Community_guidelines'
//import Create_community from './Create_community'
import Forgot_password from './Forgot_password'
import Applied_artist_application from './Applied_artist_application';
import Password_change from './Password_change'

 import Community_listing from './Community_listing'
import Community_guidelines from './Community_guidelines'
import Create_community from './Create_community'
import Chat_community from './Chat_community'
import Collaborations_search from './Collaborations_search.js'
import View_collabs  from './View_collabs'
import Collaboration_submission from './Collaboration_submission'
import Upload_collaborations from './Upload_collaborations'
import Applications_collab from './Applications_collab'
import View_artist_detail from './View_artist_detail'
export default function RouterPage() {

  // const [currentForm, setCurrentForm] = useState('register');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div>


   {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
<Register /> */}


    <Router>
        
        <Routes>
        <Route path="/" exact element={<Frontpage/>}/>
        <Route path="/Patrondesc" exact element={<Patrondesc/>}/>
        <Route path="/Artistdesc" exact element={<Artistdesc/>}/>
        <Route path="/Partnerdesc" exact element={<Partnerdesc/>}/>
        <Route path="/Artloversdesc" exact element={<Artloversdesc/>}/>
        <Route path="/Clients" exact element={<Clients/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>

        <Route path="/Register" exact element={<Register />}/>
        <Route path="/Login" exact element={<Login />}/>
     

        <Route path="/Patron_dashboard" exact element={<Patron_dashboard />}/>
   
   <Route path="/Application" exact element={<Application />}/>
   <Route path="/Chat" exact element={<Chat/>}/>
   <Route path="/Edit_Opportunity" exact element={<Edit_Opportunity />}/>
   <Route path="/Edit_Opportunity/:id" exact element={<Edit_Opportunity />}/>
   <Route path="/Edit_patron_profile" exact element={<Edit_patron_profile/>}/>
   <Route path="/Patron_search_artist" exact element={<Patron_search_artist />}/>
   <Route path="/Patron_view_application" exact element={<Patron_view_application/>}/>
   <Route path="/Previously_hired_artist" exact element={<Previously_hired_artists />}/>

<Route path="/Artist_viewdetailopp/:id" exact element={<Artist_viewdetailopp/>}/>
<Route path = "/Artist_application/:id" exact element = {<Artist_application/>}/>
<Route path = "/Artist_Application2/:id" exact element = {<Artist_application2/>}/>
<Route path = "/Artist_application_submit/:id" exact element = {<Artist_application_submit/>}/>
   <Route path="/Ratepatron" exact element={<Ratepatron/>}/>
   <Route path="/Upload_Opportunity" exact element={<Upload_Opportunity />}/>
   <Route path="/Uploaded_Opportunities" exact element={<Uploaded_Opportunities/>}/>
   <Route path="/Rate_previously_hired_artist" exact element={<Rate_previously_hired_artist />}/>
   <Route path="/View_artist/:id" exact element={<View_artist />}/>

   <Route path="/View_artist_previous_experience" exact element={<View_artist_previous_experience/>}/>
   <Route path="/View_contacted_artist" exact element={<View_contacted_artist/>}/>
   <Route path="/View_shortlisted_artist" exact element={<View_shortlisted_artist />}/>
   <Route path="/Patron_Registration" exact element={<Patron_Registration />}/>
   <Route path="/Navbar" exact element={<Navbar />}/>
   <Route path="/View_artist_detail/:id" exact element={<View_artist_detail/>}/>


   <Route path="/Artist_dashboard" exact element={<Artist_dashboard />}/>
   <Route path="/Artist_Navbar" exact element={<Artist_Navbar/>}/>
   <Route path="/Navbar_frontpage" exact element={<Navbar_frontpage />}/>
   <Route path="/Applied_jobs_status" exact element={<Applied_jobs_status />}/>
   <Route path="/PreviousJobs" exact element={<PreviousJobs/>}/>

   <Route path="/Artist_application" exact element={<Artist_application/>}/>
   <Route path="/Artist_application2" exact element={<Artist_application2/>}/>
   <Route path="/Artist_feedback" exact element={<Artist_feedback/>}/>
   <Route path="/Artist_relevantskill" exact element={<Artist_relevantskill/>}/>

   <Route path="/Artist_edit_profile" exact element={<Artist_edit_profile/>}/>
   <Route path="/Artist_search_opportunity" exact element={<Artist_search_opportunity/>}/>
   <Route path="/Artist_viewdetailopp" exact element={<Artist_viewdetailopp/>}/>
   <Route path="/Artist_application_submit" exact element={<Artist_application_submit/>}/>
   <Route path="/Artist_chat" exact element={<Artist_chat/>}/>

 <Route path="/Artist_registration" exact element={<Artist_registration/>}/>
   <Route path="/Artist_skill_submit" exact element={<Artist_skill_submit/>}/>
   <Route path="/View_skill_details" exact element={<View_skill_details/>}/>
   <Route path="/Terms_and_conditions" exact element={<Terms_and_conditions/>}/>


   <Route path="/Findingjobs" exact element={<Findingjobs/>}/>
   <Route path="/FindingTalent" exact element={<FindingTalent/>}/>

   <Route path="/Forgot_password" exact element={<Forgot_password/>}/>
   <Route path="/Applied_artist_application" exact element={<Applied_artist_application/>}/>
   <Route path="/Password_change" exact element={<Password_change/>}/>
   <Route path="/Collaborations_search" exact element={<Collaborations_search/>}/>
   <Route path="/View_collabs" exact element={<View_collabs/>}/>
   <Route path="/Collaboration_submission" exact element={<Collaboration_submission/>}/>
   <Route path="/Upload_collaborations" exact element={<Upload_collaborations/>}/>
   <Route path="/Applications_collab" exact element={<Applications_collab/>}/>
 <Route path="/Community_listing" exact element={<Community_listing/>}/>
   <Route path="/Community_guidelines" exact element={<Community_guidelines/>}/>
   <Route path="/Create_community" exact element={<Create_community/>}/>
   <Route path="/Chat_community" exact element={<Chat_community/>}/>

  
        </Routes>

        
    </Router>

    </div>
  )
}
