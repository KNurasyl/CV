import React from "react";
import { MailOutlined, WhatsAppOutlined, SendOutlined } from '@ant-design/icons';
import './GetInTouch.css';


export const GetInTouch = () => {
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
                <form className="GetInTouch_form">
                    <div className="GetInTouch_form_item">
                        <input type="text" placeholder="ВАШЕ ИМЯ"/>
                        <input type="text" placeholder="ВАША ПОЧТА"/>
                    </div>
                    <input type="text" className="GetInTouch_form_input" placeholder="ВАША КОМПАНИЯ"/>
                    <textarea cols={30} rows={10} placeholder="ВАШЕ СООБЩЕНИЕ"></textarea>
                    <button>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};