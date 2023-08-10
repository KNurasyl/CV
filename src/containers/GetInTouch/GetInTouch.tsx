import React, { useState } from "react";
import axios from "axios";
import { notification, Spin  } from 'antd';
import { MailOutlined, WhatsAppOutlined, SendOutlined } from '@ant-design/icons';
import './GetInTouch.css';

const telegramBotToken = '6459513099:AAHEaTK8n2Jg8a2tE91UBAS7OxoLT-an3fo';

interface Message {
    name: string;
    email: string;
    company: string;
    messageText: string;
}

const initialMessageState: Message = {
    name: '',
    email: '',
    company: '',
    messageText: ''
};

const sendTelegramMessage = (message: Message) => {
    try {
        const username = "Nurasyl_kayratuly";
        const text =  `Привет. Меня зовут ${message.name}. \n Я из компаний ${message.company}. \n Это моя почта: ${message.email} \n Сообщение: ${message.messageText}`;
        const link = `https://t.me/${username}?start=${encodeURIComponent(text)}`;
        window.open(link);

        console.log('Telegram message sent successfully.');
    } catch (error) {
        console.error('Error sending Telegram message:', error);
    }
};

export const GetInTouch = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<Message>({
        name: '',
        email: '',
        company: '',
        messageText: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMessage((prevMessage) => ({
            ...prevMessage,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (message.name && message.email && message.company && message.messageText) {
            setIsSubmitting(true);
            sendTelegramMessage(message);
            setIsSubmitting(false);
            setMessage(initialMessageState);
        } else {
            notification.warning({
                duration: 3,
                message: "Пожалуйста, заполните все поля.",
                placement: 'bottomRight'
            });
        }
    };

    return (
        <div className="GetInTouch" id="block6">
            <div className="GetInTouch_title_block">
                <h2 className="GetInTouch_title">
                    Мои <span>Контакты</span>
                </h2>
            </div>
            <div className="GetInTouch_content_block">
                <div className="GetInTouch_info">
                    <div className="GetInTouch_info_text">
                        <h3>Свяжитесь со мной</h3>
                    </div>
                    <div className="GetInTouch_info_contacts">
                        <div className="GetInTouch_info_item">
                            <MailOutlined className="custom_icon"/>
                            <div className="GetInTouch_info_item_text">
                                <p className="GetInTouch_info_item_title">
                                    Напишите мне
                                </p>
                                <p className="GetInTouch_info_text_content">
                                    k.nurasyl7788@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="GetInTouch_info_item">
                            <SendOutlined className="custom_icon"/>
                            <div className="GetInTouch_info_item_text">
                                <p className="GetInTouch_info_item_title">
                                    Напишите мне
                                </p>
                                <p className="GetInTouch_info_text_content">
                                    @Nurasyl_kayratuly
                                </p>
                            </div>
                        </div>
                        <div className="GetInTouch_info_item">
                            <WhatsAppOutlined className="custom_icon"/>
                            <div className="GetInTouch_info_item_text">
                                <p className="GetInTouch_info_item_title">
                                    Напишите мне
                                </p>
                                <p className="GetInTouch_info_text_content">
                                    +7 707 356 7788
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="GetInTouch_form" onSubmit={handleSubmit}>
                    <div className="GetInTouch_form_item">
                        <input
                            type="text"
                            placeholder="ВАШЕ ИМЯ"
                            name="name"
                            value={message.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="ВАША ПОЧТА"
                            name="email"
                            value={message.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input
                        type="text"
                        className="GetInTouch_form_input"
                        placeholder="ВАША КОМПАНИЯ"
                        name="company"
                        value={message.company}
                        onChange={handleInputChange}
                    />
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="ВАШЕ СООБЩЕНИЕ"
                        name="messageText"
                        value={message.messageText}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Spin /> : 'Отправить'}
                    </button>
                </form>
            </div>
        </div>
    );
};