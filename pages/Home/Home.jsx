import React, { Component } from 'react'
import Notes from "../../components/Notes/Notes"
import DisplayNotes from "../../components/DisplayNotes/DisplayNotes"
import UserServices from '../../service/userservice';
import Dashboard from "../../components/Dashboard/Dashboard"

const obj = new UserServices();

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
             notesarr: [],
            
        }
    }

    displayNote = () => {
        obj.getAllNotes()
        .then((response) => {
           
    
                let newarr=[]
            
                response.data.data.data.filter(  info =>{
                    if(info.isArchived != true  && info.isDeleted !=true){
                        newarr.push(info)

                    }
                  

                })
                console.log(newarr)

            
            this.setState({
                notesarr: newarr,
               
            })


            // this.props.displayNote();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    componentDidMount() {
        this.displayNote();
    }


    
    render() {
        console.log(this.state.notesarr)
        return (
            <div>
                <Dashboard/>
              <Notes displayNote={this.displayNote}/>

                <DisplayNotes notesarr = {this.state.notesarr}  displayNote={this.displayNote}/>
                
            </div>
        )
    }
}

export default Home