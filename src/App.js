import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import "./styling.css";
import BlogOverview from "./components/BlogOverview";
import ProjectOverview from "./components/ProjectOverview";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import blogData from "./blogs/BlogData.json";
import NavigationMenu from "./components/NavigationMenu";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
const AppWrapper = styled.div`
  height: 100%;
  width: inherit;
`

const ContentWrapper = styled.div`
  padding: 0.5em;
  height: 100%;
  text-align: center;
`


const App = () => {
  const refs = {
    projectRef: useRef(),
    navMenuRef: useRef(),
    scrollDownButtonRef: useRef(),
  }

  // // used to print refs when updated
  // useEffect(() => {
  //   console.log(refs);
  // }, [refs])

  function getLatestBlogs(n){
    // gets n latest blogs, starting from most recent
    let sortedBlogs = [...blogData]
    sortedBlogs.sort(function(a,b){
      return new Date(b["date"]) - new Date(a["date"]);
    });
    return sortedBlogs.slice(0, n);
  }

  // used by scroll buttons, ref can be 'top' or a ref to a DOM object
  const scrollTo = (ref) => {
    if(ref == "top"){
      window.scrollTo({top: 0, behavior: "smooth"});
    }else{
      let y = ref.current.getBoundingClientRect().y + 1;
      window.scrollBy({top: y, behavior: "smooth"});
    }
  }

  const [navMenuFocus, setNavMenuFocus] = useState(false);
  const [absoluteHeader, setAbsoluteHeader] = useState(false);
  return (
    <BrowserRouter basename="/blog">
      <ScrollToTop/>
      <AppWrapper>
        <Header absoluteHeader={absoluteHeader} setNavMenuFocus={setNavMenuFocus}/>
        <NavigationMenu navMenuFocus={navMenuFocus} setNavMenuFocus={setNavMenuFocus} ref={refs}/>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home setNavMenuFocus={setNavMenuFocus} scrollTo={scrollTo} setAbsoluteHeader={setAbsoluteHeader} getLatestBlogs={getLatestBlogs} ref={refs}/>} />
            <Route path="/posts" element={<BlogOverview getLatestBlogs={getLatestBlogs}/>} />
            <Route path="/posts/:blogId" element={<BlogPost />}/>
            <Route path="/projects" element={<ProjectOverview/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;