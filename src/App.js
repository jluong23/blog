import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import "./styling.css";
import BlogOverview from "./components/BlogOverview";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import blogData from "./blogs/BlogData.json";
import NavigationMenu from "./components/NavigationMenu";
import ScrollToTop from "./components/ScrollToTop";
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
  }

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
      let y = ref.current.getBoundingClientRect().y +10;
      window.scrollBy({top: y, behavior: "smooth"});
    }
  }

  const [navigationMenuFocus, setNavigationMenuFocus] = useState(false);
  const [absoluteHeader, setAbsoluteHeader] = useState(true);
  return (
    <BrowserRouter basename="/blog">
      <ScrollToTop/>
      <AppWrapper>
        <Header absoluteHeader={absoluteHeader} setNavigationMenuFocus={setNavigationMenuFocus}/>
        <NavigationMenu navigationMenuFocus={navigationMenuFocus} setNavigationMenuFocus={setNavigationMenuFocus} ref={refs.navMenuRef}/>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home scrollTo={scrollTo} setAbsoluteHeader={setAbsoluteHeader} getLatestBlogs={getLatestBlogs} ref={refs.projectRef}/>} />
            <Route path="/posts" element={<BlogOverview />} />
            <Route path="/posts/:blogId" element={<BlogPost />}/>
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;