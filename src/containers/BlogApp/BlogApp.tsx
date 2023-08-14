import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './container/MainPage';
import { AddPost } from './container/AddPost';
import { ReadFullPost } from './container/ReadFullPost';
import './BlogApp.css';

export const BlogApp = () => {
  return (
    <div className="BlogApp">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='/add-post' element={<AddPost/>}/>
                <Route path='/full-post/:id' element={<ReadFullPost/>}/>
            </Route>
        </Routes>
    </div>
  );
}
