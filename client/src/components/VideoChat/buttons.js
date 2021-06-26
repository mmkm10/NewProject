import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.css'

function Button() {
    const history = useHistory();
  
    
    return (
        <div>
          <button id="endbtn" onClick={() => history.push("/Blank")}>END</button>
        </div>
   
  
    )
  
  }
  export default Button;