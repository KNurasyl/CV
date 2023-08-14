import React, { ReactNode, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookJournalWhills, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './PostWindow.css';

interface PostWindowProps {
    addClickHandler: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

export const PostWindow: React.FC<PostWindowProps> = ({ addClickHandler, children }) => {
    return (
        <div className="postWindow">
            <div className="add_btn_block">
                <FontAwesomeIcon icon={faBookJournalWhills} color='white' size="3x" />
                <button className="add_btn" onClick={addClickHandler}>
                    <FontAwesomeIcon icon={faSquarePlus} className={'fa-solid fa-circle-plus fa-beat'} color='white' size="3x" />
                </button>
            </div>
            <div className="posts_block">
                {children}
            </div>
        </div>
    );
};
