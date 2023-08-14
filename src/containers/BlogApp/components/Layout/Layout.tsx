import React from "react";
import { Outlet } from 'react-router-dom';
import { HeaderBlogApp } from "../../components/HeaderBlogApp/HeaderBlogApp";


export const Layout = () => {
    return (
        <>
            <HeaderBlogApp/>
            <main className="main">
                <Outlet/>
            </main>
        </>
    );
};