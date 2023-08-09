import React from "react";
import { Progress } from 'antd';
import './MySkills.css';


export const MySkills = () => {
    const customFormat = (percent: number | undefined) => {
        return <span style={{ color: 'whitesmoke' }}>{percent}%</span>;
    };

    return (
        <div className="MySkills" id="block3">
            <div className="MySkills_title">
                <h3>MY SKILLS</h3>
            </div>
            <div className="skill_block">
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
            </div>
            <div className="skill_block">
            <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
               <div className="skill">
                    <Progress type="circle" percent={95} strokeColor="#efad02" format={customFormat}/>
                    <p>SKILL</p>
               </div>
            </div>
        </div>
    );
};