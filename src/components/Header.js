import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHome } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: ${(props) => props.absolutePosition ? "absolute" : "fixed"};
    width: 100%;
    min-width: 300px; //matches the body min width in styling.css
    `
const HamburgerIcon = styled.span`
  &:hover{
    cursor: pointer;
  }
`
const Header = ({absoluteHeader, setNavMenuFocus}) => {

  return (
    <Wrapper absolutePosition={absoluteHeader}>
        <HamburgerIcon onClick={() => {setNavMenuFocus(true)}}>
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </HamburgerIcon>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </Link>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
    </Wrapper>
  );
};

export default Header;