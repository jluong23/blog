import React from "react";
import styled from "styled-components";
import Article from "./Article";
import blogData from "../blogs/BlogData.json";

const Wrapper = styled.div`
  background-color: darkgray;
  margin-top: 5em;
`

const Blogs = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
  }
`

const BlogOverview = (props) => {
  return (
    <Wrapper>
      <h1>Blog.</h1>
      <Blogs>
        {blogData.map((blog) => {
          let url = "/posts/" + blog["id"];
          let thumbnail = require("../blogs/thumbnails/" + blog["thumbnail"]);
          return (
            <Article 
              variant="blog"
              date={blog["date"]}
              key={blog["id"]} 
              color={blog["color"]} 
              title = {blog["title"]} 
              description={blog["description"]} 
              thumbnail={thumbnail} 
              onClickUrl={url}
            />
          )
        })}

      </Blogs>
    </Wrapper>
  );
};

export default BlogOverview;