// Home.js

import React, { createRef, useEffect, useRef } from "react";
import styled from "styled-components";
import BlogOverview from "../components/BlogOverview";
import ProjectOverview from "../components/ProjectOverview";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useSpring, animated} from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown} from "@fortawesome/free-solid-svg-icons";


// styles
const ScrollDownButton = styled.a`
  margin-top: .5rem;
  font-size: 2em;
  &:hover{
    cursor: pointer;
  }
`   

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
const HomeScreen = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`


const Home = ({scrollDown, setAbsoluteHeader, getLatestBlogs}) => {
  const projectRef = useRef();
  useEffect(() => {
    setAbsoluteHeader(true);
    return function cleanup(){
      setAbsoluteHeader(false);
    }
  });
  const fadeInAnimation = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 2000
    }
  });
  return (
    <HomeWrapper>
      <HomeScreen style={fadeInAnimation}>
        <Title> 
            <h1>
              Hello, <br /> I'm James.
            </h1>
        </Title>
        <SocialMediaIcons getLatestBlogs={getLatestBlogs}  />
        <ScrollDownButton onClick={() => {scrollDown(projectRef)}}>
            <FontAwesomeIcon icon={faCircleArrowDown}/>
        </ScrollDownButton>
      </HomeScreen>
      {/* content below home screen. Projects and blog overviews. */}
      <ProjectOverview ref={projectRef}/>
      <BlogOverview getLatestBlogs={getLatestBlogs}/>
    </HomeWrapper>
  );
};

export default Home;