import React, { Component } from 'react'
import '../Reset_password/Resetpassword.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export class Resetpassword extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
                newpassword: "",
                confirmpassword: "",
                newPassError: false,
                confirmPassError: false,
            }
        }
        
        isValidated = () => {
            let isError = false;
            const errors = this.state;
            errors.newPassError = this.state.newpassword !=='' ? false : true;
            errors.confirmPassError = this.state.confirmpassword !=='' ? false : true;
    
            this.setState({
                ...errors
            })
            return isError = errors.newPassError || errors.confirmPassError
        }
        
        next = () => {
            var isValid = this.isValidated();
            if(!isValid) {
                console.log("Validation Sucessfull!");
            }
        }
    
        change = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        }
        
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
                <TextField 
                name = "newpassword"
                fullWidth
                 id="enterpassword" 
                 label="New Password" 
                 variant="outlined" 
                 size='large' 
                 margin='dense' 
                 error = {this.state.newPassError}
                 onChange = {e => this.change(e)}
                 helperText = {this.state.newPassError ? "Enter your password" : ''} 
                 />
            </div>

            <div className='confirm-password'>
                <TextField
                name = "confirmpassword" 
                fullWidth
                 id="confirmpassword" 
                 label="Confirm Password"
                  variant="outlined" 
                  size='large'
                   margin='dense' 
                   error = {this.state.confirmPassError}
                   onChange = {e => this.change(e)}
                   helperText = {this.state.confirmPassError ? "Confirm your Password" : ''} 
                   />
            </div>

            <div className="end-reset">
                <Button className="Next-button" variant = "contained" onClick={this.next} >Next</Button>
            </div>

            </div>
        )
    }
}

export default Resetpassword

