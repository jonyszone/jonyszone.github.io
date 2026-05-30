import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <p className="section-label">Proficiency</p>
          <h1 className="skills-heading">Technical Skills</h1>
          {techStack.experience.map((exp, i) => (
            <div key={i} className="skill">
              <p>
                <span>{exp.Stack}</span>
                <span className="skill-percentage">{exp.progressPercentage}</span>
              </p>
              <div className="meter">
                <span style={{width: exp.progressPercentage}} />
              </div>
            </div>
          ))}
        </div>
        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    </Fade>
  );
}
