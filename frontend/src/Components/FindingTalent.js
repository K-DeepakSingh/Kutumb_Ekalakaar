import React from 'react'
import { Link } from 'react-router-dom'
import './Frontpage.css'
import './Dashboard.css'
import Navbar_frontpage from './Navbar_frontpage'
export default function FindingTalent() {
  return (
    <div>
        <Navbar_frontpage/>
<div>
<div className="container">
  <div className="col-sm-12">
    <div className="section-header text-center mt-5 ">
      <h1 className="shadow p-3  bg-dark rounded"><span className="text-danger"><strong>Finding Talent</strong></span>
      </h1>
    </div>
  </div>
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-img">
            <img src="assets/images/VideoProd.jpeg" alt />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-content">
            <h2><span className="text-danger h2"><strong>Film,Video &amp; TV Productions</strong></span>
            </h2>
            <p className="h5" style={{marginTop: 20}}>
              Video production is the process of producing video content for video. It is the equivalent of filmmaking, 
              but with video recorded either as analog signals on videotape, digitally on videotape, or as computer files 
              stored on optical discs, hard drives, SSDs, magnetic tapes, or memory cards instead of film stock. There are 
              three phases of video production: pre-production, production (also known as principal photography), and post-
              production. Pre-production includes all aspects of planning the video production process before filming begins. 
              This includes script writing, planning, logistics and other administrative duties. Production is the phase of 
              video production that captures video content (electronic moving images) and includes the filming of the video 
              subject(s).
              {/* Post-production is the action of selectively combining these video clips through video editing into 
                              a finished product that tells a story or conveys a message either in the setting of a live event (live production) 
                              or after the event has occurred (post-production). */}
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Theater & Performing Art */}
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-img">
            <img src="assets/images/theater.jpeg" alt />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-content">
            <h2><span className="text-danger h2"><strong>Theater &amp; Performing Art</strong></span>
            </h2>
            <p className="h5" style={{marginTop: 20}}>
              Theater or theatre[a] is a collaborative performance art form that uses live performers, 
              usually actors or actresses, to present the experience of a real or imagined event before 
              a live audience in a specific location, often on a stage. Performers can communicate this 
              experience to an audience through a combination of gesture, speech, song, music and dance. 
              Elements of art such as painted scenery and stagecraft such as lighting are used to increase 
              the physicality, presence and immediacy of the experience.[1] The specific place of performance 
              is also named by the word "theatre" derived from the ancient Greek θέατρον (théatron, "place for 
              watching"), itself from θεάομαι (theáomai, "to see", "to watch", "to observe").
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Voiceover Production */}
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-img">
            <img src="assets/images/voice-Prod.jpeg" alt />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-content">
            <h2><span className="text-danger h2"><strong>Voiceover Production</strong></span>
            </h2>
            <p className="h5" style={{marginTop: 20}}>
              Voice-over (also known as off-camera or off-stage commentary) is a production technique where a voice—which 
              is not part of the narrative (non-diegetic)—is used in a radio, television production, filmmaking, theater, 
              or other presentation. A voice-over is read from the script and may be spoken by someone who appears elsewhere 
              in the production or by a specialist voice actor. Synchronous dialogue, where a voice-over narrates an action 
              that is happening at the same time, remains the most common technique in voice-overs. However, asynchronous is 
              also used in cinema. Usually pre-recorded and placed over film or video, it is commonly used in documents or 
              reports to explain information.<br />
              Voiceovers are used in video games and message waiting, as well as for announcements and information at events 
              and tourist destinations. It can also be read live at events such as award ceremonies.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Branded Content/Commercial Content */}
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-img">
            <img src="assets/images/BC.jpeg" alt />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="about-content">
            <h2><span className="text-danger h2"><strong>Branded Content/Commercial Content</strong></span>
            </h2>
            <p className="h5" style={{marginTop: 20}}>
              branded content (also known as branded entertainment) is content created by an advertiser or 
              funded by an advertiser. Unlike content marketing (in which content is presented primarily as 
              a brand marketing push)[1] and product placement (where advertisers pay to have references to 
              their brands incorporated into external creative works such as films and television series), 
              branded content is designed to build brand awareness by connecting it with content that shares 
              its values. Content does not necessarily represent brand promotion, although it may still include 
              product placement.<br />
              Unlike conventional forms of editorial content, branded content is generally funded solely by a 
              brand or corporation, not by a studio or group of solely artistic producers. Examples of branded 
              content have appeared in television, film, online content, video games, events and other installations. Modern brand marketing strategies are primarily designed to combat market trends such as the declining acceptance of traditional ads or low-quality ads.
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
