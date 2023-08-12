import React, { useState } from "react";
import { Form } from "../Form/Form";
import { Window, IMessage } from "../Window/Window";
import './Container.css';


export const Container = () => {
    const [messages, setMessages] = useState<IMessage[]>();
    const [state, setState] = useState({
        author: '',
        message: ''
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };


    return (
        <div className="conatiner">
            <Window messages={messages}/>
            <Form
                onSubmit={submitHandler}
                authorChange={inputChangeHandler}
                messageChange={inputChangeHandler}
                author={state.author}
                message={state.message}
            />
        </div>
    );
};