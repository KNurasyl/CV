import React from "react";
import { Carousel } from "antd";
import './MyPortfolio.css';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'none',
};

export const MyPortfolio = () => {
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
                <Carousel afterChange={onChange} autoplay={true}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};