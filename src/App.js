import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import "./styling.css";
import BlogPage from "./pages/BlogPage";
import ProjectOverview from "./components/ProjectOverview";
import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import blogData from "./blogs/BlogData.json";
import NavigationMenu from "./components/NavigationMenu";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import { lightTheme, darkTheme } from "./components/Themes";
import { GlobalStyles } from "./components/GlobalStyles";
const AppWrapper = styled.div`
  height: 100%;
  width: inherit;
`

const ContentWrapper = styled.div`
  padding: 0.5em;
  height: 100%;
  text-align: center;
  & > *{
    margin-left: auto;
    margin-right: auto;
  }
`


const App = () => {
  const refs = {
    projectRef: useRef(),
    navMenuRef: useRef(),
  }

  function getLatestBlogs(n, category){
    // gets n latest blogs, index 0 being most recent blog
    let sortedBlogs = [...blogData]
    sortedBlogs.sort(function(a,b){
      return new Date(b["date"]) - new Date(a["date"]);
    });
    sortedBlogs = sortedBlogs.slice(0, n);

    // get blogs of a specific category if given
    if(category){
      sortedBlogs = sortedBlogs.filter((blog) => blog.categories.includes(category));
    }
    return sortedBlogs;
  }

  function getBlogCategories(){
    // returns a dictionary of categories to blog count for all blogs
    let categoryCounts = {};
    blogData.map((blog) => {
      blog.categories.map((category) => {
        if(categoryCounts[category]){
          categoryCounts[category] += 1;
        }else{
          categoryCounts[category] = 1;
        }
      });
    });
    return categoryCounts;
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
  const [theme, setTheme] = useState("dark");
  
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light"); 
  }
  return (
    <BrowserRouter basename="/blog">
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
          <GlobalStyles/>
          <ScrollToTop/> {/* React scroll restoration on each page, scrolling to top */}
          <AppWrapper>
            <Header absoluteHeader={absoluteHeader} setNavMenuFocus={setNavMenuFocus} toggleTheme={toggleTheme}/>
            <NavigationMenu navMenuFocus={navMenuFocus} setNavMenuFocus={setNavMenuFocus} ref={refs}/>
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home setNavMenuFocus={setNavMenuFocus} scrollTo={scrollTo} setAbsoluteHeader={setAbsoluteHeader} getLatestBlogs={getLatestBlogs} ref={refs}/>} />
                <Route path="/posts" element={<BlogPage getLatestBlogs={getLatestBlogs} blogCategories={getBlogCategories()}/>} />
                <Route path="/posts/:blogId" element={<BlogPost />}/>
                <Route path="/projects" element={<ProjectOverview title={"Projects"}/>} />
                <Route path="/about" element={<About/>} />
              </Routes>
            </ContentWrapper>
          </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;