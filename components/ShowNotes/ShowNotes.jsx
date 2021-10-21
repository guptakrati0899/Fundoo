import React from "react";
import { useState } from "react";
import "../ShowNotes/ShowNotes.css";
import "../Icons/Icons"
import Icons from "../Icons/Icons";

const ShowNotes = (props) => {
  
  const [newNote, setNewNote] = useState(false);

  const newNote2 = () => {
    setNewNote(!newNote);
  };



  

 

  return (
    

   
    <div className="Note-mainContainer" onMouseEnter={newNote2}>
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