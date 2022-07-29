import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHome } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: ${(props) => props.path == "/" ? "absolute" : null};
    width: 100%;
`
const Header = (props) => {
  return (
    <Wrapper path={window.location.pathname}>
        <FontAwesomeIcon icon={faBars} size="lg"/>
        <a href="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </a>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
    </Wrapper>
  );
};

export default Header;