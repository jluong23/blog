// Home.js

import React from "react";
import styled from "styled-components";
import BlogOverview from "../components/BlogOverview";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import University from "../components/University";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
  font-size: 1.2em;
`
const HomeWrapper = styled.div`
  font-size: 3rem;
  & h1 {
    font-size: 1em;
  }
`

const title = (
  <TitleWrapper>
    <h1>
      Hello, <br /> I'm James.
    </h1>
  </TitleWrapper>
)
const Home = (props) => {
  return (
    <HomeWrapper>
      {title}
      <Contact />
      <BlogOverview />
      <Projects />
      <University />
    </HomeWrapper>
  );
};

export default Home;