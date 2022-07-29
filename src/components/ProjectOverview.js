import React from "react";
import styled from "styled-components";
import Article from "./Article";
import projectData from "../projects/projectData.json"
const ProjectOverview = (props) => {
  return (
    <div>
      <h1>Projects.</h1>
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
    </div>
  );
};

export default ProjectOverview;