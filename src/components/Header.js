import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
`
const Header = (props) => {
  return (
    <Wrapper>
        <FontAwesomeIcon icon={faBars} size="lg"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
    </Wrapper>
  );
};

export default Header;