import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Blank from './components/Blank/Blank';

import './App.css';
import Home from './components/Home/Home';

function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/Refresh" exact component={Blank} />

        </div>
      </BrowserRouter>
    );
  }

export default App;