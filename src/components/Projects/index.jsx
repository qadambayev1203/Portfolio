import React from "react";
import Title from "../Title";
import { NavLink } from "react-router-dom";
import { Container } from "./style";
import { UseModeContext } from "../../context/ModeContenxt";
import { useColorContext } from "../../context/ColorContext";
import { useProjectContext } from "../../context/ProjectContext";
import { projects } from "../../utils/projects";

const Projects = () => {
  const [mode] = UseModeContext();
  const [color] = useColorContext();
  const value = useProjectContext();

  return (
    <div className="container">
      <div className="wrapper">
        <Container mode={mode} color={color}>
          <Title>{value?.title}</Title>
          <br />
          <br />
          <div className="grid" data-aos="fade-down">
            {projects.map(({ id, title, img, link }) => (
              <div key={id} className="grid__item">
                <img src={img} className="grid__item__img" alt="" />
                <div className="grid__item__bottom">
                  {title && (
                    <div className="grid__item__bottom__title">{title}</div>
                  )}
                  <NavLink
                    target="_blank"
                    to={link}
                    className="grid__item__bottom__link"
                  >
                    {value?.link}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
