import React from "react";
import { MailOutlined } from '@ant-design/icons';
import './GetInTouch.css';


export const GetInTouch = () => {
    return (
        <div className="GetInTouch" id="block6">
            <div className="GetInTouch_title_block">
                <h2 className="GetInTouch_title">
                    Связаться <span>со мной</span>
                </h2>
            </div>
            <div className="GetInTouch_content_block">
                <div className="GetInTouch_info">
                    <div className="GetInTouch_info_text">
                        <h3>Не стесняйтесь!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa, et porro enim eligendi nobis consequatur ullam dolorum beatae? Quaerat!</p>
                    </div>
                    <div className="GetInTouch_info_contacts">
                        <div className="GetInTouch_info_item">
                            <MailOutlined className="custom_icon"/>
                            <div className="GetInTouch_info_item_text">
                                <p className="GetInTouch_info_item_title">
                                    Mail me
                                </p>
                                <p className="GetInTouch_info_text_content">
                                    example@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="GetInTouch_info_item">
                            <MailOutlined className="custom_icon"/>
                            <div className="GetInTouch_info_item_text">
                                <p className="GetInTouch_info_item_title">
                                    Mail me
                                </p>
                                <p className="GetInTouch_info_text_content">
                                    example@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="GetInTouch_info_item">
                            <MailOutlined className="custom_icon"/>
                            <div className="GetInTouch_info_item_text">
                                <p className="GetInTouch_info_item_title">
                                    Mail me
                                </p>
                                <p className="GetInTouch_info_text_content">
                                    example@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="GetInTouch_form">
                    <div className="GetInTouch_form_item">
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <input type="text" className="GetInTouch_form_input"/>
                    <textarea cols={30} rows={10}></textarea>
                    <button>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};