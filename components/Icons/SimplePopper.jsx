import React, { Component } from 'react';
import Popper from '@material-ui/core/Popper';
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import "../Icons/Icons.css"


  
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
                width:"28px" ,
                height:"29px",
                borderRadius:"20px",
                border: "lightgray 1px solid",
                cursor: "pointer",
               
            
                }}

                onClick={()=>{
                    props.selectColor(val);
                    handleClick()}}>
           
           
                
                </div>
            </div> )
    }
  
        return (
            <>
            < ColorLensOutlinedIcon  onClick={handleClick}/>
            <Popper  open={open} anchorEl={anchorEl} placement={'top-start'} transition>
              <div className="paper">{colors.map(demo)}</div>
            </Popper>
          </>
        );
    }