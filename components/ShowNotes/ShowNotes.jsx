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
          <img
              id="notes-pin"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg=="
              alt="pin-pic-display"
            />
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