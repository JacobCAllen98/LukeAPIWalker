import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import SearchComponent from'./components/SearchComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/"/>
        <SearchComponent path="/:category/:id" />
      </Router>
    </div>
  );
}

export default App;
