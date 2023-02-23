import React, { Component } from 'react'
import Navbar_frontpage from './Navbar_frontpage'
import { Link } from 'react-router-dom'
export class Password_change extends Component {
  render() {
    return (
      <div>
        <Navbar_frontpage/>
        <div className="container">
            <div className="password_body">
                <div className="forgot_head">
                    Password change
                </div><br />
                <div className="pswrd">
                    <label htmlFor="newpss">Enter new password
                    </label>
                    <br />
                        <input type="password" name="newpss" id="newpss" className='input_pss_chnge'/>
                </div>
                <br />
                <div className="pswrd">
                    <label htmlFor="newpss">Re-enter new password
                    </label>
                    <br />
                        <input type="password" name="newpss" id="newpss" className='input_pss_chnge'/>
                </div>
                <div className='btn_psswrd_change'>
                    <Link to="/Login"><button className="btn-new btn_pss">Save changes</button></Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Password_change
