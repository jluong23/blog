import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SocialMediaIcon from "./SocialMediaIcon";

const Wrapper = styled.div`
  padding: .3em;
`

const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.5em;
`

const About = (props) => {
  return (
    <Wrapper>
      <h1>Me.</h1>
      <p>Computer Science BSc at the University of Sheffield.</p>
      <Icons>
        <SocialMediaIcon icon={faInstagram} url="https://www.instagram.com/jamesluong1/"/>
        <SocialMediaIcon icon={faEnvelope} url="mailto:jamesluong@hotmail.co.uk"/>
        <SocialMediaIcon icon={faGithub} url="https://github.com/jluong23"/>
        <SocialMediaIcon icon={faYoutube} url="https://www.youtube.com/user/darkdragon1623"/>
      </Icons>
    </Wrapper>
  );
};

export default About;