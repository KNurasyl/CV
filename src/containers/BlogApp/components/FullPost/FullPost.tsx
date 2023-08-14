import React, { ChangeEvent, FormEvent, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import './FullPost.css';

interface FullPostProps {
    title: string;
    date: string;
    content: string;
    submitHandler: (event: FormEvent<HTMLFormElement>) => void;
    authorValue: string;
    inputChangeHandler: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    commentValue: string;
    children: ReactNode;
};

export const FullPost: React.FC<FullPostProps> = ({ title, date, content, submitHandler, authorValue, inputChangeHandler, commentValue, children }) => {
    return (
        <div className='read-post'>
            <div className='post-content'>
                <div className='content'>
                    <h1>{title}</h1>
                    <h4>{new Date(parseInt(date)).toDateString()}</h4>
                    <p>{content}</p>
                </div>
            </div>
            <div className='comments-block'>
                <div className='comments'>
                    {children}
                </div>
                <form className='add-comment' onSubmit={submitHandler}>
                    <div className='add-comment-bg'></div>
                    <h2>Add comment</h2>
                    <input type="text" placeholder='Author' name='author' value={authorValue} onChange={inputChangeHandler} />
                    <textarea placeholder='Comment' name='comment' value={commentValue} onChange={inputChangeHandler} />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faFloppyDisk} color={'whitesmoke'} size="4x" />
                    </button>
                </form>
            </div>
        </div>
    );
};
