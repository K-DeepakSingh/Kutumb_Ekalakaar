import React from 'react'
import { Link } from 'react-router-dom'
import './Frontpage.css'
import './Dashboard.css'
import Navbar_frontpage from './Navbar_frontpage'

export default function Findingjobs() {
  return (
    <div>
<Navbar_frontpage/>
<div>
     

  <div className="container">
  

      <div  className ="col-sm-12">
            <div  className ="section-header text-center mt-5 ">
                <h1  className ="shadow p-3  bg-dark rounded"><span  className ="text-danger"><strong>Finding Jobs</strong></span>
                </h1>
            </div>
        </div>

    
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src="assets/images/performers.jpeg" alt />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h2><span className="text-danger h2"><strong>Performers &amp; Artists</strong></span>
              </h2>
              <p className="h5" style={{marginTop: 20}}>
                An artist is a person engaged in an activity related to the creation of art, the practice of art or the performance of art.
                Common usage in both everyday speech and academic discourse refers only to an expert in the fine arts. However, the term is
                also often used in the entertainment industry, especially in a business context, for musicians and other performers (though
                less often for actors). "Artiste" (French for artist) is a variant used in English in this context, but this usage has become
                rare. The use of the term "artist" to describe writers is valid, but less common and mostly limited to contexts that are used
                in criticism.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Voiceover Artist */}
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src="assets/images/voice-over.jpeg" alt />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h2><span className="text-danger h2"><strong> Voiceover Artists</strong></span>
              </h2>
              <p className="h5" style={{marginTop: 20}}>
                Voiceover artists are freelancers and might work on a wide range of projects, including audiobooks,
                commercials, documentaries, educational videos, corporate promotional materials, apps, toys, announcements, 
                and phone prompts, as well as fictional media like animated films, dubbed series, video games, and radio dramas.<br />
                Voiceover artists come from a range of educational and career backgrounds. Many are experienced actors, singers, 
                radio DJs, podcasters, and other professionals who work with their voices. Others lack significant performance 
                experience but are drawn to the field by the promise of flexible, portable freelance work.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Influencers and content creators */}
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src="assets/images/influencer.jpeg" alt />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h2><span className="text-danger h2"><strong>Influencer/Content creators</strong></span>
              </h2>
              <p className="h5" style={{marginTop: 20}}>
                An <bold>influencer</bold> is someone in your niche or industry with sway over your target audience.<br />
                Influencers have specialized knowledge, authority or insight into a specific subject. Their
                pre-existing presence in a niche makes them a useful launching pad for brands in search of 
                credibility. 85% of marketers engaged in influencer marketing in 2017 and 92% said their 
                campaigns were effective.<br />
                An influencer assists companies in “influencer marketing,” a form of advertising that builds
                brand authority on the back of another person’s reputation.<br />
                A <bold>content creator</bold> produces entertaining or educational material that caters to the interests 
                and challenges of a target audience. The content he/she produces can take many forms, including 
                blog posts, videos, ebooks, photos, and infographics. Today, businesses employ content creators 
                to engage new and existing customers on the brand's behalf.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* models */}
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-img">
              <img src="assets/images/model.jpeg" alt />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h2><span className="text-danger h2"><strong>Models</strong></span>
              </h2>
              <p className="h5" style={{marginTop: 20}}>
                A model is a person whose job it is to either advertise, display or promote commercial products
                (especially fashion clothes in fashion shows) or to serve as a visual aid for people creating artwork
                or posing for a photograph. Although the models are mostly female, there are also men, especially for
                clothing modeling. Models can work professionally or casually.<br />
                Modeling ("modelling" in American English) is considered distinct from other types of public performance
                such as acting or dancing. Although the distinction between modeling and acting is not always clear, acting
                in a film or stage play is not generally considered "modeling". Likewise, appearing in a television commercial
                is generally not considered modeling. Modeling generally does not involve speaking. Personal opinions are generally
                not expressed and the model's reputation and image are considered critical.<br />
                {/* Types of modeling include: fashion, glamour, fitness, bikini, fine art, body part, advertising and commercial print models.
                              Models are featured in a variety of media formats including: books, magazines, movies, newspapers, internet and television.
                              Modeling as a profession sometimes appears in films (Prêt-à-Porter and Looker), reality television shows (America's Next Top
                              Model and The Janice Dickinson Modeling Agency), and music videos ("Freedom! '90", "Wicked Game", " Daughters" and "Blurred Lines").<br>
                              Celebrities, including actors, singers, sports figures, and reality TV stars, often participate in modeling contests, jobs, and assignments
                              in addition to their regular jobs. Modeling is often not a main full-time activity. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


    </div>
  )
}
