import React, { Component } from 'react'
import '../Reset_password/Resetpassword.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export class Resetpassword extends Component {
    render() {
        return (
            <div className = "header-reset">
    
            <div className = "header-logo">
                <p className = "first">F</p>
                <p className = "second">u</p>
                <p className = "third">n</p>
                <p className = "fourth">d</p>
                <p className = "fifth">o</p>
                <p className = "sixth">o</p>
            </div>

            <div className="headerreset-text">Reset your password</div>
            <div className="subheaderreset-text">Enter your new password</div>

            <div className='enter-password'>
                <TextField fullWidth id="enterpassword" label="New Password" variant="outlined" size='large' margin='dense' />
            </div>

            <div className='confirm-password'>
                <TextField fullWidth id="confirmpassword" label="Confirm Password" variant="outlined" size='large' margin='dense' />
            </div>

            <div className="end-reset">
                <Button className="Next-button" variant = "contained">Next</Button>
            </div>

            </div>
        )
    }
}

export default Resetpassword

