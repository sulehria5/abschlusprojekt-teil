import React from 'react';
import TalentPool from './components/TalentPool';
import Image from '../src/image/5.png';
import Image2 from '../src/image/6.png';
import './App.css';
import Aufträge from './components/Aufträge';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




function App() {
  return (
    <div> 
       <Router>
        <Header />

      </Router>
      <TalentPool Image={Image}/>
      <Aufträge Image2={Image2}/>
       
    </div>
   
  );
}

export default App;