import React from "react";
import styled from "styled-components";
import Article from "./Article";
import blogData from "../blogs/BlogData.json";
const Wrapper = styled.div`
  padding: .5em;
`

const ArticleLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const BlogOverview = (props) => {
  return (
    <Wrapper>
      <h1>Blog.</h1>
      {blogData.map((blog) => {
        let url = "/blog/" + blog["id"];;
        let imgFile = require("../assets/" + blog["imgName"]);
        
        return (
          <ArticleLink href={url} key={blog["id"]}>
            <Article color={blog["color"]} title = {blog["title"]} description={blog["description"]} imgSrc={imgFile}/>
          </ArticleLink>
        )
      })}
    </Wrapper>
  );
};

export default BlogOverview;