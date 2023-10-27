import React from "react";
import { Progress } from "antd";
import "./MySkills.css";

export const MySkills = () => {
  const customFormat = (percent: number | undefined) => {
    return <span style={{ color: "whitesmoke" }}>{percent}%</span>;
  };

  return (
    <div className="MySkills" id="block3">
      <div className="MySkills_title">
        <h3>МОИ НАВЫКИ</h3>
      </div>
      <div className="skill_block">
        <div className="skill">
          <Progress
            type="circle"
            percent={95}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>React</p>
        </div>
        <div className="skill">
          <Progress
            type="circle"
            percent={90}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>Node js</p>
        </div>
        <div className="skill">
          <Progress
            type="circle"
            percent={90}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>UI</p>
        </div>
        <div className="skill">
          <Progress
            type="circle"
            percent={95}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>SQL/NoSQL</p>
        </div>
      </div>
      <div className="skill_block">
        <div className="skill">
          <Progress
            type="circle"
            percent={90}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>TypeScript</p>
        </div>
        <div className="skill">
          <Progress
            type="circle"
            percent={95}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>Redux</p>
        </div>
        <div className="skill">
          <Progress
            type="circle"
            percent={87}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>GIT</p>
        </div>
        <div className="skill">
          <Progress
            type="circle"
            percent={95}
            strokeColor="#efad02"
            format={customFormat}
          />
          <p>Social</p>
        </div>
      </div>
    </div>
  );
};
