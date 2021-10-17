import React, { Component } from 'react'
import '../Reset_password/Resetpassword.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserServices from '../../service/userservice';
import { Snackbar, IconButton } from '@mui/material';


const obj = new UserServices();

export class Resetpassword extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
                newPassword: "",
                confirmpassword: "",
                newPassError: false,
                confirmPassError: false,
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
            errors.newPassError = this.state.newPassword !=='' ? false : true;
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
               
            

            let resetObj = {
                "newPassword": this.state.newPassword,
            }
            console.log(resetObj);
            obj.reset(resetObj).then((response)=>{
                console.log(response);
                this.setState({snackbaropen:true, snackbarmsg: "Password is reset!"})
                var timer  = setTimeout(function(){
                    window.location = '/'
                }, 2000);
            }).catch((error)=>{
                console.log(error);
                this.setState({snackbaropen:true, snackbarmsg: "Enter valid password!"})
            })
        } else {
            this.setState({snackbaropen:true, snackbarmsg: "Please enter data!"})
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
                name = "newPassword"
                fullWidth
                 id="enterpassword" 
                 label="New Password" 
                 variant="outlined" 
                 size='large' 
        
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

