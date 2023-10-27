import React, { useState } from "react";
import { Spin } from "antd";
import {
  MailOutlined,
  WhatsAppOutlined,
  SendOutlined,
} from "@ant-design/icons";
import "./GetInTouch.css";

const sendTelegramMessage = () => {
  try {
    const username = "Nurasyl_kayratuly";
    const link = `https://t.me/${username}?start=Привет.`;
    window.open(link);

    console.log("Telegram message sent successfully.");
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
};

export const GetInTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    sendTelegramMessage();
    setIsSubmitting(false);
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
              <MailOutlined className="custom_icon" />
              <div className="GetInTouch_info_item_text">
                <p className="GetInTouch_info_item_title">Напишите мне</p>
                <p className="GetInTouch_info_text_content">
                  k.nurasyl7788@gmail.com
                </p>
              </div>
            </div>
            <div className="GetInTouch_info_item">
              <SendOutlined className="custom_icon" />
              <div className="GetInTouch_info_item_text">
                <p className="GetInTouch_info_item_title">Напишите мне</p>
                <p className="GetInTouch_info_text_content">
                  @Nurasyl_kayratuly
                </p>
              </div>
            </div>
            <div className="GetInTouch_info_item">
              <WhatsAppOutlined className="custom_icon" />
              <div className="GetInTouch_info_item_text">
                <p className="GetInTouch_info_item_title">Напишите мне</p>
                <p className="GetInTouch_info_text_content">+7 707 356 7788</p>
              </div>
            </div>
          </div>
        </div>
        <form className="GetInTouch_form" onSubmit={handleSubmit}>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spin /> : "Написать..."}
          </button>
        </form>
      </div>
    </div>
  );
};
