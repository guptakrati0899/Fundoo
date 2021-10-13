import React, { Component } from 'react'
import '../registration/UserSignup.css'
import accountlogo from '../registration/account-logo.svg'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
 import { signup } from '../../service/axiosservice';


export class UserSignup extends Component {


    constructor(props) {
        super(props)
    
        this.state = {

            fName: "",
            lName: "",
            email: "",
            password: "",
            confirmPassword: "",
            fNameError: false,
            lNameError: false,
            emailError: false,
            passError: false,
            confirmPasswordError: false,
             
        };
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.fNameError = this.state.fName !=='' ? false : true;
        errors.lNameError = this.state.lName !=='' ? false : true;
        errors.emailError = this.state.email !== ''? false : true;
        errors.passError = this.state.password !== '' ? false : true;
        errors.confirmPasswordError = this.state.confirmPassword !== '' ? false : true;


        this.setState({
            ...errors
        })

        return isError = errors.fNameError || errors.lNameError || errors.emailError || errors.passError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
        }

        let signupObj = {

                "firstName": this.state.fName,
                "lastName": this.state.lName,
                "email": this.state.email,
                "password": this.state.password,
                "service": "advance"
        }

        console.log(signupObj);
        signup(signupObj).then(function(response){
            console.log(response);
            
        }).catch(function(error){
            console.log(error);
        })

    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <div className = "Main">
            <div className = "left-sec">
            <div className = "applogo">
                <p className = "first">F</p>
                <p className = "second">u</p>
                <p className = "third">n</p>
                <p className = "fourth">d</p>
                <p className = "fifth">o</p>
                <p className = "sixth">o</p>
            </div>
            <div className="heading">Create Your Fundoo Account</div>
            <div className="subhead">Continue to fundoo</div>

            <div className='name'>
                <TextField 
                className = "firstname"
                type= "text"
                name= "fName"
                id="firstname"
                 label="First name" 
                 variant="outlined" 
                 size='small'
                 error = {this.state.fNameError}
                 onChange = {e => this.change(e)}
                 helperText = {this.state.fNameError ? "Enter first name" : ''} 
                 />

                <TextField 
                className = "lastname"
                type= "text"
                name= "lName"
                id="lastname"
                 label="Last name" 
                 variant="outlined" 
                 size='small'
                 error = {this.state.lNameError}
                 onChange = {e => this.change(e)}
                 helperText = {this.state.fNameError ? "Enter last name" : ''} 
                 />
            </div>

            <div className = "User-Name">
            <TextField
            className = "user"
            name = "email"
            id="user"
            type= "text"
            label = "UserName" 
             size='small'
            error = {this.state.emailError}
            onChange = { e => this.change(e)}
            helperText = {this.state.emailError ? "Enter Your Username" : ''}
           />
         
            <div className='user-text'>You can use letters, numbers & periods</div>
            </div>

            <div className='user-text1'>Use my current email address instead</div>

            <div className='credentials'>
                <TextField id="password"
                name = "password"
                 label="Password"
                  variant="outlined" 
                  size='small'
                  error = {this.state.passError}
                  onChange = { e=> this.change(e)}
                  helperText={this.state.passError ?"Enter a password" : ''}
                   />

                <TextField
                 id="confirm"
                 name = "confirmPassword"
                  label="Confirm" 
                  variant="outlined"
                   size='small' 
                   error = {this.state.confirmPasswordError}
                  onChange = { e=> this.change(e)}
                  helperText={this.state.confirmPasswordError ? "Confirm your Password" : ''}
                  />
            </div>

            <div className='bottom-text'>
                Use 8 or more characters with a mix of letters, numbers & symbols
            </div>

            <div className = 'checkbox'>
        
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
          
            </div>

            <div className="last-sec">
            <Link className="text" to ="/" underline="none">Sign in instead </Link>
                {/* <div className="text">Sign in instead</div> */}
                <Button className="Next-button" variant = "contained" onClick={this.next} >Next</Button>
            </div>
            </div>
            
            <div className="right-sec"> 
            <img src = {accountlogo} className ="account-logo"></img>
            <div className = "acclogo-text">  One account. All of Fundoo working for you.</div> 
            </div>
            
        </div>
        )
    }
}

export default UserSignup


