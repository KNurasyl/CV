import React from "react";
import { Card } from "../Card/Card";
import './Window.css';

export interface IMessage {
    id: number;
    author: string;
    message: string;
};

interface WindowProps {
    messages?: IMessage[];
};

export const Window: React.FC<WindowProps> = ({ messages }) => {
    return (
        <div className="window">
            {
                messages?.map(message => {
                    return (
                        <Card 
                            key={message.id}
                            author={message.author}
                            message={message.message}
                        />
                    )
                })
            }
        </div>
    );
};