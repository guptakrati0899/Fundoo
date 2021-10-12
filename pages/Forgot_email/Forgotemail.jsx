
import React, { Component } from 'react'
import '../Forgot_email/Forgotemail.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export class Forgotemail extends Component {
    render() {
        return (
            <div className = "header">
    
            <div className = "fundoo-logo">
                <p className = "first">F</p>
                <p className = "second">u</p>
                <p className = "third">n</p>
                <p className = "fourth">d</p>
                <p className = "fifth">o</p>
                <p className = "sixth">o</p>
            </div>

            <div className="header-text">Find your email</div>
            <div className="subheader-text">Enter your phone number or recovery email</div>

            <div className='phonenumber-email'>
                <TextField fullWidth id="phonenumber-email" label="Phone number or email" variant="outlined" size='large' />
            </div>

            <div className="end">
                <Button className="Next-button" variant = "contained">Next</Button>
            </div>

            </div>
            
        )
    }
}

export default Forgotemail



