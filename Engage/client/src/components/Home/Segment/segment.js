import React from "react";
import "./segment.css"
const Login = (props) => {
    function create() {
        props.history.push(`/room`);
    }

    return (
        <div className="b">
            <div className="VClogin">
               <ul> <button className="chat-button" onClick={create}>Video Chat</button></ul>
                <ul> <button className="chat-button" onClick={() => alert(Math.random().toString(36).substring(2, 7))}>Chat Room</button></ul>


            </div>
        </div>
    );
};

export default Login;
