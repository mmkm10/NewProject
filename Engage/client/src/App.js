import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Home/Segment/segment";
import CreateRoom from "./components/VideoChat/CreateRoom";
import Room from "./components/VideoChat/Room";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/room" exact component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
