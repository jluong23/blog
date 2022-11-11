// Home.js

import React, {useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BlogOverview from "../components/BlogOverview";
import ProjectOverview from "../components/ProjectOverview";
import About from "./About";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useSpring, animated, config} from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// styles
const ScrollDownButton = styled(animated.a)`
  font-size: 2em;
  position: absolute;
  bottom: .5em;
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
  height: 100vh;
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
    margin-left: auto;
    margin-right: auto;
  }
`

const Home = React.forwardRef(({setNavMenuFocus, scrollTo, setAbsoluteHeader, getLatestBlogs}, ref) => {
  const {projectRef} = ref;
  // track the scroll y position of page, relative to projectRef
  const [scrollYProject, setscrollYProject] = useState(0);
  const [scrollUpArrow, setScrollUpArrow] = useState(false);
  const [scrollDownArrowAnimation, setScrollDownArrowAnimation] = useState(true);
  const fadeInAnimation = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 2000
    }
  });


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

  let latestBlogUrl = "/posts/" + getLatestBlogs(1)[0].id;

  return (
    <HomeWrapper>
      <HomeScreen style={fadeInAnimation}>
        <Title> 
            <h1>
              Hello, <br /> I'm James.
            </h1>
        </Title>
        <p>Computer Science BSc Graduate from the University of Sheffield.</p>
        <Link to={latestBlogUrl}>
          <button className="btn btn-primary btn-lg">Read my latest blog</button>
        </Link>
        <SocialMediaIcons />
        <ScrollDownButton onClick={() => {scrollTo(projectRef); setScrollDownArrowAnimation(!scrollDownArrowAnimation)}}>
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
        <ProjectOverview ref={projectRef} numProjects={3}/>
        <BlogOverview  getLatestBlogs={getLatestBlogs}/>
        <About/>
      </HomeContent>
    </HomeWrapper>
  );
});

export default Home;