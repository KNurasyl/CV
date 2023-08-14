import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './container/MainPage';
import { AddPost } from './container/AddPost';
import { ReadFullPost } from './container/ReadFullPost';
import './BlogApp.css';

export const BlogApp = () => {
  return (
    <div className="BlogApp">
        <BrowserRouter>
            <Routes>
                <Route path='/BlogApp' element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='/add-post' element={<AddPost/>}/>
                    <Route path='/full-post/:id' element={<ReadFullPost/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
