import React from "react";
import "./video.css";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div id="BTN">
            <button className="chat-button" onClick={create}>Create room</button>
            <form>
                <ul> <button className="chat-button" >Enter Link</button></ul>
            </form>
        </div>
    );
};

export default CreateRoom;
