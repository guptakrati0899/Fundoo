
import React, { Component } from 'react'
import '../Forgot_email/Forgotemail.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export class Forgotemail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             phone : '',
             phoneError : false,
        }
    }
    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.phoneError = this.state.phone !=='' ? false : true;

        this.setState({
            ...errors
        })
        return isError = errors.phoneError
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
                <TextField 
                name= "phone"
                fullWidth 
                id="phonenumber-email"
                 label="Phone number or email"
                  variant="outlined" 
                  size='large'
                  error={this.state.phoneError}
                  onChange={e => this.change(e)}
                  helperText={this.state.phoneError ? "Enter phonenumber or email " : ''} 
                  />
            </div>

            <div className="end">
                <Button className="Next-button" variant = "contained" onClick = {this.next} >Next</Button>
            </div>

            </div>
            
        )
    }
}

export default Forgotemail



