import React, { Component } from 'react';
//import Axios from 'axios';

import { useHistory, BrowserRouter, Route } from 'react-router-dom';
import './Blank.css';
function Blank(props) {
    const history = useHistory();
    /*const handleJoin = () => {
        Axios.get(`http://localhost:5000/Video`).then(res => {
            props.history?.push(`/Video/${res.data.link}? `);
        })
    }*/

    return (
        <div className="b">
            <div className="VClogin">
                <ul><button className="chat-button" onClick={() => history.push(`/Video `)}> Create a New Meet </button> </ul>

                <ul> <button className="chat-button" onClick={() => alert(Math.random().toString(36).substring(2, 7))}>Enter Code</button></ul>


            </div>
        </div>

    )
}

export default Blank;