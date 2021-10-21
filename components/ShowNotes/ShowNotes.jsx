import React from "react";
import { useState } from "react";
import "../ShowNotes/ShowNotes.css";
import UserServices from '../../service/userservice';
import Icons from "../Icons/Icons";
import Dialog from '@material-ui/core/Dialog';
import Button from '@mui/material/Button';

const obj = new UserServices();

const ShowNotes = (props) => {
  
  const [newNote, setNewNote] = useState(false);

  const newNote2 = () => {
    setNewNote(!newNote);
  };




  
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };    

  const handleColor=(data)=>{
      this.setState({
          color:data
      });
  }


  
  const [value, setValue] = useState(null)
  const handleInput = (e) => {
      setValue(e.target.value);
  }

  const onUpdate = () => {
    let Data = {
        noteId: props.info.id,
        title: props.info.title,
        description: props.info.description
    };
    obj.updateNote(Data).then((response) => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
    setOpen(false);
}





  

 

  return (
    

   
    <div className="Note-mainContainer" onMouseEnter={newNote2} onClick={handleClickOpen}>
        <div>
                <Dialog open={open} onClose={handleClose}>
                    <div style={{
                        backgroundColor: props.info.color,
                    }}>
                    <p>
                        <input
                            className="input1"
                            name="title"
                            defaultValue={props.info.title}
                            multiline
                            onChange={handleInput}
                            style={{
                                backgroundColor: props.info.color
                            }}
                        />
                        <input
                            className="input2" 
                            name="description"
                            defaultValue={props.info.description}
                            multiline
                            onChange={handleInput}
                            style={{
                                backgroundColor: props.info.color
                            }}
                        />
                    </p>
                    <div className="dialog_icon">
                        <Icons
                            archive={() => {
                                this.onArchive();
                            }}
                            colorval="update"
                            val = {props.info}
                            id= {props.info.id}
                            getColor={handleColor}
                            displayNote={props.displayNote}
                            archiveNotes="archiveUpdate"
                        />
                        <Button className="button" onClick ={onUpdate}>Close</Button>
                    </div>
                    </div>
                </Dialog>
            </div>



        <div className="note-testContainer"
        style={{
                backgroundColor: props.info.color
            }}>
        
          <h4>{props.info.title}</h4>
    
          <div className="note-paragraph"> {props.info.description}</div>

          <div className = "dnotes-icons">
          <Icons colorval="update"
                val = {props.info}
                id= {props.info.id}

                displayNote ={props.displayNote}

          
                />
          </div>
    </div>
       
 
        </div>
        
        
    

  );
};
export default ShowNotes;