import React, { useEffect } from "react";
 import "../DisplayNotes/DisplayNotes.css"
import UserServices from '../../service/userservice';
import ShowNotes from "../ShowNotes/ShowNotes";


 const obj = new UserServices();





const DisplayNotes = () => {
  const [noteArray, setArray] = React.useState([]);
  useEffect(() => {
    obj.getAllNotes()
      .then((response) => {
        setArray(response.data.data.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  });
  console.log(noteArray);

  

   const noteList = noteArray.map((info) => <ShowNotes info={info} />);

   return <div className="displaynote-mainContainer">{noteList}</div>;
};
export default DisplayNotes;