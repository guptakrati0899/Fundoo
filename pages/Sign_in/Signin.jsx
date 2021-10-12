
import React, { Component } from 'react'
import '../Sign_in/Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserSignup from "../registration/UserSignup";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class Signin extends Component {
    render() {
        return (

            <div className="head">

                <div className="logo">
                    <p className="first">F</p>
                    <p className="second">u</p>
                    <p className="third">n</p>
                    <p className="fourth">d</p>
                    <p className="fifth">o</p>
                    <p className="sixth">o</p>
                </div>

                <div className="head-text">Sign in</div>
                <div className="subhead-text">Use your Google Account</div>


                <div className='email-phone'>
                    <TextField fullWidth id="email-phone" label="Email or phone" variant="outlined" size='large' />
                </div>

                <div className='forgot-email'>

                    <Link className ="f-email" to = {"/Forgotemail"} underline="none">Forgot email?</Link>

                </div>

                <div className="password">
                    <TextField fullWidth id="password" label="Password" variant="outlined" size='large' margin="dense" />
                </div>

                <div className='forgot-password'>

                    <Link href="" className ="f-pass"underline="none">Forgot password?</Link>

                </div>

                <div className="mid-text">Not your computer? Use Guest mode to sign in privately.</div>
                <div className="learn">Learn more</div>
        
                <div className="last-section">
    
                    <Link  to= {"/UserSignup"} className="create-account">Create account </Link>
                    <Button className="Next-button" variant="contained">Next</Button>
            
                </div>
              

            </div>

        )
    }
}

export default Signin



