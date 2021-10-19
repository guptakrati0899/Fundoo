import React from "react";
import { useState } from "react";
import "../ShowNotes/ShowNotes.css";

const ShowNotes = (props) => {
  
  const [newNote, setNewNote] = useState(false);

  const newNote2 = () => {
    setNewNote(!newNote);
  };

 

  return (
    <div className="Note-mainContainer" onMouseEnter={newNote2}>
        <div className="note-testContainer">
        
          <h4>{props.info.title}</h4>
    
          <div className="note-paragraph"> {props.info.description}</div>
 
        </div>
    
    </div>
  );
};
export default ShowNotes;