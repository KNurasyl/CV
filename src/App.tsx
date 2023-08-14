import React from 'react';
import { Header } from './containers/Header/Header';
import { AboutMe } from './containers/AboutMe/AboutMe';
import { MySkills } from './containers/MySkills/MySkills';
import { Experience } from './containers/Experience/Experience';
import { MyPortfolio } from './containers/MyPortfolio/MyPortfolio';
import { GetInTouch } from './containers/GetInTouch/GetInTouch';
import { Navigation } from './containers/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatApp } from './containers/ChatApp/ChatApp';
import { BlogApp } from './containers/BlogApp/BlogApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/CV' element={
                  <>
                    <Navigation/>
                    <Header/>
                    <AboutMe/>
                    <MySkills/>
                    <Experience/>
                    <MyPortfolio/>
                    <GetInTouch/>
                  </>
                }/>
                <Route path='myPortfolio' element={<ChatApp />} />
                <Route path='blogApp' element={<BlogApp />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
