import React, { Component } from 'react'
import "./Notes.css"
import UserServices from '../../service/userservice';

import Button from "@mui/material/Button";
 import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Snackbar} from '@mui/material';
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import Icons from '../Icons/Icons';



const obj = new UserServices();




export class Notes extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show : false,
             hide : true,
             title : "",
             description : "",
             color : "#ffffff",
             snackbaropen: false, 
             snackbarmsg: "",
             notes:[],
              
        }
    }


    snackbarClose = () => {
        this.setState({snackbaropen: false});
    };


 expandIt = () => {
       this.setState({
           show : true,
           hide : false,
       

       })
    }

    change = (e) =>
    {
    
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.value)
    }
      


    handleColor =(data) =>{
        this.setState({
            color:data
        });
    }
    
 normal = () => {
     if(this.state.description != "" && this.state.title !="" ) {
  


    let addnotesObj = {
        "title": this.state.title,
        "description": this.state.description,
        "color" :this.state.color,
        
        }
        console.log(addnotesObj);
        obj.addNotes(addnotesObj).then((response) =>{
            console.log(response);
            this.setState({snackbaropen:true,color : "#ffffff",show:false , hide :true, title : "",description: "", snackbarmsg: "Added Notes Sucessfully"});
            
        })
        .catch((error)=>{
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Adding Notes Failed!"});
        })
    }


    };



    

    
    render() {
       
        return (
            <div>
                 <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />
                    <div className = "header2">
        

        {this.state.hide && (

                <form id="form1">

                    <p>
                        <input className="forminput2" aria-label="empty textarea" placeholder="Take a Note..." onClick={this.expandIt} />
                        <div className="Notesicon">
                            <IconButton size="large" >
                                <CheckBoxOutlinedIcon />
                            </IconButton>
                            <IconButton size="large" >
                                <BrushOutlinedIcon className="paint" />
                            </IconButton>
                            <IconButton size="large" >
                                <InsertPhotoOutlinedIcon />
                            </IconButton>
                        </div>
                    </p>
                </form>
                )}
           
            {this.state.show && (
                <form id="form2" style={{
                    backgroundColor : this.state.color
                }}>
                    <p>
                        <input
                            className="forminput1"
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange ={e =>this.change(e)}
                            style={{
                                backgroundColor : this.state.color
                            }}
                        />
                        <input name="description" className="forminput-2" aria-label="empty textarea" placeholder="Take a Note..."  onChange ={e =>this.change(e)}
                         style={{
                            backgroundColor : this.state.color
                        }}
                        
                        />

                    </p>

                    <Icons colorval="create"
                        val={this.state}  
                    recieveColor ={this.handleColor}
                    
                    />
               
                      
                       <div className="notes-icons">

                          


                       
                  

                        <Button className="button" style={{ fontSize: "small" }} onClick={this.normal}>Close</Button>
                        </div>
                 


                </form>
            )}

   

</div>
                
            </div>
        )
    }
}

export default Notes


