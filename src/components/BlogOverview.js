import React from "react";
import styled from "styled-components";
import Article from "./Article";
import articleImage from "../assets/article.jpg";
const Wrapper = styled.div`
  padding: .5em;
`

const BlogOverview = (props) => {
  return (
    <Wrapper>
      <h1>Blog.</h1>
      <Article color="deepskyblue" title="Blog Article 1" description = "Learn how to do something" imgSrc={articleImage}/>
      <Article color="firebrick" title="Blog Article 2" description = "Testing"/>
    </Wrapper>
  );
};

export default BlogOverview;