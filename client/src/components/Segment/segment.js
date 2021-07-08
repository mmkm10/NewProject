import React from "react";
import "./segment.css"
const Login = (props) => {
    function create() {
        props.history.push(`/room`);
    }
    function chatr() {
        props.history.push('/chatroom')
    }

    return (
        <div className="b">
            <div className="VClogin">
                <ul> <button className="chat-button" onClick={create}>Video Chat</button></ul>
                <ul> <button className="chat-button" onClick={chatr}>Chat Room</button></ul>


            </div>
        </div>
    );
};

export default Login;
