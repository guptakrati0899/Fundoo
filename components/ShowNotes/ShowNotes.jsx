import React from "react";
import { useState } from "react";
import "../ShowNotes/ShowNotes.css";
import UserServices from '../../service/userservice';
import Icons from "../Icons/Icons";
import Dialog from '@material-ui/core/Dialog';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@material-ui/core';

const obj = new UserServices();

const ShowNotes = (props) => {
  
  const [newNote, setNewNote] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(props.info.title);
  const [description, setDescription] = React.useState(props.info.description);

  const newNote2 = () => {
    setNewNote(!newNote);
  };




  
  


  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClickClose = () => {
      setOpen(false);
  };    

  const handleColor=(data)=>{
      this.setState({
          color:data
      });
  }


  
//   const [value, setValue] = useState(null)
//   const handleInput = (e) => {
//       setValue(e.target.value);
//   }

  const onUpdate = () => {
      
    let Data = {
        noteId: props.info.id,
        "title": title,
        "description": description,
    };
    obj.updateNote(Data).then((response) => {
        console.log(response);
        props.displayNote();
        handleClickClose();

    }).catch(error => {
        console.log(error);
        handleClickClose();
    })

  
}


const {classes} = props;





  return (
    

   
    <div className="Note-mainContainer" onMouseEnter={newNote2} >
        <div >
                <Dialog open={open} onClose={handleClickClose}>
                    <div style={{
                        backgroundColor: props.info.color,
                    }} className="popup">
                    <p>
                      <input
                            className="input1"
                            name="title"
                            defaultValue={props.info.title}
                            multiline
                           
                            onChange= {(e) => 
                                setTitle(e.target.value)
    
                            }

                            
                            style={{
                                backgroundColor: props.info.color
                            }}
                        />
                        <TextareaAutosize 
                            className="input2" 
                            name="description"
                            defaultValue={props.info.description}
                        
                             
                            onChange= { (e) => 
                                setDescription(e.target.value)


                            }
                          
                            style={{
                                backgroundColor: props.info.color
                            }}
                        />
                    </p>
                    <div className="dialog_icon">
                        <Icons
                        
                            colorval="update"
                            val = {props.info}
                            id= {props.info.id}
                            getColor={handleColor}
                            displayNote={props.displayNote}
                            handleClickClose = {handleClickClose}
                        />
                        <Button className="button" onClick ={onUpdate} >Close</Button>
                    </div>
                    </div>
                </Dialog>
            </div>



        <div className="note-testContainer"
        style={{
                backgroundColor: props.info.color
            }}>

        <div className="content" onClick = {handleClickOpen}>
        
          <h4>{props.info.title}</h4>
    
          <div className="note-paragraph"> {props.info.description}</div>
          </div>

          <div className = "dnotes-icons">
          <Icons colorval="update"
                val = {props.info}
                id= {props.info.id}
                
                getColor={handleColor}

                displayNote ={props.displayNote}

          
                />
          </div>
          
    </div>
       
 
        </div>
        
        
    

  );
};
export default ShowNotes;

