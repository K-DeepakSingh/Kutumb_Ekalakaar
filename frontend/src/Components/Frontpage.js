import React from 'react'
import { Link } from 'react-router-dom'
// import './Frontpage.css'
import './Dashboard.css'
import Navbar_frontpage from './Navbar_frontpage.js'
// import Unorderedlist from 'react-native-unordered-list'

export default function Frontpage() {
  
  return (
 <div>

       {/* header */}
       <Navbar_frontpage/>
   {/* <nav className="navbar nav_frontpage navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <Link to="#" className="navbar-brand">
          <img src="assets/images/logo1.jpg"  height="58" width="88" alt="logo"/>
          <span className="text-danger text"><strong>e</strong>kala</span>kaar
        </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
          <span className="navbar-toggler-icon"></span>
      </button>
      
      <div  className="collapse navbar-collapse nav-togg" id="navbarCollapse">
          <div className="navbar-nav" >
          <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/Patrondesc" className="nav-item nav-link">Patron</Link>
              <Link to="/Linkrtistdesc" className="nav-item nav-link">Artist</Link>
              <Link to="/Partnerdesc" className="nav-item nav-link">Partners</Link>
              <Link to="/Linkrtloversdesc" className="nav-item nav-link">Art Lovers</Link>
              <Link to="/Clients" className="nav-item nav-link">Clients</Link>
              <Link to="/Contact" className="nav-item nav-link">Contacts</Link>
           
              
          </div>
          <div className="navbar-nav ms-auto">
              <Link to="/Login" className="nav-item nav-link ">Login/Join</Link>
          
          </div>
      </div>
  </div>
</nav> */}



 {/* <!-- carasouel images -->  */}
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner my-2 "  >
      <div className="carousel-item active">
        <img src="assets/carousel_images/ekalakkar_frontpic.jpeg" height="570px" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Dance_1.jpeg" height="570px"  className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Music_1.jpeg" height="570px" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Dance_3.jpeg" height="570px" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Music_2.jpeg" height="570px" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Music_3.jpeg" height="570px" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Dance_2.jpeg" height="570px" className="d-block w-100 " alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="assets/carousel_images/Music_4.jpeg" height="570px" className="d-block w-100 " alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  
</div>




 {/* <!-- about us part --> */}
    
         {/* <!-- about us part --> */}
         <section id="About" className="about-heading -section-padding mt-4">

<div className="container">
    <div className="col-sm-12">
        <div className="section-header text-center">
            <h1 className="shadow p-3  mt-5 bg-dark  "><span className="text-danger"><strong>About us</strong></span>
            </h1>
        </div>
    </div>
    <section id="about" className="about">

        <div className="container" >
            <div className="row">

                <div className="col-lg-5 col-md-6">
                    <div className="about-img">
                        <img src="assets/images/aboutimg.jpg" alt=""/>
                        </div>
                </div>

                <div className="col-lg-7 col-md-6">
                    <div className="about-content">
                        <h2><span className="text-danger h2"><strong>Who are We</strong></span>
                        </h2>

                        <p className="h5" style ={{ "margin-top": "20px" }}>
                            eKalakaar.com aims for mainstreaming the traditional performing art in the world focusing on
                            India. We
                            want to create a creative and business environment by bringing the artists and technicians
                            as well as
                            filmmakers, production houses as well as customers to a common platform for mutual benefit.
                            We understand
                            the artist and market can come together for creating powerful content, which is useful for a
                            larger
                            audience.
                            <br/>
                                <br/>
                                    eKalakaar.com promotes the traditional performing art by democratising the art, wherein the artists
                                    have quality of life and dignity. Considering the grow of the media sector and hunger for audience
                                    friendly content in one hand, and the huge available content in traditional performing art sector
                                    ,there is need of present the traditional performing art for diversified modern customers                           
Kalkaar are a group of people from the Indian subcontinent who are traditionally associated with the nomadic lifestyle of the Gypsies. They are believed to have originated in the region of Rajasthan, India, and are now found in many parts of the world, including the Middle East, Europe, and North America. 
They are known for their unique culture, language, and music, and are often seen as a symbol of freedom and adventure.
<br/><br/>
Actors, for example, may audition for and perform in plays, films, and television shows. Singers may perform in concerts, recording studios, and on television shows. Dancers may perform in live shows, music videos, and movies. Visual artists may create and exhibit their work in galleries, museums, and other venues.

In general, kalakaars spend a lot of time rehearsing, practicing and perfecting their craft, and they may work long hours and travel frequently to perform or exhibit their work. 
                                   
                                
                                </p>
                            
                            
                            </div>
                        </div>
                    <div className="row mt-4  text-center">
                        <h2 className="text-danger h2 "><strong>Why we are unique</strong></h2>
                        <p className="text-start h5" style ={{ "text-decoration": "none", "margin-left": "20px" }}>

                        Kalkaar is a type of traditional Indian art that has been practiced for centuries. It is a form of painting that uses natural pigments and dyes to create vibrant and colorful designs on fabric, paper, and other surfaces. The art form is believed to have originated in the state of Rajasthan, India, and is still practiced today.
Kalkaar art is created using a variety of techniques, such as hand-painting, block printing, and screen printing. The designs are often intricate and detailed, and can range from simple geometric shapes to complex floral and animal motifs. The colors used in kalkaar art are often derived from natural sources, such as flowers, fruits, and vegetables.
<br/><br/>       
Kalkaar art is often used to decorate clothing, home furnishings, and other items. It is also used to create wall hangings and other decorative pieces. The art form is often used to express religious and cultural beliefs, and is a popular choice for weddings and other special occasions.

Kalkaar art is a unique and beautiful form of art that has been passed down through generations. It is a reminder of the rich cultural heritage of India, and a reminder of the importance of preserving traditional art forms.             


                        </p>
                    </div>
                </div>
            </div>

        </section>
    {/* <!-- End About Section --> */}

</div>

</section>





{/* !-- services offer --> */}
<div className="container">
<div className="col-sm-12">
        <div className="section-header text-center">
            <h1 className="shadow p-3  my-4 bg-dark  "><span className="text-danger"><strong>What We Offer</strong></span>
            </h1>
        </div>
    </div>

<div className="card-deck">
<div className='row'>
<div className =" col-lg-3 col-md-6">
<div className="  card my-2 ">
<img className="card-img-top" src="assets/images/patron1.jpg" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Patron</h5>
<p className="card-text">An individual, institutions like Hostels, Event Management, Wedding Planner, Large clubs etc , who promotes
art by organising art events and pay for the same. </p>
</div>
</div>
</div>
<div className=" col-lg-3 col-md-6">
<div className="  card  my-2 ">
<img className="card-img-top" src="assets/images/artist.jpg" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Artists</h5>
<p className="card-text">An individual/ group/ institution knows about an art, performs professionally for
financial gain and fame. They would be mostly sellers (selling art). </p>
</div>
</div>
</div>
<div className=" col-lg-3 col-md-6">
<div className="card my-2">
<img className="card-img-top" src="assets/images/partners.jpg" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Partners</h5>
<p className="card-text">An individual or institutions like Music Skill Development Institute, Content Development Company, Musical instrument sellers etc.
</p>
</div>
</div>
</div>
<div className=" col-lg-3 col-md-6"> 
<div className="card my-2">
<img className="card-img-top" src="assets/images/fans.jpg" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Art Lovers</h5>
<p className="card-text">General public having interest in art to support artists,follow them ,
learn any art and may perform in future to follow their fashion.
</p></div>
</div>
</div>
</div>
</div>
</div>


{/* <!-- dashboard --> */}

<div className="doctor-message">
<div className="inner-lay" style={{"text-align":"center"}}>
<div className="container">
<div className="row session-title" >
  <h2 >TRUSTED BY THOUSANDS </h2>
  
</div>
<div className="row">
    <div className="  col-sm-3 numb">
        <h3>340+</h3>
        <span>Artists</span>
    </div>
    <div className="col-sm-3 numb">
        <h3>1,800+</h3>
        <span>People Connected</span>
    </div>
    <div className="col-sm-3 numb">
        <h3>120+</h3>
        <span>Servers Running</span>
    </div>
    <div className="col-sm-3 numb">
        <h3>549+</h3>
        <span>Opportunities created</span>
    </div>
</div>
</div>
</div>
</div>



{/* <!-- why choose us --> */}
<div className="feat bg-gray pt-5 pb-5">
<div className="container">
<div className="row">
<div className="col-sm-12">
<div className="section-header text-center ">
<h1 className="shadow p-3 mb-5 bg-dark  "><span className="text-danger"><strong>Why choose us</strong></span>
</h1>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
<h6>Modern Art</h6>
<p>We use latest technology for the latest world because we know the demand of peoples.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
<h6>Creative Art</h6>
<p>We are always creative and and always lisen our costomers and we mix these two things and make best design.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
<h6>24 x 7 User Support</h6>
<p>If our customer has any problem, any query or any doubt we are always happy to help them .</p>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-upload"></i></span>
<h6>Business Growth</h6>
<p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it</p>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-database"></i></span>
<h6>Fixed Prices & No Surprises</h6>
<p>Our prices are fixed with no nasty surprises later. Our unit has been in designand provide arts  
for a long while .</p>
</div>
</div>
<div className="col-lg-4 col-sm-6">
<div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
<h6>Affordable cost</h6>
<p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
</div>
</div>
</div>
</div>
</div>

{/* medoa section */}
 
 <section id='mediapic'>
<div class="container  mb-5">

<div class="col-sm-12 ">
<div class="section-header text-center mt-5 ">
    <h1 class="shadow p-3 mb-5 bg-dark  "><span class="text-danger"><strong>Media</strong></span>
    </h1>
</div>
</div>
<div class="row">
<div class="col-lg-3 col-md-12 col-12 mt-4">
<div class="about-img ">
<img src="assets/bg/bg (10).jpg" alt="" class="img-fluid"/>
</div>
<div class="about-img mt-2">
<img src="assets/bg/bg (2).jpg" alt="" class="img-fluid"/>
</div>
<div class="about-img mt-2">
<img src="assets/bg/bg (3).jpg" alt="" class="img-fluid"/>
</div>
</div>
<div class="col-lg-6 col-md-12 col-12 mt-4 hover01 column">
<div class="about-img">
<img src="assets/bg/bg (1).jpg" alt="" class="img-fluid"/>
</div>
<div class="about-img mt-2">
<img src="assets/bg/bg (6).jpg" alt=" " class="img-fluid"/>
</div>
</div>
<div class="col-lg-3 col-md-12 col-12 mt-4">
<div class="about-img">
<img src="assets/bg/bg (7).jpg" alt="" class="img-fluid"/>
</div>

<div class="about-img mt-2">
<img src="assets/bg/bg (9).jpg" alt="" class="img-fluid"/>
</div>
<div class="about-img mt-2">
<img src="assets/bg/bg (12).jpg" alt="" class="img-fluid"/>
</div>
</div>

</div>

</div>
</section>


{/* <!-- conatct --> */}
<div class='container'>
<div class="col-sm-12">
<div class="section-header text-center mt-5 ">
    <h1 class="shadow p-3 mb-5 bg-dark  "><span class="text-danger"><strong>Contact us</strong></span>
    </h1>
</div>
</div>
<div class="upper_section">
<div class="findus">
    <div class="icon">
    <i class="fa-solid fa-location-dot fa-2x"></i>
    </div>
    <div class="content">
        <div class="head_contact"  style={{fontWeight:"bold"}}>
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
        <div class="head_contact"  style={{fontWeight:"bold"}}>
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
        <div class="head_contact" style={{fontWeight:"bold"}}>Mail us</div>
        <div class="cont" >contact@eKalakaar.com</div>
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
            <div class="col " style={{fontSize:'20px' ,fontWeight:'bold'}}>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/Clients">Clients</Link></div>
                <div><Link to="/Login">Join Us</Link></div>
                <div><Link to="/Contact">Contact Us</Link></div>
            </div>
            <div class="col" style={{fontSize:'20px' ,fontWeight:'bold'}}>
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



<textarea class='txt' style={{padding:"5px"}}
placeholder="Describe your issue"
></textarea>
        </div>
    </div>
</div>
</div>


{/* <!-- footer --> */}
<div class="foot mt-2 py-3">
<div class="sec">
<div class="head">
    FOR FINDING JOBS
</div>
  <div class="links">
  <div><Link to="/Findingjobs">Actors & Performers</Link></div>
    <div><Link to="/Findingjobs">Voiceover Artists</Link></div>
    <div><Link to="/Findingjobs">Influencers + Content Creators</Link></div>
    <div><Link to="/Findingjobs">Models</Link></div>
    <div><Link to="/Findingjobs">Community</Link></div>
    <div><Link to="/Findingjobs">Online Classes</Link></div>
    <div><Link to="/Findingjobs">Create Your Free Talent Profile</Link></div>
    <div><Link to="/Findingjobs">Join</Link></div>
</div>
</div>

<div class="sec">
<div class="head">
    FOR FINDING TALENT
</div>
<div class="links">
<div><Link to="/FindingTalent">Film,Video & TV Production</Link></div>
<div><Link to="/FindingTalent">Theater & Performing Arts</Link></div>
<div><Link to="/FindingTalent">Voiceover Production</Link></div>
<div><Link to="/FindingTalent">Commercial + Branded Content</Link></div>
<div> <Link to="/FindingTalent">Pay Talent</Link></div>
<div><Link to="/FindingTalent">How it Works</Link></div>
<div><Link to="/FindingTalent">Post a Job</Link></div>
</div>


</div>

<div class="sec">
<div class="head">COMPANY</div>
<div class="links">
<div><Link to="#">About</Link></div>
<div><Link to="#">The Team</Link></div>
<div><Link to="#">Careers</Link></div>

<div><Link to="#">Partners</Link></div>
<div><Link to="#">Affiliate Program</Link></div>
<div><Link to="#">Celebrity Testimonials</Link></div>


<div><Link to="#">Group and School Subscriptions</Link></div>
</div>
</div>

<div class="sec">
<div class="head">SUPPORT</div>
<div class="links">

<div><Link to="#">Contact</Link></div>
<div><Link to="#">Pricing</Link></div>
<div><Link to="#">Advertising</Link></div>

</div>
</div>

<div class="sec for">
<div class="head">CONNECT</div>
<div class="links">
<div><Link to="#"><i class="fa-brands fa-facebook-f"></i> Facebook</Link></div>
<div><Link to="#"><i class="fa-brands fa-twitter"></i> Twitter</Link></div>
<div><Link to="#"><i class="fa-brands fa-instagram"></i> Instagram</Link></div>
<div><Link to="#"><i class="fa-brands fa-youtube"></i> YouTube</Link></div>
<div><Link to="#"><i class="fa-solid fa-podcast"></i> Podcast</Link></div>
</div>
</div>
</div>


</div>





)
}
