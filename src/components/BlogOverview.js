import React from "react";
import styled from "styled-components";
import Article from "./Article";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: darkgray;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1200px) {
      width: 75%;
  }
  & a{
    text-decoration: none;
  }
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
const BlogOverview = ({getLatestBlogs, numBlogs, title}) => {
  const DEFAULT_NUM_BLOGS = 3;
  // default title is for home page, can be changed via props
  const HOME_TITLE = <h1>Recent Blog Posts. <Link to="/posts">(See All)</Link></h1>
  if(!numBlogs){
    numBlogs = DEFAULT_NUM_BLOGS;
  }
  let recentBlogs = getLatestBlogs(numBlogs);
  return (
    <Wrapper id="blog">
      {title ? <h1>{title}</h1> : HOME_TITLE}
      <Blogs>
        {recentBlogs.map((blog) => {
          let url = "/posts/" + blog["id"];
          let thumbnail = require(`../blogs/assets/${blog["id"]}/${blog["thumbnail"]}`);
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