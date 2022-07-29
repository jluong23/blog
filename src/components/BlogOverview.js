import React from "react";
import styled from "styled-components";
import Article from "./Article";
import blogData from "../blogs/BlogData.json";
const Wrapper = styled.div`
  padding: .5em;
`



const BlogOverview = (props) => {
  return (
    <Wrapper>
      <h1>Blog.</h1>
      {blogData.map((blog) => {
        let url = "/blog/" + blog["id"];;
        let imgFile = require("../assets/" + blog["imgName"]);
        
        return (
          <Article key={blog["id"]} color={blog["color"]} title = {blog["title"]} description={blog["description"]} imgSrc={imgFile} onClickUrl={url}/>
        )
      })}
    </Wrapper>
  );
};

export default BlogOverview;