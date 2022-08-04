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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }

  .article-image {
    height: 300px;
    & > img{
      object-fit: contain;

    }
  }
  
`

function getLatestBlogs(blogs, n){
  // gets n latest blogs, starting from most recent
  let sortedBlogs = [...blogs]
  sortedBlogs.sort(function(a,b){
    return new Date(b["date"]) - new Date(a["date"]);
  });
  return sortedBlogs.slice(0, n);
}

const BlogOverview = (props) => {
  const NUM_BLOGS_TO_RECEIVE = 3;
  let recentBlogs = getLatestBlogs(blogData, NUM_BLOGS_TO_RECEIVE);
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