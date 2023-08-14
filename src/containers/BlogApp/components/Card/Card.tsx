import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookJournalWhills, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Card.css';


interface CardProps {
    img?: string;
    title: string;
    date: string;
    readPostClick: () => void;
    removeClick: () => void;
}

export const Card: React.FC<CardProps> = ({ img, title, date, readPostClick, removeClick }) => {
    return (
        <div className="card_blogApp">
            {
                img
                ?
                <div className="card_blogApp_img_block">
                    <img src={img} alt="some-pic" />
                </div>
                :
                null
            }
            <div className={img ? "content_block" : "content_block-without-img"}>
                <div className="text_block">
                    <h4>{title}</h4>
                </div>
                <div className="date_block">
                    <p className="date_txt">{date}</p>
                    <div className="card_blogApp_pagination">
                        <button className="read_post" onClick={readPostClick}>
                            <FontAwesomeIcon icon={faBookJournalWhills} className={'fa-bounce'} color='#00CED1' size="3x" />
                            <p>Read full post</p>
                        </button>
                        <button onClick={removeClick}>
                            <FontAwesomeIcon icon={faTrash} color='#DC143C' size="3x" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};