import React from "react";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="AboutMe" id="block2">
      <div className="AboutMe_title_block">
        <h2 className="AboutMe_title">
          Обо <span>Мне</span>
        </h2>
      </div>
      <div className="info_block">
        <div className="info_content">
          <div className="title">
            <h3>Персональная информация</h3>
          </div>
          <div className="info">
            <div className="info_text">
              <p>
                <span>ФИО:</span> Кайратулы Нурасыл
              </p>
              <p>
                <span>Возраст:</span> 24 года
              </p>
              <p>
                <span>Номер тел:</span> +7 707 356 7788
              </p>
              <p>
                <span>Почта:</span> k.nurasyl7788@gmail.com
              </p>
              <p>
                <span>Telegram:</span> @Nurasyl_kayratuly
              </p>
            </div>
            <div className="info_text">
              <p>
                <span>Место проживания:</span> Казахстан, г.Алматы
              </p>
              <p>
                <span>Граждантсво:</span> Казахстан
              </p>
              <p>
                <span>Семейное положение:</span> Не женат
              </p>
              <p>
                <span>Языки:</span> Казахский, Русский, Английский
              </p>
            </div>
          </div>
        </div>
        <div className="statistics">
          <div className="stat_block">
            <span className="stat_num">2</span>
            <span className="stat_text">года опыта работы в IT</span>
          </div>
          <div className="stat_block">
            <span className="stat_num sec">35</span>
            <span className="stat_text">проектов</span>
          </div>
        </div>
      </div>
    </div>
  );
};
