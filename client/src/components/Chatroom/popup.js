import React, { Component } from "react";
import Video from "../VideoChat/Room";
import { useHistory } from "react-router";
import { v1 as uuid } from "uuid";

const id = uuid();

class PopUp extends Component {
  handleClick = (props) => {
   this.props.toggle();
   props.history.push(`/room/${id}`);


  };
  
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>

    </div>
   </div>
  );
 }
}
export default class App extends React.Component {
    state = {
     seen: false
     };
    togglePop = () => {
     this.setState({
      seen: !this.state.seen
     });
    };
  render() {
    return (
     <div>
      <div className="btn" onClick={this.togglePop}>
        <button>Video!</button>
      </div>
      {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
     </div>
    );
   }
  }