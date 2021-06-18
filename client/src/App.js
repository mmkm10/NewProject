import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import VC from './components/VideoChat/VC';

import './App.css';
import Home from './components/Home/Home';

import url from './components/VideoChat/url';
function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path={url} exact component={VC} />

        </div>
      </BrowserRouter>
    );
  }

export default App;