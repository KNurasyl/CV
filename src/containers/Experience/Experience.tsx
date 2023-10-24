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
                            Full-stack developer <span>- ТОО "T.A.Dara"</span>
                        </h2>
                        <p>Разработка CRM (Customer Relationship Management) системы для торговых операций - это комплексный процесс, направленный на создание специализированной платформы, которая помогает организациям эффективно управлять и оптимизировать взаимодействие с клиентами, а также автоматизировать и улучшать процессы, связанные с продажами и обслуживанием клиентов.</p>
                    </div>
                    <div className="Experience_info_item">
                        <h4>
                            2022 - по настоящий день
                        </h4>
                        <h2>
                            Преподаватель по веб-разработке <span>- Attractor School</span>
                        </h2>
                        <p>Обучение студентов веб разработке.</p>
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
                        <p>Преподавание узко-специализированных предметов по менеджменту в ресторанном бизнесе.</p>
                    </div>
                    <div className="Experience_info_item">
                        <h4>
                            2019 - 2021
                        </h4>
                        <h2>
                            Бармен/Сомелье <span>- Ritz-Carlton</span>
                        </h2>
                        <p>Обладаю глубокими знаниями в области вин и коктейлей, а также навыками обслуживания клиентов высокого уровня. Осуществлял подбор вин для соответствия меню и оказывал выдающийся сервис в области коктейльного и винного обслуживания.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};