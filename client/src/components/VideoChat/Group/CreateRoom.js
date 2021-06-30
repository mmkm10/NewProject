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
        <button onClick={create}>Create room</button>
        </div>
    );
};

export default CreateRoom;
