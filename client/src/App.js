import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Blank from './components/Blank/Blank';
import Video from './components/VideoChat/Group/CreateRoom';
import Room from './components/VideoChat/Group/Room';
import './App.css';
import Home from './components/Home/Home';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Blank" exact component={Blank} />
          <Route path="/room" exact component={Video} /> 
          <Route path="/room/:roomID" component={Room} /> 

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;