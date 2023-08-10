import React from "react";
import headerImg from "../../assets/Images/header_img.jpg";
import "./Header.css";

export const Header = () => {
    return (
        <div className="Header" id="block1">
            <div className="img_block">
                <img src={headerImg} alt="Аватарка" />
            </div>
            <div className="title_block">
                <div className="title">
                    <h1>
                        Я Кайратулы Нурасыл. <br />{" "}
                        <span>FullStack разработчик</span>
                    </h1>
                </div>
                <div className="text">
                    <p>
                        Привет! Я Кайратулы Нурасыл, FullStack разработчик.
                        Владею JavaScript, TypeScript, React, Node.js, Redux.
                        Создаю инновационные веб-приложения, объединяя дизайн и
                        функциональность. Готов к новым вызовам и коллаборации.
                        Познакомьтесь с моими работами на сайте. Рад обратной
                        связи!
                    </p>
                </div>
            </div>
        </div>
    );
};
