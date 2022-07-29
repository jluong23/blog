import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import "./styling.css";
import BlogOverview from "./components/BlogOverview";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100%;
`

const ContentWrapper = styled.div`
  padding: 0.5em;
  height: 100%;
`

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<BlogOverview />} />
            <Route path="/posts/:blogId" element={<BlogPost />}/>
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;