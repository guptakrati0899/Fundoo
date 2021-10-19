import React, { Component } from 'react'
import Notes from "../Notes/Notes"
import DisplayNotes from "../DisplayNotes/DisplayNotes"

export class Home extends Component {
    render() {
        return (
            <div>
                <Notes/>
                <DisplayNotes/>
                
            </div>
        )
    }
}

export default Home
