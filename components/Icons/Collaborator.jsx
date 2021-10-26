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
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useRadioGroup } from '@mui/material';


const obj = new UserServices();

const styles = {
    underline: {
        marginLeft: '20px',
        marginTop: '10px',
        width: '300px',
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
            openStatus: false,
            collabData: [],
            collabarr: [
                {
                    firstName: localStorage.getItem('firstName'), 
                    lastName : localStorage.getItem('lastName'),
                    email: localStorage.getItem('email'),
                    userId :localStorage.getItem('token')
                }
            ],
        }

    }

    handleInput = (e) => {
        console.log(e.target.value);
        if (e.target.value !=""){
        let Data = {
            searchWord: e.target.value
        }
        obj.searchCollaborator(Data).then((response) => {
            this.setState({
                collabData: response.data.data.details
            });
        }).catch(error => {
            console.log(error);
        });
     }
     else if(e.target.value ===""){
         this.empty()
     }

    }


    empty = () => {
        this.setState({
            collabData: [],
    
        })
    }

    getUser = (e) => {
        let newArr = this.state.collabarr
        newArr.push(e)
        this.setState({some : 'val' , collabarr :newArr})
        console.log(this.state.collabarr)
    }
  




    closeDialog = () => {

        this.props.getCloseStatus(false);

    }

    saveCollab = () => {

        this.props.getNote(this.state.collabarr)
        

    }

    render() {
        const { classes } = this.props;
        const userList = this.state.collabData.map((values, index) => {
            return (
                <MenuItem key={index} onClick={(e) => this.getUser(values)}>
                    {values.email}
                </MenuItem>
            );
        });

        const userData = this.state.collabarr.map((values, index) => {
            return (
                <div>
                <div className="intro">
                    <Avatar 
                        type="button" >{values.firstName.charAt(0)}</Avatar>
                    <div className="name-txt">{values.firstName} {values.lastName}</div></div>
                <div className="email-txt">{values.email}</div>

            </div>
            )
        })
        return (
            <div>

                <Dialog
                    open={this.props.open}>

                    <div
                        className="dialog-body"
                        style={{
                            width: "570px",
                            minHeight: "160px",
                            padding: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                        <div
                            style={{ borderBottom: "2px solid #e4d6d6" }}>
                            Collaborators
                        </div>

                        <div>

                            {userData}
                            {/* <div>
                                <div className="intro">
                                    <Avatar alt=""
                                        src={pic}
                                        type="button" />
                                    <div className="name-txt">{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}  (Owner)</div></div>
                                <div className="email-txt">{localStorage.getItem('email')}</div>

                            </div> */}
                            <div className="search">
                                <div className="add">
                                    <Avatar>
                                        <PersonAddRoundedIcon />
                                    </Avatar>
                                </div>
                                <TextField
                                    className="search_text"
                                    name="collaborators"
                                    multiline
                                    InputProps={{ disableUnderline: true }}
                                    placeholder="Person or email to share with "
                                    onChange={this.handleInput}
                                />
                            </div>
                            </div>
                        <div className="menu-list">
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

                    </div>


                    <div className='collab-btn'>
                        <div className='collab-btn-cnt'>
                            <DialogActions>

                                <Button autoFocus onClick={this.closeDialog}>
                                    Cancel
                                </Button>
                                <Button autoFocus onClick={this.saveCollab} >
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