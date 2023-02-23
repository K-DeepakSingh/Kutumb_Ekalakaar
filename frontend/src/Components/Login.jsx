import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Frontpage.css";
import "./Desc.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import Navbar_frontpage from "./Navbar_frontpage";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorflag, setErrorflag] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: pass,
    };
    console.log(formData);
    let result = await fetch("http://localhost:4000/api/signin", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.message === "Please provide email and password!") {
      setErrorflag(1);
    } else if (result.message === "Incorrect email or password!") {
      setErrorflag(2);
    } 

    console.log(result.user._id);
    console.log(result);
    localStorage.setItem("email", result.user.email);

    localStorage.setItem("lastname", result.user.lastname);
    localStorage.setItem("name", result.user.name);
    localStorage.setItem("phoneno", result.user.phoneno);
    localStorage.setItem("role", result.user.role);
    localStorage.setItem("_id", result.user._id);
    localStorage.setItem("token", result.token);
    if (result.token) {
      if (result.user.role === 2) {
        setTimeout(() => {
            navigate("/Artist_dashboard");
        }, 1000);
      } else {
        setTimeout(() => {
            navigate("/Patron_dashboard");
        }, 1000);
      }
      notify()
    }
  };
  const notify = () =>
    toast("Login succesfull", {
      position: toast.POSITION.TOP_CENTER,
    });

  return (
    <div>
      {/* header */}
      <Navbar_frontpage />
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <a href="#" className="navbar-brand">
          <img src="assets/images/logo1.jpg"  height="58" width="88" alt="logo"/>
          <span className="text-danger text"><strong>e</strong>kala</span>kaar
        </a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/Patrondesc" className="nav-item nav-link">Patron</Link>
              <Link to="/Artistdesc" className="nav-item nav-link">Artist</Link>
              <Link to="/Partnerdesc" className="nav-item nav-link">Partners</Link>
              <Link to="/Artloversdesc" className="nav-item nav-link">Art Lovers</Link>
              <Link to="/Clients" className="nav-item nav-link">Clients</Link>
              <Link to="/Contact" className="nav-item nav-link">Contact</Link>
              
          </div>
          <div className="navbar-nav ms-auto">
              <a href="/Login" className="nav-item nav-link ">Login/Join</a>
          
          </div>
      </div>
  </div>
</nav> */}

      <div className="App1 my-2">
        <div className="auth-form-container">
          <h1>
            <b>Login</b>
          </h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email id"
              id="email"
              name="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
              required
            />
            <br />

            {errorflag === 1 ? (
              <p style={{ color: "red" }}>
                Please Enter Email & Password Both!
              </p>
            ) : (
              ""
            )}
            {errorflag === 2 ? (
              <p style={{ color: "red" }}>Password & Email is incorrect!</p>
            ) : (
              ""
            )}
            
            <button type="submit" >Log In</button>
            <ToastContainer />
            <Link to="/Forgot_password" style={{ textAlign: "left" }}>
              Forget Password{" "}
            </Link>

            {/* login by various methods */}
            <h2>
              {" "}
              <b> OR</b>{" "}
            </h2>
            <button>
              <i class="fa-brands fa-google"></i> &nbsp; Login using Google
            </button>
            <br />
            <button>
              <i class="fa-brands fa-facebook-f"></i> &nbsp;Login using Facebook
            </button>
            <br />
            <button>
              <i class="fa-regular fa-message"></i> &nbsp; Login using OTP
            </button>
          </form>

          <button className="link-btn  my-2">
            {" "}
            <a href="/Register">Don't have an account? Register here.</a>
          </button>

          {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
      </div>
    </div>
  );
};
