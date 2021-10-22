import React, { Component } from 'react'
import DisplayNotes from "../../components/DisplayNotes/DisplayNotes"
import UserServices from '../../service/userservice';

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
            // this.setState ({
            //     notesarr: response.data.data.data
            // })

    
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
           

                <DisplayNotes notesarr = {this.state.notesarr}  displayNote={this.getTrashNotes}/>
                
            </div>
        )
    }
}

export default Trash

