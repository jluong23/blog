import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHome, faMoon } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: ${(props) => props.absolutePosition ? "absolute" : "relative"};
    width: 100%;
    min-width: 300px; //matches the body min width in styling.css
    `
const HamburgerIcon = styled.span`
  &:hover{
    cursor: pointer;
  }
`

const DarkModeIcon = styled.span`
  &:hover{
    cursor: pointer;
  }
`
const Header = ({absoluteHeader, setNavMenuFocus, toggleTheme}) => {

  return (
    <Wrapper absolutePosition={absoluteHeader}>
        <HamburgerIcon onClick={() => {setNavMenuFocus(true)}}>
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </HamburgerIcon>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </Link>
        <DarkModeIcon>
          <FontAwesomeIcon icon={faMoon} onClick={() => {toggleTheme()}} size="lg"/>

        </DarkModeIcon>
    </Wrapper>
  );
};

export default Header;