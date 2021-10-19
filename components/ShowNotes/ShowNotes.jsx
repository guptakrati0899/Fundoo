import React from "react";
import { useState } from "react";
import "../ShowNotes/ShowNotes.css";

const ShowNotes = (props) => {
  
  const [newNote, setNewNote] = useState(false);

  const newNote2 = () => {
    setNewNote(!newNote);
  };

 

  return (
    <div className="Note2-mainContainer" onMouseEnter={newNote2}>
    {newNote ? (
        <div className="note2-testContainer">
          {" "}
          <div className="note2-title">
          <h3>{props.info.title}</h3>
          </div>
          <div className="note2-paragraph"> {props.info.description}</div>
 
        </div>
      ) : (
        <div className="note2-testContainer">
          {" "}
          <div className="note2-title"><h3>{props.info.title}</h3>
    </div>{" "}
          <div className="note2-paragraph"> {props.info.description}</div>{" "}
        </div>
      )}
    </div>
  );
};
export default ShowNotes;