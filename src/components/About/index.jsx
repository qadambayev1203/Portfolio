import React from "react";
import Title from "../Title";
import { useLangContext } from "../../context/LangContext";
import { Content } from "./style";
import { useColorContext } from "../../context/ColorContext";
import { UseModeContext } from "../../context/ModeContenxt";
import { useNavigate } from "react-router-dom";
import cv from "../../assets/Resume.pdf"

import { useAboutContext } from "../../context/AboutContext";
const About = () => {
  const [a, b, c, main] = useLangContext();
  const [color] = useColorContext();
  const [mode] = UseModeContext();
  const [aboutData] = useAboutContext();
  const navigate = useNavigate();
  const handleClick = () => {
    const cvFile = cv;
    const downloadLink = document.createElement("a");
    downloadLink.href = cvFile;
    downloadLink.download = "Qadambayev Mo'minjon CV.pdf";
    downloadLink.click();
  };
  return (
    <div className="container" data-aos="fade-left">
      <div className="wrapper">
        <Content color={color} mode={mode}>
          <Title>{aboutData?.title}</Title>
          <div className="name">
            {main?.name} <span>{main?.job}</span>
          </div>
          <div className="desc">{aboutData?.desc}</div>
          <div className="grid">
            {aboutData?.data.map(({ id, left, right }) => (
              <div className="grid__item" key={id}>
                <div className="grid__item__left">{left}:</div>
                <div className="grid__item__right">{right}</div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={handleClick}>{aboutData?.btn1}</button>
            <button onClick={() => navigate("/contact")}>
              {aboutData?.btn2}
            </button>
          </div>
          <div className="techs">
            <div className="techs__item">
              <div className="techs__item__title">
                <div>HTML</div>
                <div>95%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech html"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>CSS</div>
                <div>85%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech css"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>JavaScript</div>
                <div>85%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech js"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>React</div>
                <div>60%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech react"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>C#</div>
                <div>95%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech ts"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>.NET Backend</div>
                <div>80%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech lib"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>PostgreSQL</div>
                <div>80%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech lib"></div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default About;
