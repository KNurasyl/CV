import React from "react";
import './Backdrop.css';


export const Backdrop = ({show, closed}: {show: boolean, closed?: () => void | undefined;}) => (
    show ? <div onClick={closed} className="Backdrop"/> : null
);
