import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: .3em;
    font-size: 1.7em;
    @media screen and (min-width: 500px) {
      font-size: 2em;
    }
`

const IconLink = styled.a`
    color: inherit;
    margin: 0 .2em;
    background-color: transparent;
`

const Icon = ({url, icon, color}) => {
    return (
        <IconLink href={url} color={color}>
            <FontAwesomeIcon icon={icon}/>
        </IconLink>
    );
};

const SocialMediaIcons = () => {
  return (
    <Icons>
      <Icon icon={faInstagram} url="https://www.instagram.com/jamesluong1/"/>
      <Icon icon={faEnvelope} url="mailto:jamesluong@hotmail.co.uk"/>
      <Icon icon={faGithub} url="https://github.com/jluong23"/>
      <Icon icon={faYoutube} url="https://www.youtube.com/user/darkdragon1623"/>
      <Icon icon={faLinkedin} url="https://www.linkedin.com/in/jamesluong23/"/>
    </Icons>
  );
};

export default SocialMediaIcons;