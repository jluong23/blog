import React from "react";
import styled from "styled-components";
import Article from "./Article";
import articleImage from "../assets/john.jpg";

const Wrapper = styled.div`
  padding: .5em;
`

const Projects = (props) => {
  return (
    <Wrapper>
      <h1>Projects.</h1>
      <Article color="violet" title="Project 1" description = "Project 1: John Mayer Fan Site" imgSrc={articleImage}/>
    </Wrapper>
  );
};

export default Projects;