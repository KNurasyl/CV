import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Comment.css'

interface CommentProps {
    author: string;
    comment: string;
    onClick: () => void;
};

export const Comment: React.FC<CommentProps> = ({ author, comment, onClick }) => {
    return (
        <div className="comment">
            <div className="comment-txt">
                <span><span className="author_txt">{author}:</span> {comment}</span>
            </div>
            <button onClick={onClick}>
                <FontAwesomeIcon icon={faTrash} color='#DC143C' size="2x" />
            </button>
        </div>
    );
};