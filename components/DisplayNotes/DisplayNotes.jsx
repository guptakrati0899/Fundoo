
 import "../DisplayNotes/DisplayNotes.css"
import ShowNotes from "../ShowNotes/ShowNotes";


const DisplayNotes = (props) => { 
  const noteList = props.notesarr.map((info) => <ShowNotes info={info} />);


   return <div className="displaynote-mainContainer">{noteList}</div>;
};
export default DisplayNotes;