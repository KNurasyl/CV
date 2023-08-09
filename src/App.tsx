import React from 'react';
import { Header } from './containers/Header/Header';
import { AboutMe } from './containers/AboutMe/AboutMe';
import { MySkills } from './containers/MySkills/MySkills';
import { Experience } from './containers/Experience/Experience';
import { MyPortfolio } from './containers/MyPortfolio/MyPortfolio';
import { GetInTouch } from './containers/GetInTouch/GetInTouch';
import './App.css';
import { Navigation } from './containers/Navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <AboutMe/>
        <MySkills/>
        <Experience/>
        <MyPortfolio/>
        <GetInTouch/>
    </div>
  );
}

export default App;
