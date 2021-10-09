import React from "react";
import logo from '../Assets/logo.png'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function UserSignup() {
    return (
        <div className = "Main">
            <img src = {logo} className = "applogo"></img>
            <div className="heading">Create Your Fundoo Account</div>
            <div className="subhead">Continue to fundoo</div>
            <div className='name'>
                <TextField id="firstname" label="First name" variant="outlined" size='small' />
                <TextField id="lastname" label="Last name" variant="outlined" size='small'/>
            </div>
            <div className = "User-Name">
            <TextField id="user" label="Username" variant="outlined" size='small' value='@gmail.com' />
            <div className='user-text'>You can use letters, numbers & periods</div>

            </div>
            <div className='credentials'>
                <TextField id="password" label="Password" variant="outlined" size='small' />
                <TextField id="confirm" label="Confirm" variant="outlined" size='small' />
            </div>
            <div className='bottom-text'>
                Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <div className = 'checkbox'>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
            </FormGroup>
            </div>

            <div className="last-sec">
                <div className="text">Sign in instead</div>
                <button className="Next-button">Next</button>
            </div>
            
        </div>
    )
}

export default UserSignup

