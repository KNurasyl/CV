import React from "react";
import './Card.css';


export const Card = ({author, message}: {author: string, message: string}) => {
    return (
        <div className="card">
            <div className="bg_flame"></div>
            <div className={'content_block-without-img'}>
                <h3>{author}</h3>
                <p>{message}</p>
            </div>
        </div>
    );
};