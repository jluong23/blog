import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Article from "./Article";
import projectData from "../projects/projectData.json"
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  background-color: darkgray;
  @media screen and (min-width: 1200px) {
      width: 75%;
  }
  & a {
    text-decoration: none;
  }
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectOverview = React.forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref} id="projects">
      <h1>Projects. <Link to="/projects">(See All)</Link></h1>
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
              projectUrls={project["projectUrls"]}
            />
          )
      })}        
      </Projects>
    </Wrapper>
  );
});

export default ProjectOverview;