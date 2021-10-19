import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import "../Notes/Notes.css"


const useStyles = makeStyles((theme) => ({
    paper: {
      borderRadius:'3px',
      maxWidth:'140px',
      display:'flex',
      flexDirection:'row',
      flexFlow:'wrap',
      padding: theme.spacing(1),
      marginBottom:"1rem",
      border: 'lightgray 1px solid',
      backgroundColor:'white',
    },
  }));
  
  const colors=[{
      code: '#FFFFFF',
  },{
      code: '#f28b82',
  },{
      code: '#fbbc04',
  },{
      code: '#fff475',
  },{
      code: '#ccff90',
  },{
      code: '#a7ffeb',
  },{
      code: '#cbf0f8',
  },{
      code: '#aecbfa',
  },{
      code: '#d7aefb',
  },{
      code: '#fdcfe8',
  },{
      code: '#e6c9a8',
  },{
      code: '#e8eaed',
  }]
  
  export default function SimplePopper(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
  
    const demo=(val)=>{
        return ( <div className="color">
            <div style={{
                backgroundColor:val.code,
                color:val.code,
                width:'28px',
                height:'28px',
                borderRadius:'15px',
                border: 'lightgray 1px solid',
                cursor:'pointer',
            
                }}
                // onClick={()=>{
                //   props.putColor(val);
                //   handleClick()}}
                >
                </div>
            </div> )
    }
  
        return (
            <>
            < ColorLensOutlinedIcon  onClick={handleClick}/>
            <Popper  open={open} anchorEl={anchorEl} placement={'top-start'} transition>
              <div className={classes.paper}>{colors.map(demo)}</div>
            </Popper>
          </>
        );
    }
