import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import Article from "./Article";
import projectData from "../projects/projectData.json"
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  background-color: ${({ bgColor }) => `${bgColor}`};
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

const ProjectOverview = React.forwardRef(({title, projectIds, showDates}, ref) => {
  const theme = useTheme();
  const HOME_TITLE = <div>
    <h1>Recent Projects.</h1>
    <h2>
      <Link to="/projects">(See All)</Link>
    </h2>
  </div>
  // projectIds: only show these projects. If empty, map over all projects (projectData)
  let projectsToShow = projectIds ?  projectData.filter((project) => projectIds.includes(project.id)) : projectData
  return (
    <Wrapper ref={ref} id="projects" bgColor={theme.overviewColor}>
      {title ? <h1>{title}</h1> : HOME_TITLE}
      <hr/>
      <Projects>
        {projectsToShow.map((project) => {
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