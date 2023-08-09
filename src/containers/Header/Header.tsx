import React from "react";
import headerImg from '../../assets/Images/header_img.jpg';
import './Header.css';


export const Header = () => {
    return (
        <div className="Header" id="block1">
            <div className="img_block">
                <img src={headerImg} alt="Аватарка" />
            </div>
            <div className="title_block">
                <div className="title">
                    <h1>
                        Я Кайратулы Нурасыл. <br /> <span>FullStack разработчик</span>
                    </h1>
                </div>
                <div className="text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut velit dicta recusandae, illum fugit cumque aliquam inventore rem reprehenderit!
                    </p>
                    <button>
                        Больше обо мне
                    </button>
                </div>
            </div>
        </div>
    );
};