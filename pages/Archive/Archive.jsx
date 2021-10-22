import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import DisplayNotes from "../../components/DisplayNotes/DisplayNotes"
import UserServices from '../../service/userservice';

const obj = new UserServices();

export class Archive extends Component {
    constructor(props) {
        super(props)

        this.state = {
             notesarr: [],
            
        }
    }

    getArchivedNotes = () => {
        obj.getArchivedNotes()
        .then((response) => {
          
    
                let newarr=[]
            
                response.data.data.data.filter(  info =>{
                    if(info.isArchived === true  && info.isDeleted !=true){
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
        this.getArchivedNotes();
    }


    
    render() {
        console.log(this.state.notesarr)
        return (
            <div>
           
               
                <DisplayNotes notesarr = {this.state.notesarr}  displayNote={this.getArchivedNotes}/>
                <Dashboard/>
            
             
            </div>
           
        )
    }
}

export default Archive


