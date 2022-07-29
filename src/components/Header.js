import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHome } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: ${(props) => props.path == "/blog" ? "absolute" : null};
    width: 100%;
`
const Header = (props) => {
  return (
    <Wrapper path={window.location.pathname}>
        <FontAwesomeIcon icon={faBars} size="lg"/>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </Link>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
    </Wrapper>
  );
};

export default Header;