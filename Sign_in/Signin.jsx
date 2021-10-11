import React from "react";
import '../Sign_in/Signin.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


function Signin() {
    return (
  
        <div className = "head">
    
            <div className = "logo">
                <p className = "first">F</p>
                <p className = "second">u</p>
                <p className = "third">n</p>
                <p className = "fourth">d</p>
                <p className = "fifth">o</p>
                <p className = "sixth">o</p>
            </div>

            <div className="head-text">Sign in</div>
            <div className="subhead-text">Use your Google Account</div>

            
            <div className='email-phone'>
                <TextField style ={{width : '25vw'}} id="email-phone" label="Email or phone" variant="outlined" size='large' />
            </div>

            <div className='forgot-email'>
            <Link  href="#" underline="none">Forgot email?</Link>
            </div>

            <div className = "password">
            <TextField style ={{width : '25vw'}} id="password" label="Password" variant="outlined" size='large' margin="dense" />
            </div>

            <div className='forgot-password'>
            <Link  href="#" underline="none">Forgot password?</Link>
            </div>

            <div className="mid-text">Not your computer? Use Guest mode to sign in privately.</div>
            <div className="learn">Learn more</div>

            <div className="last-section">
            <Link className="create-account" href="#" underline="none">Create account </Link>
                <Button className="Next-button" variant = "contained">Next</Button>
            </div>

            </div>

          

    )
}


export default Signin