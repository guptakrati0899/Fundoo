import React from 'react'
import "../Notes/Notes.css"
import { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
 import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import Button from "@mui/material/Button";
 import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';






function Notes() {

    const [show, setShow] = useState(false); 
     const [hide, setHide] = useState(true);
   
     const expandIt = () => {
       setShow(true);
       setHide(false);
     };
   
     const normal = () => {
       setShow(false);
       setHide(true);
     };


    return (
        <div>

            <div className = "header2">
        

            {hide && (

                    <form id="form1">



                        <p>


                            <input className="forminput2" aria-label="empty textarea" placeholder="Take a Note..." onDoubleClick={expandIt} />
                            <div className="Notesicon">
                                <IconButton size="large" >
                                    <CheckBoxOutlinedIcon />
                                </IconButton>
                                <IconButton size="large" >
                                    <BrushOutlinedIcon className="paint" />
                                </IconButton>
                                <IconButton size="large" >
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </div>
                        </p>
                    </form>
                    )}
               
                {show && (
                    <form id="form2">
                        <p>
                            <input
                                className="forminput1"
                                type="text"
                                placeholder="Title"
                                name="title"
                            />
                            <input className="forminput2" aria-label="empty textarea" placeholder="Take a Note..." />

                        </p>
                        <div id="icons">
                            <AddAlertOutlinedIcon
                                style={{ fontSize: "large" }}
                            ></AddAlertOutlinedIcon>
                            <PersonAddOutlinedIcon
                                style={{ fontSize: "large" }}
                            ></PersonAddOutlinedIcon>
                            <ColorLensOutlinedIcon
                                style={{ fontSize: "large" }}
                            ></ColorLensOutlinedIcon>
                            <ImageOutlinedIcon
                                style={{ fontSize: "large" }}
                            ></ImageOutlinedIcon>
                            <ArchiveOutlinedIcon
                                style={{ fontSize: "large" }}
                            ></ArchiveOutlinedIcon>
                            <MoreVertOutlinedIcon
                                style={{ fontSize: "large" }}
                            ></MoreVertOutlinedIcon>
                            <UndoOutlinedIcon style={{ fontSize: "large" }}></UndoOutlinedIcon>
                            <RedoOutlinedIcon style={{ fontSize: "large" }}></RedoOutlinedIcon>
                            <Button className="button" style={{ fontSize: "small" }} onClick={normal}>Close</Button>
                        </div>


                    </form>
                )}

       

</div>
        </div>
    )
}





  export default Notes

