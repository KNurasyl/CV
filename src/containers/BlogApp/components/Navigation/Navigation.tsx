import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';


export const Navigation = ({to, end, children}: {to: string, end?: boolean | undefined, children: ReactNode}) => {
    return (
        <span className="NavLink">
            <NavLink to={to} end={end}>{children}</NavLink>
        </span>
    );
};