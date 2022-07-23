// Home.js

import React from "react";
import styled from "styled-components";
import Contact from "../components/Contact";

const Title = styled.h1`
  font-size: 3em;
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
`
const Header = styled.div`
`
const Home = (props) => {
  return (
    <div className="home">
      <TitleWrapper>
        <Title>
          Hello, <br /> I'm James.
        </Title>
      </TitleWrapper>
      <Contact />
    </div>
  );
};

export default Home;