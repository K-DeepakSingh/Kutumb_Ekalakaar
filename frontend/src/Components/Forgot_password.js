import React, { Component } from 'react'
import Navbar_frontpage from './Navbar_frontpage'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './css_new.css'
import { useEffect } from 'react'
  function Forgot_password() {
   const [Otp,setotp]=useState(new Array(4).fill(""))
    const handleChange=(element,index)=>{
        if(isNaN(element.value))return false;
        setotp([...Otp.map((d,idx)=>(idx===index)?element.value:d)]);

       if(element.nextSibling){
            element.nextSibling.focus();
        }
    }

//   for timer
const [counter,setCounter]=React.useState(59);
React.useEffect(()=>{
    const timer=
    counter>0&&setInterval(()=>setCounter(counter-1),1000);
    return ()=>clearInterval(timer);
},[counter]);

    return (
       
      <div>
        <Navbar_frontpage/>
        <div className="container ">
        <div className="forgot_body">
            <div className="forgot_head ">
                OTP Verification
            </div>
            <div className='forgot_cont'>
                Enter the code sent to your registered E-mail ID
            </div>
            {Otp.map((data,index)=>{
                return(
                    <input type="text" 
                    maxlength="1"  
                    className='input_otp'  
                    key={index} 
                    value={data}
                    onChange={e=>handleChange(e.target,index)}
                    onFocus={e=>e.target.select()}
                    required/> 
                );
            }) }
            <div>
             <Link to="/Password_change" >
                 <button className="btn-new forgot_btn" >
                    Verify OTP
                </button>
                </Link></div>
            {/* <div className="rows_input ">
                <input type="text"  id="1"  maxlength="1"  className='input_otp'  onkeyup="clickEvent(this,'2')" />
                <input type="text" id="2"  maxlength="1"  className='input_otp' onkeyup="clickEvent(this,'3')" />
                <input type="text" id='3'  maxlength="1"  className='input_otp' onkeyup="clickEvent(this,'4')" />
                <input type="text" id='4'  maxlength="1"  className='input_otp'/>
            </div> */}
           <div className="timer">
            <div className="written">Resend OTP in 00 : {counter}</div>
           <button className="forgot_resend" ><u>Resend OTP </u></button></div> </div>
            </div>
        </div>
      
    )
    }

export default Forgot_password
