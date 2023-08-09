import React from "react";
import './Experience.css';


export const Experience = () => {
    return (
        <div className="Experience" id="block4">
            <div className="Experience_title">
                <h3>Опыт работы</h3>
            </div>
            <div className="Experience_info_block">
                <div className="Experience_info">
                    <div className="Experience_info_item">
                        <h4>
                            2023 - по настоящий день
                        </h4>
                        <h2>
                            Full-stack developer <span>- FHS</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, reprehenderit fuga eum sed dolorum.</p>
                    </div>
                    <div className="Experience_info_item">
                        <h4>
                            2022 - по настоящий день
                        </h4>
                        <h2>
                            Ментор по Веб разработке <span>- Attractor School</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, reprehenderit fuga eum sed dolorum.</p>
                    </div>
                </div>
                <div className="Experience_info">
                    <div className="Experience_info_item">
                        <h4>
                            2021 - 2022
                        </h4>
                        <h2>
                            Преподователь по ресторанному делу <span>- КИТИГ</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, reprehenderit fuga eum sed dolorum.</p>
                    </div>
                    <div className="Experience_info_item">
                        <h4>
                            2019 - 2021
                        </h4>
                        <h2>
                            Финансовый агент <span>- Eurasian Bank</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt, reprehenderit fuga eum sed dolorum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};