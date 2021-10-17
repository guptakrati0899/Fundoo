
import React, { Component } from 'react'
import '../Sign_in/Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserServices from '../../service/userservice';
import { Snackbar, IconButton } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const obj = new UserServices();





export class Signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                email: "",
                password: "",
                emailError: false,
                passError: false,
                snackbaropen: false, 
                snackbarmsg: "",
            }
        }
        
        snackbarClose = () => {
            this.setState({snackbaropen: false});
        };

        isValidated = () => {
            let isError = false;
            const errors = this.state;
            errors.emailError = this.state.email !=='' ? false : true;
            errors.passError = this.state.password !=='' ? false : true;
    
            this.setState({
                ...errors
            })
            return isError = errors.emailError || errors.passError
        }
        
        next = () => {
            var isValid = this.isValidated();
            if(!isValid) {
                console.log("Validation Sucessfull!");
    
        
            let signinObj = {
                "email": this.state.email,
                "password": this.state.password,
            }

            console.log(signinObj);
            obj.signin(signinObj).then((response)=>{
                console.log(response);
                localStorage.setItem("token", response.data.id);
                localStorage.setItem("token", response.data.firstName);
                this.setState({snackbaropen:true, snackbarmsg: "Signin Successful!"})
                var timer  = setTimeout(function(){
                    window.location = '/Dashboard'
                }, 2000);
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Signin Failed! Enter valid data"})
            })
        }  else {
            this.setState({snackbaropen:true, snackbarmsg: "Failed! Please enter data!"})
        }
    }
        
    
        change = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        }


    
    render() {
        return (

            <div className="head">
                      <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />
                

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
                    <TextField 
                    fullWidth 
                    id="email-phone" 
                    name= "email" 
                    label="Email or phone" 
                    variant="outlined" 
                    size='large'
                    error={this.state.emailError}
                    onChange={e => this.change(e)}
                    helperText={this.state.emailError ? "Enter email or phone" : ''} 
                     />
                </div>

                <div className='forgot-email'>

                    <Link className ="f-email" to = {"/Forgotemail"} underline="none">Forgot email?</Link>

                </div>

                <div className="password">
                    <TextField 
                    fullWidth 
                    name = "password"
                    id="password"
                     label="Password"
                      variant="outlined"
                       size='large' 
                       error={this.state.passError}
                       onChange={e => this.change(e)}
                       helperText={this.state.passError ? "Enter a password" : ''} 
                        />
                </div>

                <div className='forgot-password'>

                    <Link href="" className ="f-pass"underline="none">Forgot password?</Link>

                </div>

                <div className="mid-text">Not your computer? Use Guest mode to sign in privately.</div>
                <div className="learn">Learn more</div>
        
                <div className="last-section">
    
                    <Link  to= {"/UserSignup"} className="create-account">Create account </Link>
                    <Button className="Next-button" variant="contained" onClick = {this.next}>Next</Button>
            
                </div>
              

            </div>

        )
    }
}

export default Signin



