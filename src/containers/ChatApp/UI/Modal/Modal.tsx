import React, { ReactNode } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import './Modal.css';


export const Modal = ({show, closed, children}: {show: boolean, closed: () => void, children: ReactNode}) => {
    return (
        <>
            <Backdrop closed={closed} show={show}/>
            <div
                className="Modal"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}
            >
                {children}
            </div>
        </>
    );
};