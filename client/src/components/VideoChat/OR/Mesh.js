import React, { Component } from 'react';
import Peer from 'peerjs';

import Button from './buttons';

var peer = Peer( { config: {'iceServers': [
    { url: 'stun:stun.l.google.com:19302' },
    { url: 'turn:homeo@turn.bistri.com:80', credential: 'homeo' }
  ]} /* Sample servers, please use appropriate ones */
});
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (err) { console.log(err.name + ": " + err.message); });
peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
  });

  var conn = peer.connect('dest-peer-id');
  peer.on('connection', function(conn) { 
      console.log(conn);
   });

   conn.on('open', function() {
    // Receive messages
    conn.on('data', function(data) {
      console.log('Received', data);
    });
  
    // Send messages
    conn.send('Hello!');
  });
  var call = peer.call('dest-peer-id',
  mediaStream);
  peer.on('call', function(call) {
    // Answer the call, providing our mediaStream
    call.answer(mediaStream);
  });

  call.on('stream', function(stream) {
    // `stream` is the MediaStream of the remote peer.
    // Here you'd add it to an HTML video/canvas element.
  });
class Mesh extends Component {

    constructor(props) {
        super(props);


    }
    

    render() {
        return (
            <>
                <Button />
            </>
        )
    }
}

export default Mesh;