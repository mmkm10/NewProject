import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import blank from './components/Blank/Blank';

import './App.css';
import Home from './components/Home/Home';

import url from './components/VideoChat/url';
function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/Refresh" exact component={blank} />

        </div>
      </BrowserRouter>
    );
  }

export default App;