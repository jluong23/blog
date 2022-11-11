import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import Article from "./Article";
import projectData from "../projects/projectData.json"
import { Link } from "react-router-dom";
import moment from "moment";
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

const ProjectOverview = React.forwardRef(({ title, numProjects, showProjectYears }, ref) => {
  const theme = useTheme();
  const HOME_TITLE = <div>
    <h1>Recent Projects.</h1>
    <h2>
      <Link to="/projects">(See All)</Link>
    </h2>
  </div>

  let orderedProjects = projectData.slice();
  // show all projects, sort most recent projects at start of array
  orderedProjects.sort(function (a, b) {
    return moment(b.date) - moment(a.date);
  })
  if (numProjects) {
    // take the n most recent projects
    orderedProjects = orderedProjects.slice(0, numProjects);
  }

  console.log(orderedProjects);
  return (
    <Wrapper ref={ref} id="projects" bgColor={theme.overviewColor}>
      {title ? <h1>{title}</h1> : HOME_TITLE}
      <hr />
      <Projects>
        {orderedProjects.map((project, index) => {
          let thumbnail = require("../projects/thumbnails/" + project["thumbnail"]);
          let previousProject = orderedProjects[index - 1];
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
          const previousProjectYear = index > 0 ? moment(previousProject.date).year() : 0;
          const projectYear = moment(project.date).year();
          if (showProjectYears && previousProjectYear != projectYear) {
            {/* now on a new year of projects (or on the first project). display a new year header before article*/ }
            return (
              <React.Fragment key={project.id}>
                <h1>{projectYear}</h1>
                {articleElem}
              </React.Fragment>
            )
          } else {
            return articleElem
          }
        })}
      </Projects>
    </Wrapper>
  );
});

export default ProjectOverview;