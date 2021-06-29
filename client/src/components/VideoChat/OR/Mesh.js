import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import Video from './Video.js';
import PeerConnection from './PeerCon.js';
import { DEFAULT_CONSTRAINTS, DEFAULT_ICE_SERVERS, TYPE_ROOM, TYPE_ANSWER } from './constants';
import { buildServers, generateRoomKey, createMessage, createPayload } from './utils';


import Button from './buttons';

function usePageViews() {
    let location = useLocation();

}

class Mesh extends Component{

    constructor(props) {
        super(props);
        const { mediaConstraints, iceServers } = props;
        // build iceServers config for RTCPeerConnection
        const iceServerURLs = buildServers(iceServers);
        this.state = {
            iceServers: iceServerURLs || DEFAULT_ICE_SERVERS,
            mediaConstraints: mediaConstraints || DEFAULT_CONSTRAINTS,
            localMediaStream: null,
            remoteMediaStream: null,
            roomKey: null,
            socketID: null,
            connectionStarted: false,
            text: ''
        };
        this.wantCamera = true;
        this.rtcPeerConnection = new RTCPeerConnection({ iceServers: this.state.iceServers });
    }

    render() {
        return (
            <>
                <PeerConnection />
                <Video />
                <Button />
            </>
        )
    }
}

export default Mesh;