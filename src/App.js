import './App.css';

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Experience from './components/Experience'
import More from './components/More'
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
