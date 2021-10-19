import React, { useEffect } from "react";
 import "./DisplayNotes.css"
import UserServices from '../../service/userservice';
import ShowNotes from "../ShowNotes/ShowNotes";
// import Notes from "../Notes/Notes";

// import React, { Component } from 'react'


 const obj = new UserServices();





// export class DisplayNotes extends Component {


//   constructor(props) {
//     super(props)
  
//     this.state = {


       
//     }

//   }
 
  
  


  
//   render() {
//     // console.log(this.props.value.description)
//     return (
//       <div>
        
        
//             {/* <div className="disp-note">
//               {this.state.notes.map(this.note)}
//             </div>
//                 <div className="note">
//                 <div>
//                     {this.props.value.title}
//                 </div>
//                     {this.props.value.description}
//                 </div>
//             </div> */}
        
//          {/* <div className="note1">
//             <div className="note1_content">
//               <h4>To Do</h4>
//               <div className="content1">Assignment</div>
//               <div className="content2">Pay cc bills</div>
//             </div>
//       </div> 
//       <div className="note2">
//             <div className="note2_content">
//               <h4>Schedule</h4>
//               <div className="content-1">Wakeup at 7am</div>
//               <div className="content-2">Sleep at 1am</div>
//             </div>
//       </div>  */}
        
//       </div>
//     )
//   }
// }

// export default DisplayNotes



// import Notes from "./Notes";


const DisplayNotes = () => {
  const [noteArray, setArray] = React.useState([]);
  useEffect(() => {
    obj.getAllNotes()
      .then((response) => {
        setArray(response.data.data.data);
        console.log(noteArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(noteArray);

   const noteList = noteArray.map((info) => <ShowNotes info={info} />);

   return <div className="displaynotenew-mainContainer">{noteList}</div>;
};
export default DisplayNotes;