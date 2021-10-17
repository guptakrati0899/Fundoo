
import React, { Component } from 'react'
import '../Forgot_email/Forgotemail.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserServices from '../../service/userservice';
import { Snackbar, IconButton } from '@mui/material';


const obj = new UserServices();



export class Forgotemail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             emailError : false,
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

        this.setState({
            ...errors
        })
        return isError = errors.emailError
    }
    
    next = () => {
        var isValid = this.isValidated();
        if(!isValid) {
            console.log("Validation Sucessfull!");
           
        
        
        let forgotObj = {
            "email": this.state.email,
        }
        console.log(forgotObj);
        obj.forgot(forgotObj).then((response)=>{
            console.log(response);
            this.setState({snackbaropen:true, snackbarmsg: "Success!"});
        }).catch((error)=>{
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Failed! Enter Valid Email"})
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
            <div className = "header">
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
                name= "email"
                fullWidth 
                id="phonenumber-email"
                 label="Phone number or email"
                  variant="outlined" 
                  size='large'
                  error={this.state.emailError}
                  onChange={e => this.change(e)}
                  helperText={this.state.emailError ? "Enter phonenumber or email " : ''} 
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



