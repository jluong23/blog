import React from "react";
import styled from "styled-components";
import Article from "./Article";
import projectData from "../projects/projectData.json"

const Wrapper = styled.div`
  background-color: darkgray;
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectOverview = (props) => {

  return (
    <Wrapper>
      <h1>Projects.</h1>
      <Projects>
        {projectData.map((project) => {
          let imgFile = require("../assets/" + project["imgName"]);
          return (
            <Article 
              key={project["id"]}
              title={project["title"]} 
              description={project["description"]}
              imgSrc={imgFile}
              onClickUrl={project["onClickUrl"]}
            />
          )
      })}        
      </Projects>
    </Wrapper>
  );
};

export default ProjectOverview;