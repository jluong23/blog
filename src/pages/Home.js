// Home.js

import React from "react";
import styled from "styled-components";
import BlogOverview from "../components/BlogOverview";
import Projects from "../components/Projects";
import University from "../components/University";
import About from "../components/About";
import { useSpring, animated} from "react-spring";


const Title = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em 0;
    font-size: 1.3em;
  `
const HomeWrapper = styled.div`
  & h1 {
    font-size: 2.8em;
  }
`
const Home = (props) => {
  const fadeInAnimation = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 3000
    }
  });

  return (
    <HomeWrapper>
      {/* fade in the Title and About*/}
      <animated.div style={fadeInAnimation}>
        <Title>
          <h1>
            Hello, <br /> I'm James.
          </h1>
        </Title>
        <About />
      </animated.div>
      <BlogOverview />
      <Projects />
      <University />
    </HomeWrapper>
  );
};

export default Home;