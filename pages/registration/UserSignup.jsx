import React from "react";
import '../registration/UserSignup.css'
import accountlogo from '../Assets/account-logo.svg'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link';




function UserSignup() {
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
                <TextField id="firstname" label="First name" variant="outlined" size='small' />
                <TextField id="lastname" label="Last name" variant="outlined" size='small'/>
            </div>

            <div className = "User-Name">
            <OutlinedInput 
             className = "user"
            id="user" label = "UserName" 
            endAdornment={<InputAdornment label = "UserName"  style ={{color : 'black'}} position="end">@gmail.com</InputAdornment> } size='small'
           
           />
            {/* <TextField style={{ width : '25vw'}} id="user" label="Username" variant="outlined"  endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>} size='small'  value='@gmail.com' /> */}
            <div className='user-text'>You can use letters, numbers & periods</div>

            </div>

            <div className='user-text1'>Use my current email address instead</div>

            <div className='credentials'>
                <TextField id="password" label="Password" variant="outlined" size='small' />
                <TextField id="confirm" label="Confirm" variant="outlined" size='small' />
            </div>

            <div className='bottom-text'>
                Use 8 or more characters with a mix of letters, numbers & symbols
            </div>

            <div className = 'checkbox'>
        
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
          
            </div>

            <div className="last-sec">
            <Link className="text" href="Signin" underline="none">Sign in instead </Link>
                {/* <div className="text">Sign in instead</div> */}
                <Button className="Next-button" variant = "contained">Next</Button>
            </div>
            </div>
            
            <div className="right-sec"> 
            <img src = {accountlogo} className ="account-logo"></img>
            <div className = "acclogo-text">  One account. All of Fundoo working for you.</div> 
            </div>
            
        </div>
        
       

        
    )
}

export default UserSignup

