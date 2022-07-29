import React from "react";
import styled from "styled-components";
import Article from "./Article";
import blogData from "../blogs/BlogData.json";

const Wrapper = styled.div`
  background-color: darkgray;
`

const Blogs = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`

const BlogOverview = (props) => {
  return (
    <Wrapper>
      <h1>Blog.</h1>
      <Blogs>
        {blogData.map((blog) => {
          let url = "/blog/" + blog["id"];;
          let imgFile = require("../assets/" + blog["imgName"]);
          
          return (
            <Article key={blog["id"]} color={blog["color"]} title = {blog["title"]} description={blog["description"]} imgSrc={imgFile} onClickUrl={url}/>
          )
        })}

      </Blogs>
    </Wrapper>
  );
};

export default BlogOverview;