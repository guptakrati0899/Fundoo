import React from "react";
import logo from '../Assets/logo.png'
import accountlogo from '../Assets/account-logo.svg'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';


function UserSignup() {
    return (
        <div className = "body">
        <div className = "Main">
            <div className = "left-sec">
            <img src = {logo} className = "applogo"></img>
            <div className="heading">Create Your Fundoo Account</div>
            <div className="subhead">Continue to fundoo</div>

            <div className='name'>
                <TextField id="firstname" label="First name" variant="outlined" size='small' />
                <TextField id="lastname" label="Last name" variant="outlined" size='small'/>
            </div>

            <div className = "User-Name">
            <OutlinedInput
            style={{ width : '25vw'}} 
            id="user"
            endAdornment={<InputAdornment  style ={{color : 'black'}} position="end">@gmail.com</InputAdornment>}
           />
            {/* <TextField style={{ width : '25vw'}} id="user" label="Username" variant="outlined"  endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>} size='small'  value='@gmail.com' /> */}
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
                <Button className="Next-button" variant = "contained">Next</Button>
            </div>
            </div>
            
            <div className="right-sec"> 
            <img src = {accountlogo} className ="account-logo"></img>
            <div className = "acclogo-text">  One account. All of Fundoo working for you.</div> 
            </div>
            
        </div>
        <div className="footer">
            <div className="left-foot">

            </div>
            <div className = "right-foot">
                <div>Help      Privacy      Terms</div>
            </div>
        </div>
        </div>

        
    )
}

export default UserSignup

