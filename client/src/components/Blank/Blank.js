import React, { Component } from 'react';
import { useHistory, BrowserRouter, Route } from 'react-router-dom';
import './Blank.css';
function Blank() {
    const history = useHistory();


    return (
        <div className="bg">
            <div className="VClogin">
                <ul><button onClick={() => history.push("/Video")}> Enter code </button> </ul>
                <button onClick={() => alert(Math.random().toString(36).substring(2, 7))}>Generate Code</button>


            </div>
        </div>

    )
}

export default Blank;