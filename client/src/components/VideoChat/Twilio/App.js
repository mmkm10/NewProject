import './App.css';
import React, { Component } from 'react';
import Room from './Room';
const { connect } = require('twilio-video');

class App extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.joinRoom = this.joinRoom.bind(this);
        this.returnToLobby = this.returnToLobby.bind(this);
        this.updateIdentity = this.updateIdentity.bind(this);
        this.removePlaceholderText = this.removePlaceholderText.bind(this);
        this.state = {
            identity: '',
            room: null
        }
    }
    async joinRoom() {
        try {
            const response = await fetch(`https://{your-endpoint}?identity=${this.state.identity}`);
            const data = await response.json();
            const room = await connect(data.accessToken, {
                name: 'cool-room',
                audio: true,
                video: true
            });

            this.setState({ room: room });
        } catch (err) {
            console.log(err);
        }
    }
    returnToLobby() {
        this.setState({ room: null });
    }
    removePlaceholderText() {
        this.inputRef.current.placeholder = '';
    }
    updateIdentity(event) {
        this.setState({
            identity: event.target.value
        });
    }
    render() {
        const disabled = this.state.identity === '' ? true : false;

        return (
            <div className="ap">
                {
                    this.state.room === null
                        ? <div className="lobby">
                            <input
                                ref={this.inputRef}
                                value={this.state.identity}
                                onChange={this.updateIdentity}
                                onClick={this.removePlaceholderText}
                                placeholder="Display Name" />
                            <button disabled={disabled} onClick={this.joinRoom}>Join Room</button>
                        </div>
                        : <Room returnToLobby={this.returnToLobby} room={this.state.room} />
                }
            </div>
        );
    }
}

export default App;
