import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import Article from "./Article";
import projectData from "../projects/projectData.json"
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  background-color: ${({ bgColor }) => `${bgColor}`};
  padding: 1em;
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

const ProjectOverview = React.forwardRef(({title, projectIds, showProjectYears}, ref) => {
  const theme = useTheme();
  const HOME_TITLE = <div>
    <h1>Recent Projects.</h1>
    <h2>
      <Link to="/projects">(See All)</Link>
    </h2>
  </div>

  let projectsToShow = [];
  if(projectIds){
    // projectIds: only show these projects in the given order.
    projectIds.map((projectId) => {
      projectsToShow.push(
        projectData.find((project) => {
          return project.id === projectId;
        })
      )
    })
  }else{
    // show all projects, sort most recent projects at start of array
    projectsToShow = projectData;
    projectsToShow.sort(function(a,b){
      return b.projectStartYear - a.projectStartYear;
    });
  }

  return (
    <Wrapper ref={ref} id="projects" bgColor={theme.overviewColor}>
      {title ? <h1>{title}</h1> : HOME_TITLE}
      <hr/>
      <Projects>
        {projectsToShow.map((project, index) => {
          let thumbnail = require("../projects/thumbnails/" + project["thumbnail"]);
          let previousProject = projectsToShow[index-1];
          let articleElem = (
           <Article 
              variant="project"
              key={project["id"]}
              title={project["title"]} 
              description={project["description"]}
              thumbnail={thumbnail}
              projectUrls={project["projectUrls"]}
              projectLanguages={project.projectLanguages}
            />
          )            
          if(showProjectYears && (index == 0 || previousProject.projectStartYear != project.projectStartYear) ){
            {/* now on a new year of projects (or on the first project). display a new year header before article*/}
            return (
              <React.Fragment key={project.id}>
                <h1>{project.projectStartYear}</h1>
                {articleElem}
              </React.Fragment>
            )
          }else{
            return articleElem
          }
      })}        
      </Projects>
    </Wrapper>
  );
});

export default ProjectOverview;