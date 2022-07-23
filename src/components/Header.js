import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
`
const Header = (props) => {
  return (
    <Wrapper>
        <p>Hamburger</p>
        <p>Search</p>
    </Wrapper>
  );
};

export default Header;