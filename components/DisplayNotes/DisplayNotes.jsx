
import "./DisplayNotes.css"

import React, { Component } from 'react'

export class DisplayNotes extends Component {
  render() {
    return (
      <div>
         <div className="note1">
            <div className="note1_content">
              <h4>To Do</h4>
              <div className="content1">Assignment</div>
              <div className="content2">Pay cc bills</div>
            </div>
      </div> 
      <div className="note2">
            <div className="note2_content">
              <h4>Schedule</h4>
              <div className="content-1">Wakeup at 7am</div>
              <div className="content-2">Sleep at 1am</div>
            </div>
      </div> 
        
      </div>
    )
  }
}

export default DisplayNotes


