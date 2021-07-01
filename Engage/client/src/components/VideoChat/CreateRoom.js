import React from "react";
import { v1 as uuid } from "uuid";
import "./video.css";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div id="BTN">
            <ul> <button className="chat-button" onClick={create}>Create room</button> </ul>
            <form>
                <ul>    <button className="chat-button" >Enter Link</button>
                    <input type="text" name="link" ></input>
                </ul>
            </form>
        </div>
    );
};

export default CreateRoom;
