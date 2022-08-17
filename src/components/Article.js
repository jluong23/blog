import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.article`
  flex: 1 1 0px;
  height: 100%;
  display: flex;
  flex-direction: column;

  & a {
    text-decoration: none;
    color: inherit;
  }
  .project-content{
    justify-content: space-evenly;
    @media screen and (min-width: 800px) {
      flex-direction: row;
    }
  }
`
const ArticleTitle = styled.h2`
    text-align: center;
`

const ArticleDate = styled.p`
  font-style: italic;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 1em 0em;

`

const ArticleImage = styled.div`
  width: 75%;
  max-width: 500px;
  & > img{
    width: 100%;
    height: 100%;
  }
`

const ArticleDescription = styled.div`
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  @media screen and (min-width: 800px) {
    width: 50%;
  }
`

const ArticleLinks = styled.div`

  & button {
    margin: .5em;
  }
`

const BlogCategories = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    color: inherit;
    margin: 0 .2em;
  }
`


const Article = ({variant, date, color, title, description, thumbnail, blogCategories, blogUrl, projectUrls}) => {
  let articleLinks = () => {
    if(variant == "blog" && blogUrl){
      return (
        <ArticleLinks>
          <Link to={blogUrl}>
            <button className="btn btn-primary btn-lg">Read</button>
          </Link>
        </ArticleLinks>
      );
    }else if(variant == "project" && projectUrls){
      return ( 
        <ArticleLinks>
          {Object.keys(projectUrls).map((text) => {
            return (
              <a key={text} href={projectUrls[text]}>
                <button className="btn btn-primary btn-lg">{text}</button>
              </a>
            );
          })}
        </ArticleLinks>
      )
    }
    return null;
  }

  // list of categories for each blog post
  let blogCategoriesContent;
  if(variant == 'blog' && blogCategories && blogCategories.length > 0){
    blogCategoriesContent = blogCategories.map((category) => {
      return (
        <span key={category} className="badge bg-warning">
          {category}
        </span>
      );
    });
  }


  return (
    <Wrapper color={color}>
      <ArticleTitle>{title}</ArticleTitle>  
      {date && <ArticleDate>{moment(date).format("MMMM Do YYYY")}</ArticleDate>}
      {blogCategoriesContent ? (
        <BlogCategories>
            {blogCategoriesContent}
        </BlogCategories>
      ) : null}
      <ArticleContent className={variant+"-content"}> {/* Wrapper for image, description and image */}
        <ArticleImage className="article-image">
          {thumbnail == null ? <img /> : <img src={thumbnail} />}
        </ArticleImage>
        <ArticleDescription> {/*Contains description and image*/}
          <p>{description}</p>
          {articleLinks()}
        </ArticleDescription>
      </ArticleContent>
    </Wrapper>
  );
};

export default Article;