import React from 'react';
import ShowNotes from '../ShowNotes/ShowNotes';

class Archive extends React.Component{
 
    note=(val)=>{
        return( <ShowNotes value={val} flag={true} get = {this.props.get}/>)
    }

    render(){
        return(
            <div className="note-disp">
            {this.props.value.filter((element) => {
                return element.isArchived === true;
            }).reverse().map(this.note)}
            </div>
        )
    }

}

export default Archive;