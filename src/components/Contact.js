import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    & > svg{
      font-size: 4em;
      padding: 0 .2em;
    }
`
const Contact = (props) => {
  return (
    <Wrapper>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faYoutube}/>
    </Wrapper>
  );
};

export default Contact;