import React, { Component } from 'react';
import "../Icons/Icons.css";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SimplePopper from "../Icons/SimplePopper"
import Tooltip from '@material-ui/core/Tooltip';

class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
         

        }

    }
   


   

   

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
                        <SimplePopper putColor={(Data) => {
                            this.onSetColor(Data);
                        }} />
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Image">
                             <ImageOutlinedIcon className="i-disp" /> 
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Archive">
                            <ArchiveOutlinedIcon className="i-disp" 
                              />
                        </Tooltip>
                    </div>
               
                        <div className="note-icons-hover">
                            <Tooltip title="More">
                                <MoreVertOutlinedIcon className="i-disp"  />
                            </Tooltip>
                        </div>

                        <div className="note-icons-hover">
                        <Tooltip title="Undo">
                        <UndoOutlinedIcon className="i-disp"/>
                        </Tooltip>
                        </div>

                        <div className="note-icons-hover">
                        <Tooltip title="Redo">
                        <RedoOutlinedIcon className="i-disp"/>
                        </Tooltip>
                        </div>

                    </div>
              
            
     
        );
    }
}

export default Icons;