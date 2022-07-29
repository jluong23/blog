import React from "react";
import styled from "styled-components";
import Article from "./Article";
import articleImage from "../assets/john.jpg";

const Projects = (props) => {
  return (
    <div>
      <h1>Projects.</h1>
      <Article 
        color="violet" 
        title="John Mayer Fan Site" 
        description="A fake shopping cart page which interacts with the Spotify API, built using React." 
        imgSrc={articleImage}
        onClickUrl="https://jluong23.github.io/shopping-cart-project/"

        />
    </div>
  );
};

export default Projects;