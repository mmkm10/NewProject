import React, { PureComponent } from 'react';
import './Video.css'

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

class RTCVideo extends PureComponent {

    /*  constructor(props) {
          super(props);
          this.state = {
              localMediaStream: null,
              remoteMediaStream: null
          };
  
  
          this.wantCamera = true;
      }
  
      openCamera = async (fromHandleOffer) => {
          const { mediaConstraints, localMediaStream } = this.state;
          try {
              if (!localMediaStream) {
                  let mediaStream;
                  if (this.wantCamera) mediaStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
                  else mediaStream = await navigator.mediaDevices.getDisplayMedia(mediaConstraints);
  
                  return fromHandleOffer === true ? mediaStream : this.setState({ localMediaStream: mediaStream });
              }
          } catch (error) {
              console.error('getUserMedia Error: ', error)
          }
      } */
    render() {


        /*     const {
                 localMediaStream,
                 remoteMediaStream,
             } = this.state;
     
     */
        return (
            <div className="grid">
                <video />
            </div>


        );
    }
};

export default RTCVideo;

