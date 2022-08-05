// Home.js

import React, { useEffect } from "react";
import styled from "styled-components";
import BlogOverview from "../components/BlogOverview";
import ProjectOverview from "../components/ProjectOverview";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useSpring, animated} from "react-spring";


const Title = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em 0;
    font-size: 1.3em;
  `
const HomeWrapper = styled.div`
  height: 100%;
  
  & h1 {
    font-size: 2.8em;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const HomeScreen = ({getLatestBlogs}) => {
  const fadeInAnimation = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 2000
    }
  });
  return (
    <Wrapper as={animated.div} style={fadeInAnimation}>
      <Title> 
          <h1>
            Hello, <br /> I'm James.
          </h1>
      </Title>
      <SocialMediaIcons getLatestBlogs={getLatestBlogs}  />
    </Wrapper>
  ) 
} 


const Home = ({setAbsoluteHeader, getLatestBlogs}) => {
  useEffect(() => {
    setAbsoluteHeader(true);
    return function cleanup(){
      setAbsoluteHeader(false);
    }
  });
  return (
    <HomeWrapper>
      <HomeScreen getLatestBlogs={getLatestBlogs}/>
      <ProjectOverview />
      <BlogOverview getLatestBlogs={getLatestBlogs}/>
    </HomeWrapper>
  );
};

export default Home;