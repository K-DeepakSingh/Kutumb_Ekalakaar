import React from 'react'
import { Link } from 'react-router-dom'
import './Frontpage.css'
import './Dashboard.css'
import Navbar_frontpage from './Navbar_frontpage'



export default function Artistdesc() {
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



{/* <!-- Artists --> */}
<div class="container">
        <div class="col-sm-12">
            <div class="section-header text-center mt-5 ">
                <h1 class="shadow p-3  bg-dark   "><span class="text-danger"><strong>Artists</strong></span>
                </h1>
            </div>
        </div>
        <section id="about" class="about">

            <div class="container" >
              <div class="row">
        
                <div class="col-lg-5 col-md-6">
                  <div class="about-img" >
                    <img src="assets/images/artist1.jpg" alt=""/>
                  </div>
                </div>
        
                <div class="col-lg-7 col-md-6">
                  <div class="about-content">
                    <h2><span class="text-danger h2"><strong>Who are We</strong>  </span>
                    </h2>
        
                        <p class="h5" style={{"margin-top": "20px"}}>
                            An individual/ group/ institution knows about an art, performs professionally for financial gain and fame. They would be mostly sellers (selling art).
                        eKalakaar.com aims for mainstreaming the traditional performing art in the world focusing on
                        India. 
                        Indian is often considered as the epitome of rich culture and art. India has been the focal point of many famous art forms whose popularity extended beyond the country.
            Almost every religion has its traditional art which spans from drawing, embroideries, paintings, sculpting, saris, dances and many more.
           Because of technological advancement India is now on the verge of becoming one of the world’s superpowers. As a result of this India is failing to take care of and restore our old art forms
           and the artists are choosing other professions to earn their livelihood.
           
                          
                         </p>  
                  </div>
                </div>

                <div class="row mt-5 text-center">
                    <h2 class="text-danger h2"><strong>The Role of the Artist in Society Today</strong></h2>
                    <p class="h5" >
                        Artists are important for several reasons. They provide a way of understanding and interpreting the world around us.
                        They allow us to see the world from a different perspective and to appreciate the beauty in things that we might otherwise overlook.
                        Artists help us to see the world differently.
                        They offer new perspectives and ways of looking at familiar things. Their work can challenge our assumptions and open our eyes to new possibilities.
                        Artists can also help us to understand ourselves better. Their work often reflects the human condition and can provide insight into our own emotions and experiences. By looking at the world through an artist’s eyes,
                        we can gain a new understanding and how we all fit into the world around us.
                        Artists often challenge the status quo and push us to think outside the box. They can bring change in the world by giving us a new way of looking at things.
                        Infact, many of the most remarkable changes in history have been brought in by artists.
                        Artists connect us to our history. They help us to understand who we are and where we come from.Their work records our past and a window into our future. They leave a legacy for future generations.
                        The artwork left by our ancestors can give us a glimpse into their lives and how they saw the world. It can help us to understand our own culture and traditions.
                    </p>

                </div>
                <div class="row mt-5 text-center">
                    <h2 class="text-danger h2 "><strong>How  to support an Artists</strong></h2>
                    <ul class="text-start h5" style={{"text-decoration": "none" ,"margin-left": "20px"}}>
                        <li><strong>Donate to a Local Arts Charity</strong></li>
                            <p class="h5">Funding can be a primary issue within the arts, and if you’re financially able, do consider donating.
                                 By making a donation to your local arts charity or fund, you can contribute to the support of artists and arts organisations
                                 immensely. Such gestures can aid this industry by providing individuals and smaller institutions with the resources they need
                                 for artistic production, programming, residencies, exhibitions, and much more.</p>
                        
                        <li><strong>Attend Exhibitions and Openings Online</strong></li>
                            <p class="h5">A major way to support the arts is to regularly attend exhibitions and openings at your local galleries. However, as many of us
                                 carry out social distancing measures during this time, many arts institutions and galleries have moved their exhibitions online through virtual galleries and online viewing rooms. Showing up to an exhibition - even virtually - can be a very cultural and educational experience. It also goes a long way to showcase support to your fellow local artists and arts community.
                                 Google Arts and Culture features content from over 2,000 leading museums and galleries on their platform. They have also partnered with various institutions to showcase their exhibitions online, where you can even view and virtually enter some of the most prestigious museums around the world - right from your own living room. Check them out here.
                                 Art fairs and festivals are even moving online, such as the Virtual Design Festival. Launching on 15 April, this will be the very first online architecture and design festival that will include contributions from major designers, instututions and brands around the world.</p>
                        
                        <li><strong>ArtInMyCity Initiative</strong></li>
                        <p class="h5">
                            Engage with artists, galleries, and designers in your own city by exploring a selection of art and design objects made in your city. The #ArtInMyCity 
                            initiative, which will be launching soon on The Artling, is a platform that will allow individuals to support the arts in their very own city, especially
                            at a time when international borders are closing and shipping globally is becoming cost-prohibitive. Discover an array of works by locally-based galleries, 
                            artists and designers that you can purchase right from the comfort of your home.
                        </p>
                </ul>
                </div>

                <div class="row mt-5 text-center">
                    <h2 class="text-danger h2 "><strong>How  we work</strong></h2>
                    <ul class="text-start h5" style={{"text-decoration": "none","margin-left": "20px"}}>
        
                        <li>✔Creating a unique platform to bring artists and users</li>
                        <li>✔Registration of Artists, Users, and Expert Service Providers</li>
                        <li>✔Creating Opportunities for Artists</li>
                        <li>✔Classical dancer</li>
                        <li>✔Promoting the artist by building an attractive profile, capacity building, and creating market
                            and
                            personalized marketing.</li>
                         <li>✔Designer</li>
        
                    </ul>
                </div>
              </div>
            </div>
</section>

              {/* <!-- ******************#PerformingArt********** --> */}
              <section id="PerformingArt" class="section-padding">
        <div class="container">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h1 class="shadow p-3 mt-2✔ bg-dark   "><span class="text-danger"><strong>Performing Art</strong></span>
                            
                    </h1>
                    <p class="h5">The performing arts are performed for an audience, which include music, dance, theatre
                        and film.
                        Indian
                        Dance start in the earliest Indus Valley Civilization, which is traced on carved stones in the
                        earliest
                        Indian civilization gave importance to diverse forms of Dance.


                    </p>
                </div>
            </div>
            <div class="row">

                <div class="col-lg-12 col-md-12 col-12 ps-lg-5 mt-md-2 text-start">
                    <div class="about-text">
                        <h2>
                            A study on <br/>
                            <span class="text-danger">Creating Opportunities for Artists. </span><br/>

                        </h2>
                        <p class="h5" style={{"margin-top": "10px" }}> The performing arts brings colour and joy to numerous
                            festivals and
                            ceremonies, and reaffirming
                            the faith of the people in their heritage. These arts have played key role for sustaining
                            the long
                            ancient traditions of the country. They are the link between the past and the present. It
                            thus exemplifies
                            the complex, organic interaction of all aspects of life implicit in all tribal and folk art
                            forms; art is
                            not seen
                            as something apart from life, a mere ornamentation or entertainment, but as an intrinsic
                            part of it. </p>
                        <p class="h5">
                            Every state of the country has several traditional performing arts. Now-a-days, the artists
                            particularly
                            youth are less interested as neither there is respect/ acceptance/ appreciation of the art
                            nor they are
                            compensated well. Therefore, most of these arts are getting extinct baring few. Hence, a
                            study was
                            conducted by ekalakaar.com to find out the status, challenges and opportunities for
                            promotion of artists
                            particularly the performing artists.
                        </p>

                    
                    </div>
                </div>
            </div>
        </div>
          </section>
          {/* <!-- End About Section --> */}
        
    </div>



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
