// Home.js

import React, { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BlogOverview from "../components/BlogOverview";
import ProjectOverview from "../components/ProjectOverview";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useSpring, animated} from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";


// styles
const ScrollDownButton = styled.a`
  margin-top: .5rem;
  font-size: 2em;
  position: absolute;
  bottom: 1em;
  &:hover{
    cursor: pointer;
  }
`   

const ScrollUpArrow = styled.span`
    font-size: 2em;
    position: fixed;
    top: .2em;
    left: .5em;
    z-index: 10;

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
`
const HomeScreen = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const HomeContent = styled.div`
  & > *{
    margin: 3em 0;
  }
`

const Home = React.forwardRef(({setNavMenuFocus, scrollTo, setAbsoluteHeader, getLatestBlogs}, ref) => {
  const {projectRef, scrollDownButtonRef} = ref;
  // track the scroll y position of page, relative to projectRef
  const [scrollYProject, setscrollYProject] = useState(0);
  const [scrollUpArrow, setScrollUpArrow] = useState(false);
  useEffect(() => {
    function listenToScroll(){
      setscrollYProject(projectRef.current.getBoundingClientRect().y);
    }
    // set header positioning to absolute on homepage, relative on other pages.
    // also setup listener track scroll y position
    setAbsoluteHeader(true);
    window.addEventListener('scroll', listenToScroll)
    setscrollYProject(projectRef.current.getBoundingClientRect().y);
    return function cleanup(){
      setAbsoluteHeader(false);
      window.removeEventListener('scroll', listenToScroll)
    }
  });

  // show scroll up arrow when document y pos is below projects
  // also hide nav menu if its open
  useEffect(() => {
    if(scrollYProject < 0){
      setScrollUpArrow(true);
      setNavMenuFocus(false);
    } 
    else{
      setScrollUpArrow(false);
    }
  }, [scrollYProject]);

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
        <ScrollDownButton ref={scrollDownButtonRef} onClick={() => {scrollTo(projectRef); }}>
            <FontAwesomeIcon icon={faCircleArrowDown}/>
        </ScrollDownButton>
      </HomeScreen>
      {/* content below home screen. Projects and blog overviews. */}
      {scrollUpArrow && 
      <ScrollUpArrow onClick={() => {scrollTo("top");}}>
            <FontAwesomeIcon icon={faCircleArrowUp}/>
      </ScrollUpArrow>
      }
      <HomeContent>
        <ProjectOverview ref={projectRef}/>
        <BlogOverview getLatestBlogs={getLatestBlogs}/>
      </HomeContent>
    </HomeWrapper>
  );
});

export default Home;