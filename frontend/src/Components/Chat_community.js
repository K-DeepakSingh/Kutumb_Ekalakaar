
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Patron.css'
import './css_new.css'
import Navbar from './Navbar'
export class Chat_community extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <a className="navbar-brand " href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="chat-with-artist">
        <div className="chat-with-artist-body container">
            <div className="row rounded-lg overflow-hidden shadow" id="chat-with-artist-body-container"
                style={{height:" 636px"}}>
                {/* <!-- Artists box--> */}
                <div className="chat-with-artist-left-container col-5 px-0" id="chat-with-artist-left-container">
                    <div className="chat-with-artist-left-container-top">
                        <div className="chat-with-artist-left-container-top-text text-center" >
                           Info
                        </div>
                    </div>
                    <div className="infoo">
                    <div className="about_chat">
                        <div className='member'>About</div>
                        <div className='content-about-chat-comm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, officiis debitis. Distinctio corrupti asperiores quisquam qui. Laboriosam ipsa vero est!</div>
                    </div>
                   <div className="memberss">
                    <div className="member">Members(18)</div>
                    <div className="admin">Admin</div>
                    <div className="candidate">
                        <div className="pic">
                        <img className='img_chat' src="assets/images/Linkb11.jpeg"/>
                        </div>
                        <div className="name">Name</div>
                    </div>
                    <div className="admin">Moderators(2)</div>
                    <div className="candidate">
                        <div className="pic">
                        <img className='img_chat' src="assets/images/Linkb11.jpeg"/>
                        </div>
                        <div className="name">Name</div>
                    </div>
                    <div className="candidate">
                        <div className="pic">
                        <img className='img_chat' src="assets/images/Linkb11.jpeg"/>
                        </div>
                        <div className="name">Name</div>
                    </div>
                    <div className="admin">Participants</div>
                    <div className="candidate">
                        <div className="pic">
                        <img className='img_chat' src="assets/images/Linkb11.jpeg"/>
                        </div>
                        <div className="name">Name</div>
                    </div>
                    <div className="candidate">
                        <div className="pic">
                        <img className='img_chat' src="assets/images/Linkb11.jpeg"/>
                        </div>
                        <div className="name">Name</div>
                    </div>
                   </div>
                   </div>
                </div>



                <div className="chat-with-artist-right-container col-7 px-0 hide" id="chat-with-artist-right-container">
                    {/* <!-- Chat box --> */}

                    <div className="px-4 py-2 chat-with-artist-body-right-container-top">

                        {/* <!-- <div className="chat-with-artist-body-right-container-top"> --> */}
                        <div className="row row-cols-auto">
                            <div className="col-1 back-button" id="back-button">
                                <img src="assets/images/back.png" alt="" width="20px" height="20px"/>
                            </div>
                            <div className="col">
                                <div className="chat-with-artist-right-container-artist-name text-center">Dance Community</div>
                                <div className="chat-with-artist-right-container-artist-category">1
                                </div>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}
                        {/* <!-- <p className="h5 mb-0 py-1">In Contacts(5)</p> --> */}
                    </div>
                    <div className="px-4 py-5 chat-box bg-white" id="chat-box">
                        {/* <!-- Sender Message--> */}
                                <p className="small text-muted">12:00 PM | Aug 13</p>
                        <div className="media w-50 mb-3">
                            <div className="media-body ml-3">
                                <div className="rounded py-2 px-3 mb-2">
                                <img className='img_chat' src="assets/images/Linkb11.jpeg"/>
                                    <p className="mb-0 chat_comm_msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nobis vero illo. Ipsum excepturi impedit architecto quasi eveniet error. Nostrum!</p>
                                </div>
                            </div>
                        </div>


                        <div className="message-area" id="message-area">
                            {/* <!-- <div className="media w-50 ml-auto mb-3">
                                <div className="media-body">
                                    <div className=" rounded py-2 px-3 mb-2">
                                        <p className="mb-0 artist-message">
                                            ${message}
                                        </p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div> --> */}
                        </div>
                    </div>
                    {/* <!-- Typing area --> */}
                    <div style={{borderWidth:"1px"}}className="card chat-with-artist-right-container-typing-box">
                        <div className="card-body" style={{padding: "0.25rem",background: "whitesmoke"}}>
                            <div className="input-group" id="msg-box">
                                <input type="text" className="form-control typing-box" id="message"
                                    placeholder="Write a message" aria-label="Write a message"
                                    aria-describedby="basic-addon2" value=""/>
                                <div className="input-group-append">
                                    <button className="btn btn-danger btn-new" type="button" id="send-message">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Chat_community
