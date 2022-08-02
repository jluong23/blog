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
          let thumbnail = require("../projects/thumbnails/" + project["thumbnail"]);
          return (
            <Article 
              variant="project"
              key={project["id"]}
              title={project["title"]} 
              description={project["description"]}
              thumbnail={thumbnail}
              onClickUrl={project["onClickUrl"]}
            />
          )
      })}        
      </Projects>
    </Wrapper>
  );
};

export default ProjectOverview;