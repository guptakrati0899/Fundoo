import React from "react";
 import "../DisplayNotes/DisplayNotes.css";
 import ShowNotes from "../ShowNotes/ShowNotes"
 
 
 const DisplayNotes = (props) => { 
   const noteList = props.notesarr.map((info) => <ShowNotes info={info} displayNote ={props.displayNote} getdisplayNote= {props.getdisplayNote} handleClickClose={props.handleClickClose}/>);
 
 
    return <div className="displaynote-mainContainer">{noteList}</div>;
 };
 export default DisplayNotes;