import React, { useState } from "react";
import { Form } from "./Form/Form";
import { Window, IMessage } from "./Window/Window";
import Spinner from './UI/Spinner/Spinner';
import { Modal } from './UI/Modal/Modal';
import './ChatApp.css';


export const ChatApp = () => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [state, setState] = useState({
        author: '',
        message: ''
    });

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(state.message === '') {
            setModalState(true);
        } else {
            const newMessage: IMessage = {
                id: messages.length + 1,
                author: state.author === '' ? 'anonymous' : state.author,
                message: state.message
            };
        
            setIsLoading(true);
        
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    setMessages(prevMessages => [...prevMessages, newMessage]);
                    resolve();
                }, 1000);
            });
        
            setIsLoading(false);
        
            setState({
                author: '',
                message: ''
            });
        };
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    return (
        <div className="ChatApp" style={isLoading ? { height: '100vh' } : undefined}>
            <Modal show={modalState} closed={() => setModalState(false)}>
                <h1>Напишите сообщение</h1>
            </Modal>
            { 
                isLoading ? 
                <Spinner/> 
                :  
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
            }
        </div>
    );
};