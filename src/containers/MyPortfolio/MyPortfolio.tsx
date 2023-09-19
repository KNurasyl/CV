import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import firstElement from '../../assets/Images/carousel_first_element.png';
import './MyPortfolio.css';

export const MyPortfolio = () => {
    const navigate = useNavigate();

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div className="MyPortfolio" id="block5">
            <div className="MyPortfolio_title_block">
                <h2 className="MyPortfolio_title">
                    Моё <span>Портфолио</span>
                </h2>
            </div>
            <div className="MyPortfolio_info_block">
                <Carousel afterChange={onChange} autoplay={true} style={{ cursor: 'pointer' }}>
                    <div onClick={() => navigate({ pathname: `/myPortfolio` })}>
                        <img
                            className="Carousel_img"
                            src={firstElement}
                            alt="Портфолио изображение"
                        />
                    </div>
                    <div onClick={() => navigate({ pathname: `/myPortfolio` })}>
                        <img
                            className="Carousel_img"
                            src={firstElement}
                            alt="Портфолио изображение"
                        />
                    </div>
                    <div onClick={() => navigate({ pathname: `/myPortfolio` })}>
                        <img
                            className="Carousel_img"
                            src={firstElement}
                            alt="Портфолио изображение"
                        />
                    </div>
                    <div onClick={() => navigate({ pathname: `/myPortfolio` })}>
                        <img
                            className="Carousel_img"
                            src={firstElement}
                            alt="Портфолио изображение"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};