import React, { ChangeEventHandler, FormEventHandler } from "react";
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface FormProps {
    onSubmit: FormEventHandler<HTMLFormElement>;
    author: string;
    authorChange: ChangeEventHandler<HTMLInputElement>;
    message: string;
    messageChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const Form: React.FC<FormProps> = ({
    onSubmit,
    author,
    authorChange,
    message,
    messageChange
}) => {
    let isMessage = false;
    if (message !== '') isMessage = true;

    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                type="text"
                name="author"
                placeholder="Anonymous"
                value={author}
                onChange={authorChange}
            />
            <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={messageChange}
            />
            <div className="btn_block">
                <button className="btn_add" type="submit">
                    <FontAwesomeIcon icon={faEnvelope} color={isMessage ? 'white' : 'black'} size="5x" />
                </button>
            </div>
        </form>
    );
};
