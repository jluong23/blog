import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import "./styling.css";
import BlogOverview from "./components/BlogOverview";
import styled from "styled-components";
import React, { useState } from "react";

const AppWrapper = styled.div`
  height: 100%;
`

const ContentWrapper = styled.div`
  padding: 0.5em;
  height: 100%;
`


const App = () => {
  const [absoluteHeader, setAbsoluteHeader] = useState(false);
  return (
    <BrowserRouter basename="/blog">
      <AppWrapper>
        <Header absoluteHeader={absoluteHeader}/>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home setAbsoluteHeader={setAbsoluteHeader}/>} />
            <Route path="/posts" element={<BlogOverview />} />
            <Route path="/posts/:blogId" element={<BlogPost />}/>
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;