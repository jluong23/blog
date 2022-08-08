// About.js

import React from "react";
import styled from "styled-components";
import displayPicture from "../assets/southwark.jpeg";
import SocialMediaIcons from "../components/SocialMediaIcons";


const Wrapper = styled.div`
  & a{
    text-decoration: none;
  }
  width: 75%;
  margin-left: auto;
  margin-right: auto; 
  max-width: 1000px;
`
const InfoWrapper = styled.div`
  background-color: darkgray;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }

`
const Info = styled.div`
  padding: 1em;
  & hr {
    height: 3px;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    width: 50%;
  }
`

const DisplayPicture = styled.div`
  & img {
    width: 75%;
    object-fit: cover;
  }
  @media screen and (min-width: 800px) {
    visibility: visible;
    width: 50%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Email = styled.a`
  color: inherit;
  display: inline-block;
  width: fit-content;
  & > * {
    
  }
`
const About = (props) => {
  return (
    <Wrapper id="about">
      <InfoWrapper>
        <Info>
          <Email href="mailto:jamesluong@hotmail.co.uk">
            <h1>jamesluong@<br/>hotmail.co.uk</h1>
          </Email>
          <hr/>
          <p>I run, climb and play chess. Ocasionally writing blogs about my experiences and working on personal projects.</p>

          <p>This site is open source! Check out the code on <a href="https://github.com/jluong23/blog">GitHub</a>.</p>
          <p>James Luong<br/>London, UK</p>
          <SocialMediaIcons/>
        </Info>
        <DisplayPicture>
          <img src={displayPicture}/>
        </DisplayPicture>
      </InfoWrapper>
    </Wrapper>
  );
}

export default About;