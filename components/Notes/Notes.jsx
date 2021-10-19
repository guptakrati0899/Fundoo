import React, { Component } from 'react'
import "./Notes.css"
import UserServices from '../../service/userservice';
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
 import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import Button from "@mui/material/Button";
 import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Snackbar} from '@mui/material';
import SimplePopper from './colorpopper';


const obj = new UserServices();




export class Notes extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show : false,
             hide : true,
             title : "",
             description : "",
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
      
    
 normal = () => {
    this.setState({
        show : false,
        hide : true,
       

    })


    let addnotesObj = {
        "title": this.state.title,
        "description": this.state.description,
      
        }
        console.log(addnotesObj);
        obj.addNotes(addnotesObj).then((response) =>{
            console.log(response);
            this.setState({snackbaropen:true, snackbarmsg: "Added Notes Sucessfully"});
        })
        .catch((error)=>{
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Adding Notes Failed!"});
        })


        obj.getAllNotes().then((response)=>{
            console.log(response);
            this.setState({
              notes: response.data
          });
        }).catch((error)=>{
            console.log(error);
        })
        


        



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
                <form id="form2">
                    <p>
                        <input
                            className="forminput1"
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange ={e =>this.change(e)}
                        />
                        <input name="description" className="forminput-2" aria-label="empty textarea" placeholder="Take a Note..."  onChange ={e =>this.change(e)}
                        />

                    </p>
                    <div id="icons">
                        <AddAlertOutlinedIcon
                            style={{ fontSize: "large" }}
                        ></AddAlertOutlinedIcon>
                        <PersonAddOutlinedIcon
                            style={{ fontSize: "large" }}
                        ></PersonAddOutlinedIcon>
                          <SimplePopper putColor={(Data) => {
                            this.onSetColor(Data);
                        }} />
                        <ImageOutlinedIcon
                            style={{ fontSize: "large" }}
                        ></ImageOutlinedIcon>
                        <ArchiveOutlinedIcon
                            style={{ fontSize: "large" }}
                        ></ArchiveOutlinedIcon>
                        <MoreVertOutlinedIcon
                            style={{ fontSize: "large" }}
                        ></MoreVertOutlinedIcon>
                        <UndoOutlinedIcon style={{ fontSize: "large" }}></UndoOutlinedIcon>
                        <RedoOutlinedIcon style={{ fontSize: "large" }}></RedoOutlinedIcon>
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


