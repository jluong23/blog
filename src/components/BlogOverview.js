import React from "react";
import styled from "styled-components";
import Article from "./Article";

const Wrapper = styled.div`
  background-color: darkgray;
  margin-top: 5em;
`

const Blogs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }

  .article-image {
    height: 15rem;
    & > img{
      object-fit: contain;
    }
  }
  
`
const NUM_BLOGS_TO_RECEIVE = 3;
const BlogOverview = ({getLatestBlogs}) => {
  let recentBlogs = getLatestBlogs(NUM_BLOGS_TO_RECEIVE);
  return (
    <Wrapper>
      <h1>Blog.</h1>
      <Blogs>
        {recentBlogs.map((blog) => {
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
              blogUrl={url}
            />
          )
        })}

      </Blogs>
    </Wrapper>
  );
};

export default BlogOverview;