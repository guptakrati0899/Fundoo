import React, { Component } from 'react';
import "../Icons/Icons.css";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import UserServices from '../../service/userservice';

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SimplePopper from "../Icons/SimplePopper"
import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";




const obj = new UserServices();

class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            openStatus: false,
        
         

        }

    }

    SetColor =(color) => {
        if (this.props.colorval == "update") {
            let Data = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(Data).then((response) => {
                console.log(response);
                this.props.displayNote();
            }).catch(error => {
                console.log(error);
            });
        } else {
          
            this.props.recieveColor(color.code);
        }
    }

    
    onArchive = () => {
        let Data = {
            noteIdList: [this.props.val.id],
            isArchived: true,
        };
        
        obj.archiveNote(Data).then((response) => {
            console.log(response);
            this.props.displayNote();
        }).catch(error => {
            console.log(error);
        })
        console.log(Data);
    }


    menuClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };




   

   

    render() {
        return (
    
                <div className="icon-open-content">
                    <div className="note-icons-hover">
                        <Tooltip title="Reminder">
                            <AddAlertOutlinedIcon className="i-disp" />
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Collaborator">
                            <PersonAddOutlinedIcon className="i-disp"/>
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                    <Tooltip title="ChangeColor">
                        <SimplePopper selectColor={(Data) => {
                            this.SetColor(Data);
                        }} />
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Image">
                             <ImageOutlinedIcon className="i-disp" /> 
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Archive">
                            <ArchiveOutlinedIcon className="i-disp" 
                            onClick={() => {
                                if (this.props.colorval === "update") {
                                    this.onArchive()
                                }
                                else {
                                    this.props.archiveCreate()
                                }
                            }}/>
            
                              
                        </Tooltip>
                    </div>
               
                <div className="note-icons-hover">
                <Tooltip title="Menu">
                        <MoreVertOutlinedIcon className="i-disp" onClick={this.menuClick}/> 
                        </Tooltip>
                        <Menu
                    id="simple-menu"
                    keepMounted
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    open={Boolean(this.state.anchorEl)}
                >
                    <MenuItem className="popover" onClick={() => {
                        if (this.props.deleteNote === "deleteUpdate") {
                            this.props.delete()
                            this.handleClose()
                        }
                        else{
                            this.props.deleteCreate()
                        }
                    }
                    }>Delete Note</MenuItem>
                    <MenuItem >Add Label</MenuItem>
                    <MenuItem >Add Drawing</MenuItem>
                    <MenuItem >Make a Copy</MenuItem>
                    <MenuItem >Show Checkboxes</MenuItem>
                    <MenuItem >Copy to Google Docs</MenuItem>
                </Menu>

                   
                </div>


            </div>

            
     
        );
    }
}

export default Icons;