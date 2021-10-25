import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import UserServices from '../../service/userservice';
import MenuItem from '@material-ui/core/MenuItem';
import "../Icons/Collaborator.scss"
import DialogActions from '@mui/material/DialogActions';
import { Button, MenuList } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import pic from "../Home/pic.jpeg"
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { Menu } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const obj = new UserServices();

const styles = {
    underline: {
        marginLeft:'20px',
        marginTop:'10px',
        width:'300px',
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};

class Collaborator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openStatus:false,
            collaborators:'',
            collabData:[]
        }
        
    }
    
    handleInput = (e) =>{
        console.log( e.target.value);
        this.setState({
            collaborators:e.target.value
        });
        let Data = {
            searchWord: e.target.value
        }
        obj.searchCollaborator(Data).then((response) => {
            this.setState({
                collabData:response.data.data.details
            });
        }).catch(error => {
            console.log( error);
        });
    }



   

    
    closeDialog=()=>{

        this.props.getCloseStatus(false);
        
    }

    render() {
        const { classes } = this.props;
        const userList = this.state.collabData.map((values, index)=> {
            return (
              <MenuItem key={index}>
                {values.email}
              </MenuItem>
                );
            });
        return (
            <div>
                
                <Dialog
                    open={this.props.open}>
                       
                <div
                    className="dialog-body" 
                    style={{
                    width:"570px",
                    minHeight:"160px",
                    padding:"15px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between"
                }}>
                <div
                 style={{borderBottom: "2px solid #e4d6d6"}}>
                Collaborators
                </div>
                
                <div>
                    <div>
                        <div className="intro">
                    <Avatar alt="" 
                     src={pic} 
                        type="button" />
                    <div className="name-txt">{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}  (Owner)</div></div>
                    <div className="email-txt">{localStorage.getItem('email')}</div>
                   
                    </div>
                    <div className="search">
                        <div className="add">
                        <Avatar>
                            <PersonAddRoundedIcon/>
                            </Avatar>
                            </div>
                    <TextField
                        className="search_text"
                        name="collaborators"
                        multiline
                        InputProps={{disableUnderline:true}}
                        placeholder = "Person or email to share with "
                        onChange={this.handleInput}
                        />
                </div>
                </div>
                {/* <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <Stack direction="row" spacing={2}>
        <Paper>
                
                <MenuList
                
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  className="menulist"
                >
                {userList}        
                </MenuList>
            
            </Paper>
            </Stack>
       
             
    
    
                  
                     
             
              
                   

                </div>
       
             
                <div className='collab-btn'>
                    <div className='collab-btn-cnt'>
                    <DialogActions>
                        
          <Button autoFocus onClick={this.closeDialog}>
          Cancel
          </Button>
          <Button autoFocus >
          Save
          </Button>
        </DialogActions>
                    </div>
                </div>
        
                </Dialog>
                </div>
          
        );
    }
}

export default withStyles(styles)(Collaborator);