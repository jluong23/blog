import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.article`
  padding-bottom: .3em;
  margin: 1em 0;

  & a {
    text-decoration: none;
    color: inherit;
  }
`
const ArticleTitle = styled.h2`
    text-align: center;
    padding-bottom: 1em;
`

const ArticleDate = styled.p`
  font-style: italic;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  /* article description */
  & p {
    padding: .5em;
    width: 60%;
    text-align: center;
    max-width: 350px;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`

const ArticleImage = styled.img`
  background-color: gray;
  opacity: 70%;
  width: 50%;
  max-width: 500px;
`

const ArticleDescription = styled.div`
  & p {
    margin: auto;
  }
`

const ArticleLinks = styled.div`
  & > * {
    padding: 0 .2em;
  }
`


const Article = ({variant, date, color, title, description, thumbnail, blogUrl, projectUrls}) => {
  let articleLinks = () => {
    if(variant == "blog" && blogUrl){
      return (
        <ArticleLinks>
          <Link to={blogUrl}>
            <button className="btn btn-primary">Read</button>
          </Link>
        </ArticleLinks>
      );
    }else if(variant == "project" && projectUrls){
      return ( 
        <ArticleLinks>
          {Object.keys(projectUrls).map((text) => {
            return (
              <a key={text} href={projectUrls[text]}>
                <button className="btn btn-primary">{text}</button>
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
      <ArticleContent> {/* Wrapper for image, description and image */}
        {thumbnail == null ?  <ArticleImage/> : <ArticleImage  src={thumbnail} />}
        <ArticleDescription> {/*Contains description and image*/}
          <p>{description}</p>
          {articleLinks()}
        </ArticleDescription>
      </ArticleContent>
    </Wrapper>
  );
};

export default Article;