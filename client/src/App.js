import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Blank from './components/Blank/Blank';
import Video from './components/VideoChat/Mesh';
import './App.css';
import Home from './components/Home/Home';




//import url from './components/VideoChat/url';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Blank" exact component={Blank} />
          <Route path="/Video" exact component={Video} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;