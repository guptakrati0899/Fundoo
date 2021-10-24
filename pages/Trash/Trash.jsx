import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import DisplayNotes from "../../components/DisplayNotes/DisplayNotes"
import UserServices from '../../service/userservice';
import "../Trash/Trash.css"

const obj = new UserServices();

export class Trash extends Component {
    constructor(props) {
        super(props)

        this.state = {
             notesarr: [],
            
        }
    }

    getTrashNotes = () => {
        obj.getTrashNotes()
        .then((response) => {
            
    
                let newarr=[]
            
                response.data.data.data.filter(  info =>{
                    if(info.isArchived != true  && info.isDeleted ===true){
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
        this.getTrashNotes();
    }


    
    render() {
        console.log(this.state.notesarr)
        return (
            <div>
           
                <Dashboard/>
                <div className="tdisplay">
                <DisplayNotes notesarr = {this.state.notesarr}  displayNote={this.getTrashNotes}/>
                </div>
                
            </div>
        )
    }
}

export default Trash

