import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Chat.css';

export default function SignIn() {
  const [room, setRoom] = useState('');

  return (
    <>
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="chat-heading">Join</h1>

        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => ( !room) ? e.preventDefault() : null} to={`/chat?room=${room}`}>
          <button className={'chat-button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
    </>
  );
}
