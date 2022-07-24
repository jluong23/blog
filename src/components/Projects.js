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
      <Article color="violet" title="John Mayer Fan Site" description = "A fake shopping cart page which interacts with the Spotify API, built using React." imgSrc={articleImage}/>
    </Wrapper>
  );
};

export default Projects;