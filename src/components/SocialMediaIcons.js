import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: .3em;

  & p {
    text-align: center;
  }
  & button {
    margin: .5em 0;
  }
`

const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.5em;
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

const SocialMediaIcons = ({getLatestBlogs}) => {
  let latestBlogUrl = "/posts/" + getLatestBlogs(1)[0].id;

  return (
    <Wrapper>
      <p>Computer Science BSc Graduate from the University of Sheffield.</p>
      <Icons>
        <Icon icon={faInstagram} url="https://www.instagram.com/jamesluong1/"/>
        <Icon icon={faEnvelope} url="mailto:jamesluong@hotmail.co.uk"/>
        <Icon icon={faGithub} url="https://github.com/jluong23"/>
        <Icon icon={faYoutube} url="https://www.youtube.com/user/darkdragon1623"/>
      </Icons>
      <Link to={latestBlogUrl}>
        <button className="btn btn-primary btn-lg">Read my latest blog</button>
      </Link>
    </Wrapper>
  );
};

export default SocialMediaIcons;