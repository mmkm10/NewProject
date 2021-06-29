import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.css';
import Video from './Video.js';

function Button() {
  const history = useHistory();


  return (
    <div>
      <button id="mute" >MUTE</button>
      <button id="endbtn" onClick={() => history.push("/Blank")}>END</button>

    </div>


  )

}
export default Button;