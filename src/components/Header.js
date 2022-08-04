import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHome } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: ${(props) => props.absolutePosition ? "absolute" : "inline-block"};
    width: 100%;
    min-width: 300px; //matches the body min width in styling.css
`
const Header = (props) => {
  return (
    <Wrapper absolutePosition={props.absoluteHeader}>
        <FontAwesomeIcon icon={faBars} size="lg" />
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </Link>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
    </Wrapper>
  );
};

export default Header;