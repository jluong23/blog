import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.article`
  padding-bottom: .3em;
  margin: 1em 0;
  flex: 1 1 0px;
  /* flex: 1; */
  display: flex;
  flex-direction: column;

  & a {
    text-decoration: none;
    color: inherit;
  }
  .project-content{
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
  padding: 1em;
  height: 100%;
  & > *{
    margin: .5em;
  }
`

const ArticleImage = styled.div`
  opacity: 70%;
  width: 75%;
  max-width: 500px;
  & > img{
    min-height: 200px;
    width: 100%;
    height: 100%;
  }
`

const ArticleDescription = styled.div`
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: auto;
  width: 50%;
  & p {
    width: 200%;
    @media screen and (min-width: 800px) {
      width: 100%;
    }
  }
`

const ArticleLinks = styled.div`
  & button {
    margin: .5em;
    top: 0;
  }
`


const Article = ({variant, date, color, title, description, thumbnail, blogUrl, projectUrls}) => {
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

  return (
    <Wrapper color={color}>
      <ArticleTitle>{title}</ArticleTitle>  
      {date && <ArticleDate>{moment(date).format("MMMM Do YYYY")}</ArticleDate>}
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