import React, { Component } from 'react';
import { useHistory, BrowserRouter, Route } from 'react-router-dom';
import './Blank.css';
function Blank() {
    const history = useHistory();
    const { v4: uuidV4 } = require('uuid')
    const url = uuidV4;


    return (
        <div className="b">
            <div className="VClogin">
                <ul><button className="chat-button" onClick={() => history.push("/Video")}> Create a New Meet </button> </ul>

                <ul> <button className="chat-button" onClick={() => alert(Math.random().toString(36).substring(2, 7))}>Enter Code</button></ul>


            </div>
        </div>

    )
}

export default Blank;