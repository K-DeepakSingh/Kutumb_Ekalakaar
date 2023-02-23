import React from 'react'
import { Link } from 'react-router-dom'
import './Frontpage.css'
import './Dashboard.css'
import Navbar_frontpage from './Navbar_frontpage'

export default function Contact() {
  return (
    <div>


         {/* header */}
         <Navbar_frontpage/>
   {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <Link to="#" className="navbar-brand">
          <img src="assets/images/logo1.jpg"  height="58" width="88" alt="logo"/>
          <span className="text-danger text"><strong>e</strong>kala</span>kaar
        </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/Patrondesc" className="nav-item nav-link">Patron</Link>
              <Link to="/Linkrtistdesc" className="nav-item nav-link">Artist</Link>
              <Link to="/Partnerdesc" className="nav-item nav-link">Partners</Link>
              <Link to="/Linkrtloversdesc" className="nav-item nav-link">Art Lovers</Link>
              <Link to="/Clients" className="nav-item nav-link">Clients</Link>
              <Link to="/Contact" className="nav-item nav-link">Contact</Link>
              
          </div>
          <div className="navbar-nav ms-auto">
              <Link to="/Login" className="nav-item nav-link ">Login/Join</Link>
          
          </div>
      </div>
  </div>
</nav> */}


{/* <!-- ********contact************** --> */}
  <section id="Contribute" class="section-padding">
    <div class="container">
        <div class="col-md-12">
            <div class="section-header text-center pb-5">
                <h1 class="shadow p-3 mb-3 bg-dark  "><span class="text-danger"><strong>We love to hear You </strong></span>
                 </h1>
                <p class="h4"><strong class="text-danger">ekalakaar.com</strong> has being trying to engage with
                    People across platforms,
                    If you are
                    having any Query you can raise here 
                    
                    We will assist you soon.
                </p>
            </div>

        </div>
        <div class="row">

        </div>

        <div class="row">

            <div class="col-md-12" style={{"padding-left": "10%", "padding-right":"10%"}}>
                <form class="row g-3" action="partials/_handleContact.php" method="post">
                    <div class="col-md-6">
                        <label for="validationDefault01" class="form-label">Name</label>
                        <input type="text" class="form-control" id="validationDefault01" name="Name" value=""
                            required/>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault01" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="validationDefault01" name="contactNumber"
                            value="" required/>
                    </div>

                  

                    <div class="col-md-6">
                        <label for="validationDefaultUsername" class="form-label">Email Id</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" class="form-control" name="email" id="validationDefaultUsername"
                                aria-describedby="inputGroupPrepend2" required/>
                        </div>
                    </div>

                    
                    
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">Location</label>
                        <input type="text" class="form-control" name="location" id="validationDefault03" required/>
                    </div>


              
                    
                    <div class="row" style={{"margin-top":"20px "}}>
                        <div class="col-md-6">
                            <label for="exampleFormControlTextarea1" class="form-label">What's on you mind?
                            
                            </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="award"
                                rows="3"></textarea>

                        </div>
                    </div>




                    <div class="col-12"   style={{"margin-top":"30px " }}>
                        <button class="btn btn-danger "  style={{"text-align": "center"}}type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>



{/* <!-- conatct --> */}
<div class='container'>
        <div class="col-sm-12">
            <div class="section-header text-center mt-5 ">
                <h1 class="shadow p-3 mb-5 bg-dark   "><span class="text-danger"><strong>Contact us</strong></span>
                </h1>
            </div>
        </div>
         <div class="upper_section">
            <div class="findus">
                <div class="icon">
                <i class="fa-solid fa-location-dot fa-2x"></i>
                </div>
                <div class="content">
                    <div class="head_contact">
                        Find us
                    </div>
                    <div class="cont">
                        New Delhi | Mumbai | Bhubaneshwar (Odisha)
                    </div>
                </div>
            </div>

            <div class="callus">
                <div class="icon">
                <i class="fa-solid fa-phone-flip fa-2x"></i>
                </div>
                <div class="content">
                    <div class="head_contact">
                        Call us
                    </div>
                    <div class="cont">07701872112</div>
                </div>
            </div>

            <div class="mailus">
                <div class="icon">
                <i class="fa-solid fa-envelope fa-2x"></i>
                </div>
                <div class="content">
                    <div class="head_contact">Mail us</div>
                    <div class="cont">contact@eKalakaar.com</div>
                </div>
            </div>
         </div>
         <div class="line"></div>
            <div class="lower_section">
                <div class='section'>
                    <div class="head_ekalakaar">
                        <div class="one">EKALA </div>
                        <div class="two"> KAAR</div>
                    </div>
                    <div class="cont_ekalakaar">
                        <span class="one">eKalakaar.com</span> is the right platform for creating an ecosystem to bring both the artists and industry together.
                    </div>
                   
                    
                </div>
                <div class='section'>
                    <div class="head_usefullinks">
                        Useful Links
                    </div>
                    <div class="line_usefullinks"></div>
                    <div class="links_useful">
                    <div class="col">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/Clients">Clients</Link></div>
                <div><Link to="/Login">Join Us</Link></div>
                <div><Link to="/Contact">Contact Us</Link></div>
            </div>
            <div class="col">
            <div><Link to="/">About</Link></div>
            <div><Link to="#">Opportunities</Link></div>
            <div><Link to="#mediapic">Media</Link></div>
            <div><Link to="/Contact">Customer Care Services</Link></div>
            </div>
                    </div>
                </div>
                <div class="section">
                    <div class="reportprob">
                        Report a Problem
                    </div>
                    <div class="line_usefullinks"></div>
                    <div class="query">
                        <div>Choose your query:</div>
                        <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select area of concern
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item color" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>



  <textarea class='txt'
  placeholder="Describe your issue"
  ></textarea>
                    </div>
                </div>
            </div>
      </div>



    </div>
  )
}
