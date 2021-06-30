import React from 'react';
import { useHistory } from 'react-router-dom';

import './Group/video.css';





function VideoC() {
    const history = useHistory();
    return (
        <div className="V">
            <div className="VClogin">
                    <ul><button className="chat-button" onClick={() => history.push(`/room`)}>Video Meet </button> </ul>
                    <form>              
                        <ul> <button className="chat-button" >Enter Link</button></ul>
                        </form>
            </div>

        </div>
    );
}

export default VideoC;