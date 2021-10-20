import React, { Component } from 'react'
import Notes from "../Notes/Notes"
import DisplayNotes from "../DisplayNotes/DisplayNotes"
import UserServices from '../../service/userservice';

const obj = new UserServices();

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             notesarr: []
        }
    }

    displayNote = () => {
        obj.getAllNotes()
        .then((response) => {
            this.setState ({
                notesarr: response.data.data.data
            })
            this.props.displayNote();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    componentDidMount() {
        this.displayNote();
    }
    render() {
        return (
            <div>
              <Notes displayNote={this.displayNote}/>
                <DisplayNotes notesarr = {this.state.notesarr} displayNote={this.displayNote}/>
                
            </div>
        )
    }
}

export default Home
