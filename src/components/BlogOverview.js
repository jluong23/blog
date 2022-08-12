import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import Article from "./Article";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${({ bgColor }) => `${bgColor}`};
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

  
const CategoryFiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
  margin-left: auto;
  margin-right: auto;
  & > button {
    font-size: 1.1em;
    margin : 0 .2em;
  }

`

const BlogOverview = ({getLatestBlogs, numBlogs, title, useCategoryFilter, blogCategories}) => {
  const [blogsToShow, setBlogsToShow] = useState(getLatestBlogs(numBlogs));
  const [selectedCategory, setSelectedCategory] = useState("");
  const theme = useTheme();

  const DEFAULT_NUM_BLOGS = 3;
  // default title is for home page, can be changed via props
  const HOME_TITLE = (
    <div>
      <h1>Recent Blog Posts.</h1>
      <h2>
        <Link to="/posts">(See All)</Link>
      </h2>
    </div>
  );
  if(!numBlogs){
    numBlogs = DEFAULT_NUM_BLOGS;
  }
  // category filter, include in render if useCategoryFiler is true and there exists blogCategories dictionary
  let categoryFilters;

  const categoryButtonClicked = (e, category, buttons) => {
    if(selectedCategory == category){
      // disable the selected category, showing all blogs
      setSelectedCategory(""); // update state to no category
      setBlogsToShow(getLatestBlogs(numBlogs)); // show all blogs
    }else{
      setSelectedCategory(category); // update state to selected category
      setBlogsToShow(getLatestBlogs(numBlogs, category)); // show only blogs of given category
    }
  }

  if(useCategoryFilter && blogCategories){
    categoryFilters = Object.keys(blogCategories).map((category) => {
      let count = blogCategories[category];
      let buttonClass = selectedCategory == category ? "btn btn-success" : "btn btn-primary";
      return (
        <button key={category} className={buttonClass} onClick={(e) => {categoryButtonClicked(e, category, categoryFilters)}}>
          {category} ({count})
        </button>
      )
    });
  }

  return (
    <Wrapper id="blog" bgColor={theme.overviewColor}>
      {title ? <h1>{title}</h1> : HOME_TITLE}
      {useCategoryFilter && (
        <CategoryFiltersWrapper id="category-filters">
          {categoryFilters}
        </CategoryFiltersWrapper>
      )}
      <hr/>
      <Blogs>
        {blogsToShow.map((blog) => {
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
              blogCategories={blog["categories"]}
            />
          )
        })}

      </Blogs>
    </Wrapper>
  );
};

export default BlogOverview;